import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import CategoryNavPills from '../../components/CategoryNavPills/CategoryNavPills';
import { GET_ALL_RECIPES } from '../../graphql/queries.js';
import { strapiQueryCached } from '../../utils/strapiQuery';
import ContentWrapper from '../../components/ContentWrapper.js';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/CocktailRecipes.module.scss';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_ALL_RECIPES);

  return {
    props: {
      recipes: data.recipes,
    },
  };
}

export default function Recipes({ recipes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const visibleRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
              key={recipe.recipeUrlSlug}
              href={`/cocktail-recipes/${recipe.recipeUrlSlug}`}
            >
              <RecipeListingCard recipe={recipe} priority={index === 0} />
            </Link>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
