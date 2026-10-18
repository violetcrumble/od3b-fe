import { useSyncExternalStore } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import trackEvent from '../../utils/analytics';
import SITE_URL from '../../utils/siteUrl';
import styles from './BanCountdownBar.module.scss';

// The federal hemp THC ban takes effect Dec 11, 2026. The count is in calendar
// days on the US Eastern date, fixed here so it never needs a rebuild.
const BAN_DATE_UTC = Date.UTC(2026, 11, 11);
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const easternDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' });

const COUNTDOWN_HREF = '/thc-drinks/discounts';
const AFTER_BAN_HREF = '/blog/willies-remedy-alternatives';

// Route gate. Any path under these prefixes shows the bar (that covers the THC
// hub, guides, recipes, legal states, discounts and every review).
const PATH_PREFIXES = ['/thc-drinks'];
// Plus these blog posts by slug. Add a slug here to show the bar on another post.
const BLOG_SLUGS = ['thc-drink-ban-november-2026', 'is-willies-remedy-legal-thc-drinks-explained'];

// One localStorage key holds which phase was dismissed, so someone who closed
// the countdown still sees the after-ban message once.
const STORAGE_KEY = 'banCountdownBarDismissed';

export function isThcPath(asPath) {
  const path = asPath.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  if (PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))) return true;
  const slug = path.match(/^\/blog\/([^/]+)$/)?.[1];
  return Boolean(slug && BLOG_SLUGS.includes(slug));
}

// Whole days from today's Eastern date to Dec 11: 1 on Dec 10, 0 on Dec 11.
export function daysUntilBan(now = new Date()) {
  const [year, month, day] = easternDate.format(now).split('-').map(Number);
  return Math.round((BAN_DATE_UTC - Date.UTC(year, month - 1, day)) / MS_PER_DAY);
}

// Day count and dismissal live outside React as a tiny external store, read
// through useSyncExternalStore. The server snapshot is null, so SSR and the
// hydration pass both render nothing and there's no mismatch; the real
// snapshot (a plain string, so unchanged values compare equal) replaces it
// right after hydration.
const listeners = new Set();
// Fallback so the X still works for this page view when localStorage is unavailable.
let dismissedThisPageView = '';

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  const days = daysUntilBan();
  const phase = days > 0 ? 'countdown' : 'after_ban';
  let dismissed = dismissedThisPageView;
  try {
    dismissed = dismissed || window.localStorage.getItem(STORAGE_KEY) || '';
  } catch {
    // Private mode or storage blocked: the bar just comes back next visit.
  }
  return `${phase}|${days}|${dismissed === phase ? 'dismissed' : ''}`;
}

function getServerSnapshot() {
  return null;
}

function dismiss(phase) {
  try {
    window.localStorage.setItem(STORAGE_KEY, phase);
  } catch {
    // See above.
  }
  dismissedThisPageView = phase;
  listeners.forEach((listener) => listener());
}

export default function BanCountdownBar() {
  const { asPath } = useRouter();
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (snapshot === null || !isThcPath(asPath)) return null;

  const [phase, daysText, dismissedFlag] = snapshot.split('|');
  if (dismissedFlag) return null;

  const days = Number(daysText);
  const href = phase === 'countdown' ? COUNTDOWN_HREF : AFTER_BAN_HREF;

  function handleLinkClick(event) {
    // Same event and field names as utils/trackAffiliateClicks.js, so the GTM
    // trigger already forwards it. Filter on affiliate_placement to break it out.
    trackEvent('affiliate_click', {
      affiliate_url: `${SITE_URL}${href}`,
      affiliate_domain: new URL(SITE_URL).hostname,
      affiliate_placement: 'ban_countdown_bar',
      affiliate_campaign: phase,
      affiliate_partner: '',
      affiliate_clickref: '',
      link_text: event.currentTarget.innerText.trim().slice(0, 100),
      page_path: window.location.pathname,
    });
  }

  return (
    <div className={styles['ban-bar']} role="region" aria-label="THC ban notice">
      <p>
        {phase === 'countdown' ? (
          <>
            <strong>
              {days} {days === 1 ? 'day' : 'days'} left for THC drinks.
            </strong>{' '}
            <span className={styles.detail}>The federal hemp ban takes effect Dec 11. </span>
            <Link href={href} onClick={handleLinkClick}>
              Stock up with our partner codes &rarr;
            </Link>
          </>
        ) : (
          <>
            <strong>The federal hemp THC ban took effect Dec 11.</strong>{' '}
            <Link href={href} onClick={handleLinkClick}>
              Here&rsquo;s what&rsquo;s still legal &rarr;
            </Link>
          </>
        )}
      </p>
      <button type="button" className={styles.dismiss} onClick={() => dismiss(phase)} aria-label="Dismiss this notice">
        &times;
      </button>
    </div>
  );
}
