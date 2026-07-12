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
  'home-bar-supplies',
  'home-bar-supplies/filming-equipment',
  'friends',
];

function generateSiteMap(recipeSlugs, blogSlugs) {
  const urls = [
    URL,
    ...STATIC_PATHS.map((path) => `${URL}/${path}`),
    ...recipeSlugs.map((slug) => `${URL}/cocktail-recipes/${slug}`),
    ...blogSlugs.map((slug) => `${URL}/blog/${slug}`),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>
`;
}

export async function getServerSideProps({ res }) {
  const [recipesResult, blogResult] = await Promise.all([
    client.query({ query: GET_ALL_RECIPE_SLUGS }),
    client.query({ query: GET_ALL_BLOG_SLUGS }),
  ]);

  const recipeSlugs = recipesResult.data.recipes.data.map((recipe) => recipe.attributes.recipeUrlSlug);
  const blogSlugs = blogResult.data.blogPosts.data.map((blogPost) => blogPost.attributes.urlSlug);

  const sitemap = generateSiteMap(recipeSlugs, blogSlugs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
