// pages/sitemap.xml.js

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { GET_ALL_RECIPE_SLUGS, GET_ALL_BLOG_SLUGS, GET_ALL_REVIEW_SLUGS } from '../graphql/queries';

const URL = 'https://www.cocktailunderground.com';
const STRAPI_URL = process.env.STRAPIBASEURL;

const client = new ApolloClient({
  link: new HttpLink({ uri: `${STRAPI_URL}/graphql` }),
  cache: new InMemoryCache(),
});

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
  'home-bar-supplies',
  'home-bar-supplies/filming-equipment',
  'friends',
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
  const [recipesResult, blogResult, reviewsResult] = await Promise.all([
    client.query({ query: GET_ALL_RECIPE_SLUGS }),
    client.query({ query: GET_ALL_BLOG_SLUGS }),
    client.query({ query: GET_ALL_REVIEW_SLUGS }),
  ]);

  const recipes = recipesResult.data.recipes_connection.data.map((recipe) => ({
    slug: recipe.attributes.recipeUrlSlug,
    updatedAt: recipe.attributes.updatedAt,
  }));
  const blogPosts = blogResult.data.blogPosts_connection.data.map((blogPost) => ({
    slug: blogPost.attributes.urlSlug,
    updatedAt: blogPost.attributes.updatedAt,
  }));
  const reviews = reviewsResult.data.reviews_connection.data.map((review) => ({
    slug: review.attributes.reviewUrlSlug,
    updatedAt: review.attributes.updatedAt,
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
