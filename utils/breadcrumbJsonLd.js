import SITE_URL from './siteUrl';

// items: array of { name, url? } in order from Home to the current page.
// Omit `url` on the last item (the current page) per schema.org convention.
export default function getBreadcrumbJsonLd(items) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${SITE_URL}${item.url}` }),
    })),
  };
  return { __html: JSON.stringify(jsonLd) };
}
