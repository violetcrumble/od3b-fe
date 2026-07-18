import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import CategoryNavPills from '../../components/CategoryNavPills/CategoryNavPills';
import { GET_ALL_RECIPES } from '../../graphql/queries.js';
import ContentWrapper from '../../components/ContentWrapper.js';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/CocktailRecipes.module.scss';

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
      recipes: data.data.recipes_connection.data,
    },
  };
}

export default function Recipes({ recipes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const visibleRecipes = recipes.filter((recipe) =>
    recipe.attributes.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Cocktail Recipes</title>
        <meta
          name="description"
          content="Cocktail Underground - How to make craft cocktails at home and how to find the best bars"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/cocktail-recipes`} />
        <meta property="og:title" content="Cocktail Underground - Cocktail Recipes" />
        <meta property="og:description" content="How to make craft cocktails at home" />
      </Head>

      <div className="constrained-content">
        <h1 className="text-brand-purple">Cocktail Recipes</h1>

        <CategoryNavPills />

        <div className={styles['recipe-controls']}>
          <input
            type="search"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search recipes"
          />
        </div>

        <h2 className="sr-only">Recipes</h2>

        <div className="listings-3-col">
          {visibleRecipes.map((recipe, index) => (
            <Link
              className="listing-card"
              key={recipe.attributes.recipeUrlSlug}
              href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}
            >
              <RecipeListingCard recipe={recipe} priority={index === 0} />
            </Link>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
