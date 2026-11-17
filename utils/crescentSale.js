import { useSyncExternalStore } from 'react';
import affiliateLink from './affiliateLink';

// Crescent Canna's Green Wednesday buy one get one on Ellora and Crescent 9
// (Awin campaign 144812).
// Awin's window is Nov 25 1:00am to Dec 1 12:59am Central; these are the same
// instants in UTC, fixed here so the sale turns on and off without a rebuild.
const SALE_START_UTC = Date.UTC(2026, 10, 25, 7);
const SALE_END_UTC = Date.UTC(2026, 11, 1, 7);
// The end falls just after midnight in the Eastern and Central zones and late
// in the evening further west. Backing off a few hours lands on the evening the
// sale ends for every US visitor, which gives the date that counts as "tonight".
const LAST_EVENING_OFFSET_MS = 3 * 60 * 60 * 1000;
const CAMPAIGN_URL =
  'https://www.awin1.com/cread.php?awinmid=129383&awinaffid=2989155&campaign=green+wednesday+drinks+sale&ued=https%3A%2F%2Fwww.crescentcanna.com%2Fthc-drinks%2F';

export const SALE_CODE = 'GWBOGO';

// Pages that aren't about a Crescent product but do send Ellora buyers there.
// They get the sale box with this line in place of the usual one.
export const WILLIES_SALE_NOTE =
  'Ellora, Crescent Canna\u2019s THC spirit (10 mg per pour), is in the sale, along with the Crescent 9 seltzers. Use this code at checkout.';
export const SALE_BOX_REVIEW_SLUGS = ['willies-remedy-review'];
// Blog posts: the post's slug, then the id of the h2 the box goes under. The
// id comes from rehype-slug, so if that heading is reworded in Strapi the box
// drops off the post until this is updated.
export const SALE_BOX_BLOG_HEADINGS = {
  'willies-remedy-alternatives': 'willies-remedy-vs-ellora-the-middle-path',
};

// The Crescent Canna partner card, as it comes from Strapi, in the sidebar and
// on the discounts page. During the sale both dress that card for the sale
// themselves, so the partner entry in Strapi needs no edit and no rebuild.
export function isCrescentPartner(partner) {
  return /crescent/i.test(partner?.name || '');
}

// The campaign link with an Awin clickref of placement_content, so each spot
// on the site shows up on its own line in Awin's reports.
export function saleHref(placement, content) {
  return affiliateLink(CAMPAIGN_URL, { medium: placement, content });
}

// '' outside the sale window, 'sale' while it runs, 'last_day' once it's the
// visitor's own last day: from midnight where they are on the day the sale
// ends for them (Nov 30 across the US), so "ends tonight" is true wherever
// it's read. Uses the browser's time zone, so call it in the browser.
export function saleStage(now = new Date()) {
  const time = now.getTime();
  if (time < SALE_START_UTC || time >= SALE_END_UTC) return '';
  const lastDayStart = new Date(SALE_END_UTC - LAST_EVENING_OFFSET_MS);
  lastDayStart.setHours(0, 0, 0, 0);
  return time >= lastDayStart.getTime() ? 'last_day' : 'sale';
}

// Local review only: ?bar_date=2026-11-25T12:00 shows the site as it will look
// at that time. Ignored in production builds. Browser only.
export function currentTime() {
  if (process.env.NODE_ENV !== 'production') {
    const preview = new Date(new URLSearchParams(window.location.search).get('bar_date') || '');
    if (!Number.isNaN(preview.getTime())) return preview;
  }
  return new Date();
}

const subscribe = () => () => {};
const getStage = () => saleStage(currentTime());
const getServerStage = () => null;

// The sale stage for components. null on the server and during hydration, so
// the static HTML never carries the sale and there's no mismatch; the real
// value arrives right after hydration.
export function useSaleStage() {
  return useSyncExternalStore(subscribe, getStage, getServerStage);
}
