// pages/sitemap.xml.js

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { GET_ALL_RECIPE_SLUGS, GET_ALL_BLOG_SLUGS } from '../graphql/queries';

const URL = 'https://www.cocktailunderground.com';
const STRAPI_URL = process.env.STRAPIBASEURL;

const client = new ApolloClient({
  link: new HttpLink({ uri: `${STRAPI_URL}/graphql` }),
  cache: new InMemoryCache(),
});

const STATIC_PATHS = [
  'cocktail-recipes',
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

function generateSiteMap(recipes, blogPosts) {
  const entries = [
    urlEntry(URL),
    ...STATIC_PATHS.map((path) => urlEntry(`${URL}/${path}`)),
    ...recipes.map((recipe) => urlEntry(`${URL}/cocktail-recipes/${recipe.slug}`, recipe.updatedAt)),
    ...blogPosts.map((post) => urlEntry(`${URL}/blog/${post.slug}`, post.updatedAt)),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

export async function getServerSideProps({ res }) {
  const [recipesResult, blogResult] = await Promise.all([
    client.query({ query: GET_ALL_RECIPE_SLUGS }),
    client.query({ query: GET_ALL_BLOG_SLUGS }),
  ]);

  const recipes = recipesResult.data.recipes.data.map((recipe) => ({
    slug: recipe.attributes.recipeUrlSlug,
    updatedAt: recipe.attributes.updatedAt,
  }));
  const blogPosts = blogResult.data.blogPosts.data.map((blogPost) => ({
    slug: blogPost.attributes.urlSlug,
    updatedAt: blogPost.attributes.updatedAt,
  }));

  const sitemap = generateSiteMap(recipes, blogPosts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
