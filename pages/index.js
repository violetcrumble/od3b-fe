import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';
import HomePage from '../components/HomePage/Home';
import { GET_ALL_RECIPES, GET_ALL_THC_RECIPES, GET_LATEST_RECIPES } from '../graphql/queries';
import { strapiQuery, strapiQueryCached } from '../utils/strapiQuery';
import SITE_URL from '../utils/siteUrl';
import shuffleArray from '../utils/shuffleArray';

export async function getStaticProps(context) {
  const [data, thcData, latestData] = await Promise.all([
    strapiQueryCached(GET_ALL_RECIPES),
    strapiQueryCached(GET_ALL_THC_RECIPES),
    strapiQuery(GET_LATEST_RECIPES),
  ]);

  const thcRecipes = shuffleArray(thcData.recipes).slice(0, 2);
  const thcSlugs = thcRecipes.map((recipe) => recipe.recipeUrlSlug);
  const latestRecipe = latestData.recipes.find((recipe) => !thcSlugs.includes(recipe.recipeUrlSlug));

  return {
    props: {
      recipes: data.recipes,
      thcRecipes,
      latestRecipe: latestRecipe || null,
    },
  };
}

export default function Home({ recipes, thcRecipes, latestRecipe }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground</title>
        <meta
          name="description"
          content="Craft cocktail recipes tested and filmed at home: classic drinks, THC cocktails, honest product reviews, and home bar tips from Cocktail Underground."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />
      </Head>

      <HomePage recipes={recipes} thcRecipes={thcRecipes} latestRecipe={latestRecipe} />
    </ContentWrapper>
  );
}
