import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import { Listing3ColStyles } from '../../components/Listings3Col.styled';
import CategoryNavPills from '../../components/CategoryNavPills/CategoryNavPills';

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
            spirits {
              data {
                attributes {
                  spirit
                }
              }
            }
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

  // TODO: refactor this into separate file for reuse - also used on home page
  function filterRecipes(spiritsCategory, allRecipes) {
    let filteredByCategory = [];
    for (let i = 0; i < allRecipes.length; i++) {
        for (let j = 0; j < allRecipes[i].attributes.spirits.data.length; j++ ) {
            if (allRecipes[i].attributes.spirits.data[j].attributes.spirit === spiritsCategory) {
                filteredByCategory.push(allRecipes[i]);
            }
        }
      }
      return filteredByCategory;
  }

  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars - Cocktail Recipes</title>
        <meta name="description" content="One Drink Three Bars - How to make craft cocktails at home and how to find the best bars" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="One Drink Three Bars - Cocktail Recipes" />
        <meta property="og:description" content="How to make craft cocktails at home" />
      </Head>

      <ContentWrapperConstrainedStyles>
        <main>
          <h1>Cocktail Recipes</h1>

          <CategoryNavPills recipes={recipes} setFilteredRecipes={setFilteredRecipes} filterRecipes={filterRecipes} />
        
        <Listing3ColStyles>
        {filteredRecipes.map((recipe, index) => (
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
