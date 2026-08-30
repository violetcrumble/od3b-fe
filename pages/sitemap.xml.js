// pages/sitemap.xml.js

import { GET_ALL_RECIPE_SLUGS, GET_ALL_BLOG_SLUGS, GET_ALL_REVIEW_SLUGS } from '../graphql/queries';
import { strapiQuery } from '../utils/strapiQuery';
import PRODUCT_CATEGORIES from '../utils/productCategories';
import THC_STATE_GUIDES from '../data/thcStateGuides';

const URL = 'https://www.cocktailunderground.com';

// Blog slugs that permanently redirect elsewhere (see redirects in next.config.js).
// They must stay out of the sitemap, or Google reports them as "Page with redirect".
const REDIRECTED_BLOG_SLUGS = new Set(['crescent-9-thc-seltzer', 'willies-remedy-review']);

const STATIC_PATHS = [
  'cocktail-recipes',
  'cocktail-recipes/category/tequila',
  'cocktail-recipes/category/vodka',
  'cocktail-recipes/category/rum',
  'cocktail-recipes/category/whiskey',
  'cocktail-recipes/category/gin',
  'cocktail-recipes/category/mezcal',
  'cocktail-recipes/category/cognac',
  'cocktail-recipes/category/cachaça',
  'cocktail-recipes/category/thc',
  'blog',
  'thc-drinks',
  'thc-drinks/recipes',
  'thc-drinks/reviews',
  'thc-drinks/guides',
  'thc-drinks/discounts',
  'thc-drinks/legal-states',
  ...THC_STATE_GUIDES.map((guide) => `thc-drinks/legal-states/${guide.slug}`),
  'home-bar-supplies',
  ...PRODUCT_CATEGORIES.map((category) => `home-bar-supplies/${category.slug}`),
  'home-bar-supplies/filming-equipment',
  'friends',
  'newsletter',
];

function urlEntry(loc, lastmod) {
  return `  <url>\n    <loc>${loc}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ''}  </url>`;
}

function generateSiteMap(recipes, blogPosts, reviews) {
  const entries = [
    urlEntry(URL),
    ...STATIC_PATHS.map((path) => urlEntry(`${URL}/${path}`)),
    ...recipes.map((recipe) => urlEntry(`${URL}/cocktail-recipes/${recipe.slug}`, recipe.updatedAt)),
    ...blogPosts.map((post) => urlEntry(`${URL}/blog/${post.slug}`, post.updatedAt)),
    ...reviews.map((review) => urlEntry(`${URL}/thc-drinks/reviews/${review.slug}`, review.updatedAt)),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

export async function getServerSideProps({ res }) {
  const [recipesData, blogData, reviewsData] = await Promise.all([
    strapiQuery(GET_ALL_RECIPE_SLUGS),
    strapiQuery(GET_ALL_BLOG_SLUGS),
    strapiQuery(GET_ALL_REVIEW_SLUGS),
  ]);

  const recipes = recipesData.recipes.map((recipe) => ({
    slug: recipe.recipeUrlSlug,
    updatedAt: recipe.updatedAt,
  }));
  const blogPosts = blogData.blogPosts
    .filter((blogPost) => !REDIRECTED_BLOG_SLUGS.has(blogPost.urlSlug))
    .map((blogPost) => ({
      slug: blogPost.urlSlug,
      updatedAt: blogPost.updatedAt,
    }));
  const reviews = reviewsData.reviews.map((review) => ({
    slug: review.reviewUrlSlug,
    updatedAt: review.updatedAt,
  }));

  const sitemap = generateSiteMap(recipes, blogPosts, reviews);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
