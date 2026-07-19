// Appends tracking params to an affiliate URL without disturbing any
// params the affiliate program itself requires (e.g. ?sld= for Crescent Canna,
// ?ref= for Grind with Gratitude).
// Awin tracker URLs (awin1.com) don't pass UTMs through to the destination
// site, so those get Awin's own clickref param, which surfaces in Awin reports.
export default function affiliateLink(baseUrl, { medium, campaign, content } = {}) {
  const url = new URL(baseUrl);
  if (url.hostname.endsWith('awin1.com')) {
    const clickref = [medium, campaign, content].filter(Boolean).join('_');
    if (clickref) url.searchParams.set('clickref', clickref);
  } else {
    url.searchParams.set('utm_source', 'cocktailunderground');
    if (medium) url.searchParams.set('utm_medium', medium);
    if (campaign) url.searchParams.set('utm_campaign', campaign);
    if (content) url.searchParams.set('utm_content', content);
  }
  return url.toString();
}
