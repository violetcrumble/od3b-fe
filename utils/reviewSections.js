// Reviews live in two sections. THC drink reviews stay under /thc-drinks:
// those URLs carry the site's Product-snippet traffic and the ban countdown
// bar, so they don't move. Everything else (bar gear, non-THC drinks) lives
// under /reviews. The Strapi review `category` field picks the section;
// reviews saved before the field existed have no value and count as THC.
const THC_CATEGORY = 'thc_drinks';

export const REVIEW_SECTIONS = {
  thc: {
    basePath: '/thc-drinks/reviews',
    trail: [
      { name: 'Home', url: '/' },
      { name: 'THC Drinks', url: '/thc-drinks' },
      { name: 'Reviews', url: '/thc-drinks/reviews' },
    ],
    // Partner CTA boxes in the sidebar, same as THC recipes.
    sidebar: 'thc_partners',
  },
  general: {
    basePath: '/reviews',
    trail: [
      { name: 'Home', url: '/' },
      { name: 'Reviews', url: '/reviews' },
    ],
    // The review's related Amazon products in the sidebar.
    sidebar: 'related_products',
  },
};

export function isThcReview(review) {
  return !review.category || review.category === THC_CATEGORY;
}

export function reviewSection(review) {
  return isThcReview(review) ? REVIEW_SECTIONS.thc : REVIEW_SECTIONS.general;
}

export function reviewHref(review) {
  return `${reviewSection(review).basePath}/${review.reviewUrlSlug}`;
}

export function reviewsInSection(reviews, section) {
  return reviews.filter((review) => reviewSection(review) === section);
}
