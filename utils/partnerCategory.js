// Affiliate partners belong to a Partner Category in Strapi. Each category has
// a handle: a short fixed label the code matches on. It is not part of any URL.
// The categories are managed in Strapi; the handles below are the ones the
// site's pages ask for. Partners with no category count as THC, which is what
// they all were before categories existed.
export const PARTNER_CATEGORIES = {
  thc: 'thc',
  gear: 'gear',
  drinks: 'drinks',
};

// Blog posts whose sidebar shows the non-THC drink partners. Every other post
// keeps the THC partners. Add a post's slug here when it should switch.
// Glossary pages (/glossary/...) always show the drink partners.
const DRINKS_PARTNER_BLOG_SLUGS = ['thc-drink-alternatives'];

export function partnersInCategory(partners, handle) {
  return (partners || []).filter((partner) => (partner.category?.handle || PARTNER_CATEGORIES.thc) === handle);
}

export function blogPartnerCategory(slug) {
  return DRINKS_PARTNER_BLOG_SLUGS.includes(slug) ? PARTNER_CATEGORIES.drinks : PARTNER_CATEGORIES.thc;
}
