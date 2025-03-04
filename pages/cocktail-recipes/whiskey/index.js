
import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../../components/ContentWrapperConstrained.styled';
import RecipeListingCard from '../../../components/Cards/RecipeListingCard/RecipeListingCard';
import { Listing3ColStyles } from '../../../components/Listings3Col.styled';
import { GET_ALL_WHISKEY_RECIPES } from '../../../graphql/queries.js';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_ALL_WHISKEY_RECIPES,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: {
      recipes: data.data.recipes.data,
    },
  };
}

export default function WhiskeyRecipes({ recipes }) {
  

  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Whiskey Cocktail Recipes</title>
        <meta name="description" content="Cocktail Underground - How to make craft cocktails at home and how to find the best bars" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Cocktail Underground - Whiskey Cocktail Recipes" />
        <meta property="og:description" content="How to make craft cocktails at home" />
      </Head>

      <ContentWrapperConstrainedStyles>
        <main>
          <h1>Whiskey Cocktail Recipes</h1>
        
        <Listing3ColStyles>
        {recipes.map((recipe, index) => (
              <Link className="listing-card" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                <RecipeListingCard  recipe={recipe} />
              </Link>
            ))}
        </Listing3ColStyles>
          
        </main>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  );
}
