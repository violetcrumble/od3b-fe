import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import CategoryNavPills from '../../components/CategoryNavPills/CategoryNavPills';
import filterRecipesByCategory from '../../utils/filterRecipesByCategory.js';
import { toTitleCase } from '../../utils/toTitleCase.js';
import { GET_ALL_RECIPES } from '../../graphql/queries.js';
import ContentWrapper from '../../components/ContentWrapper.js';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/CocktailRecipes.module.scss';

const URL = process.env.STRAPIBASEURL;

const CATEGORY_LABEL_OVERRIDES = { thc: 'THC' };

function categoryLabel(category) {
  return CATEGORY_LABEL_OVERRIDES[category] || toTitleCase(category);
}

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
  const cocktailCategory = category || '';
  const filteredRecipes = category ? filterRecipesByCategory(category, recipes) : recipes;

  const [searchTerm, setSearchTerm] = useState('');

  const visibleRecipes = filteredRecipes.filter((recipe) =>
    recipe.attributes.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const canonicalUrl = `${SITE_URL}/cocktail-recipes${
    cocktailCategory ? `?category=${encodeURIComponent(cocktailCategory)}` : ''
  }`;

  return (
    <ContentWrapper>
      <Head>
        <title>
          {`Cocktail Underground - ${
            cocktailCategory ? `${categoryLabel(cocktailCategory)} Cocktail Recipes` : 'Cocktail Recipes'
          }`}
        </title>
        <meta
          name="description"
          content="Cocktail Underground - How to make craft cocktails at home and how to find the best bars"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Cocktail Underground - Cocktail Recipes" />
        <meta property="og:description" content="How to make craft cocktails at home" />
      </Head>

      <main className="constrained-content">
        <h1 className="text-brand-purple">
          Cocktail Recipes {cocktailCategory && `with ${categoryLabel(cocktailCategory)}`}
        </h1>

        <CategoryNavPills recipes={recipes} cocktailCategory={cocktailCategory} />

        <div className={styles['recipe-controls']}>
          <input
            type="search"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search recipes"
          />
        </div>

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
      </main>
    </ContentWrapper>
  );
}
