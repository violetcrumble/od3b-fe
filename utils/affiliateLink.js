// Appends utm_* tracking params to an affiliate URL without disturbing any
// params the affiliate program itself requires (e.g. ?sld= for Crescent Canna,
// ?ref= for Grind with Gratitude).
export default function affiliateLink(baseUrl, { medium, campaign, content } = {}) {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', 'cocktailunderground');
  if (medium) url.searchParams.set('utm_medium', medium);
  if (campaign) url.searchParams.set('utm_campaign', campaign);
  if (content) url.searchParams.set('utm_content', content);
  return url.toString();
}
