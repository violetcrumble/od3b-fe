import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import { Listing3ColStyles } from '../../components/Listings3Col.styled';
import CategoryNavPills from '../../components/CategoryNavPills/CategoryNavPills';
import filterRecipesByCategory from '../../utils/filterRecipesByCategory.js';
import { toTitleCase } from '../../utils/toTitleCase.js';
import { GET_ALL_RECIPES } from '../../graphql/queries.js';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_ALL_RECIPES,
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
  const router = useRouter();
  const { category } = router.query; // Get the category from the URL
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [cocktailCategory, setCocktailCategory] = useState(category || '');

  useEffect(() => {
    if (category) {
      setCocktailCategory(category);
      setFilteredRecipes(filterRecipesByCategory(category, recipes));
    } else {
      setCocktailCategory('');
      setFilteredRecipes(recipes);
    }
  }, [category, recipes]);

  return (
    <ContentWrapper>
      <Head>
        <title>
          Cocktail Underground - {cocktailCategory ? `${toTitleCase(cocktailCategory)} Cocktail Recipes` : 'Cocktail Recipes'}
        </title>
        <meta
          name="description"
          content="Cocktail Underground - How to make craft cocktails at home and how to find the best bars"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Cocktail Underground - Cocktail Recipes" />
        <meta property="og:description" content="How to make craft cocktails at home" />
      </Head>

      <ContentWrapperConstrainedStyles>
        <main>
          <h1>
            Cocktail Recipes {cocktailCategory && `with ${toTitleCase(cocktailCategory)}`}
          </h1>

          <CategoryNavPills
            recipes={recipes}
            cocktailCategory={cocktailCategory}
            setFilteredRecipes={setFilteredRecipes}
            filterRecipesByCategory={filterRecipesByCategory}
          />

          <Listing3ColStyles>
            {filteredRecipes.map((recipe, index) => (
              <Link
                className="listing-card"
                key={index}
                href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}
                rel="canonical"
              >
                <RecipeListingCard recipe={recipe} />
              </Link>
            ))}
          </Listing3ColStyles>
        </main>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  );
}