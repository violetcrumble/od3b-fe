import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import { Listing3ColStyles } from '../../components/Listings3Col.styled';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{recipes(pagination: { limit: 300 }) {
        data {
          attributes {
            title
            ingredients
            recipebody
            recipeUrlSlug
            PhotoMain {
              data {
                attributes {
                  url
                  caption
                }
              }
            }
          }
        }
      }}`,
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

export default function Recipes({ recipes }) {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars - Cocktail Recipes</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapperConstrainedStyles>
      <main>
        <h1>Cocktail Recipes</h1>
       
       <Listing3ColStyles>
       {recipes.map((recipe, index) => (
            <Link className="listing-card" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}>
              <RecipeListingCard  recipe={recipe} />
            </Link>
          ))}
       </Listing3ColStyles>
          
        
      </main>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  );
}
