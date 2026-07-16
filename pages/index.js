import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';
import HomePage from '../components/HomePage/Home';
import { GET_ALL_RECIPES, GET_ALL_THC_RECIPES, GET_LATEST_RECIPES } from '../graphql/queries';
import SITE_URL from '../utils/siteUrl';
import shuffleArray from '../utils/shuffleArray';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = (query) => ({
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const [recipesRes, thcRecipesRes, latestRecipesRes] = await Promise.all([
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_RECIPES)),
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_THC_RECIPES)),
    fetch(`${URL}/graphql`, fetchParams(GET_LATEST_RECIPES)),
  ]);
  const data = await recipesRes.json();
  const thcData = await thcRecipesRes.json();
  const latestData = await latestRecipesRes.json();

  const thcRecipes = shuffleArray(thcData.data.recipes.data).slice(0, 2);
  const thcSlugs = thcRecipes.map((recipe) => recipe.attributes.recipeUrlSlug);
  const latestRecipe = latestData.data.recipes.data.find(
    (recipe) => !thcSlugs.includes(recipe.attributes.recipeUrlSlug),
  );

  return {
    props: {
      recipes: data.data.recipes.data,
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
        <meta name="description" content="Cocktail Underground" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />
      </Head>

      <HomePage recipes={recipes} thcRecipes={thcRecipes} latestRecipe={latestRecipe} />
    </ContentWrapper>
  );
}
