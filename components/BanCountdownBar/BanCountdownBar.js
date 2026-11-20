import { useSyncExternalStore } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import trackEvent from '../../utils/analytics';
import { SALE_CODE, currentTime, saleHref, saleStage } from '../../utils/crescentSale';
import SITE_URL from '../../utils/siteUrl';
import styles from './BanCountdownBar.module.scss';

// The federal hemp THC ban takes effect Dec 11, 2026. The count is in calendar
// days on the US Eastern date, fixed here so it never needs a rebuild.
const BAN_DATE_UTC = Date.UTC(2026, 11, 11);
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const easternDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' });

const COUNTDOWN_HREF = '/thc-drinks/discounts';
const AFTER_BAN_HREF = '/blog/willies-remedy-alternatives';

// While Crescent Canna's buy one get one runs (utils/crescentSale.js), the bar
// shows the sale in place of the countdown and links straight to the campaign
// link, with the code beside it.
const SALE_HREF = saleHref('ban_countdown_bar', 'gwbogo');

// Route gate. Any path under these prefixes shows the bar (that covers the THC
// hub, guides, legal states, discounts and every THC review). Pages outside
// these prefixes that are still about THC, like a THC recipe under
// /cocktail-recipes, pass thcPage to ContentWrapper instead.
const PATH_PREFIXES = ['/thc-drinks'];
// Plus these blog posts by slug. Add a slug here to show the bar on another post.
const BLOG_SLUGS = ['thc-drink-ban-november-2026', 'is-willies-remedy-legal-thc-drinks-explained'];

// One localStorage key holds the messages that were dismissed, comma separated.
// Each message has its own name (countdown, sale, sale_last_day, after_ban), so
// closing one never hides a message the reader hasn't seen yet, and closing the
// sale doesn't bring the countdown back.
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

function dismissedMessages() {
  let stored = '';
  try {
    stored = window.localStorage.getItem(STORAGE_KEY) || '';
  } catch {
    // Private mode or storage blocked: the bar just comes back next visit.
  }
  return [...stored.split(','), ...dismissedThisPageView.split(',')].filter(Boolean);
}

function getSnapshot() {
  const now = currentTime();
  const days = daysUntilBan(now);
  const stage = saleStage(now);
  const phase = stage ? 'sale' : days > 0 ? 'countdown' : 'after_ban';
  const message = stage === 'last_day' ? 'sale_last_day' : phase;
  return `${phase}|${days}|${dismissedMessages().includes(message) ? 'dismissed' : ''}|${message}`;
}

function getServerSnapshot() {
  return null;
}

function dismiss(message) {
  const messages = [...new Set([...dismissedMessages(), message])].join(',');
  try {
    window.localStorage.setItem(STORAGE_KEY, messages);
  } catch {
    // See above.
  }
  dismissedThisPageView = messages;
  listeners.forEach((listener) => listener());
}

export default function BanCountdownBar({ thcPage = false }) {
  const { asPath } = useRouter();
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (snapshot === null || !(thcPage || isThcPath(asPath))) return null;

  const [phase, daysText, dismissedFlag, message] = snapshot.split('|');
  const lastDay = message === 'sale_last_day';
  if (dismissedFlag) return null;

  if (phase === 'sale') {
    // rel="sponsored" hands the click to utils/trackAffiliateClicks.js, like
    // every other partner link, so there's no handler here. The data attributes
    // give it the same placement the countdown link reports, with the phase as
    // the campaign.
    return (
      <div className={styles['ban-bar']} role="region" aria-label="THC drink sale notice">
        <p>
          <strong>{lastDay ? 'Ends tonight: buy' : 'Buy'} one, get one free on Ellora and Crescent 9.</strong>{' '}
          {!lastDay && <span className={styles.detail}>Through Monday, Nov 30. </span>}
          Code <span className={styles.code}>{SALE_CODE}</span>{' '}
          <a
            href={SALE_HREF}
            target="_blank"
            rel="sponsored noopener noreferrer"
            data-affiliate-placement="ban_countdown_bar"
            data-affiliate-campaign={phase}
          >
            Shop the sale &rarr;
          </a>
        </p>
        <button
          type="button"
          className={styles.dismiss}
          onClick={() => dismiss(message)}
          aria-label="Dismiss this notice"
        >
          &times;
        </button>
      </div>
    );
  }

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
      <button
        type="button"
        className={styles.dismiss}
        onClick={() => dismiss(message)}
        aria-label="Dismiss this notice"
      >
        &times;
      </button>
    </div>
  );
}
