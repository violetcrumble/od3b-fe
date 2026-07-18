import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import RecipeListingCard from '../../../components/Cards/RecipeListingCard/RecipeListingCard';
import CategoryNavPills from '../../../components/CategoryNavPills/CategoryNavPills';
import filterRecipesByCategory from '../../../utils/filterRecipesByCategory.js';
import { GET_ALL_RECIPES } from '../../../graphql/queries.js';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import SITE_URL from '../../../utils/siteUrl';
import styles from '../../../styles/pages/CocktailRecipes.module.scss';

const URL = process.env.STRAPIBASEURL;

const CATEGORY_CONTENT = {
  tequila: {
    title: 'Tequila Cocktail Recipes',
    h1: 'Tequila Cocktail Recipes',
    metaDescription:
      'Real tequila cocktail recipes tested and filmed at home — margaritas, palomas, and more, with exact measurements.',
    intro:
      "Tequila's the one spirit almost every home bar already has, and it's capable of a lot more than a margarita. These are the tequila cocktails we've actually made on camera, exact measurements included — from classic margaritas and palomas to a few weirder ones worth trying.",
  },
  vodka: {
    title: 'Vodka Cocktail Recipes',
    h1: 'Vodka Cocktail Recipes',
    metaDescription: 'Real vodka cocktail recipes tested and filmed at home, with exact measurements.',
    intro:
      "Vodka gets a bad rap as the \"flavorless\" spirit, but that's exactly what makes it a blank canvas — it lets whatever else is in the glass do the talking. Here's every vodka cocktail we've built and filmed, real recipes with real measurements.",
  },
  rum: {
    title: 'Rum Cocktail Recipes',
    h1: 'Rum Cocktail Recipes',
    metaDescription: 'Real rum cocktail recipes tested and filmed at home, from tiki classics to simple highballs.',
    intro:
      "From tiki classics to a simple rum and coke done right, rum covers more ground than almost any other spirit on this list. These are the rum cocktails we've actually tested and filmed, exact recipes included.",
  },
  whiskey: {
    title: 'Whiskey (Whisky) Cocktail Recipes',
    h1: 'Whiskey Cocktail Recipes',
    metaDescription:
      'Real whiskey and whisky cocktail recipes tested and filmed at home, from the Old Fashioned on up.',
    intro:
      "Whiskey — or whisky, depending who's pouring — is the backbone of some of the most iconic cocktails ever made, the Old Fashioned chief among them. Here's every whiskey cocktail we've built on camera, with real measurements, not guesses.",
  },
  gin: {
    title: 'Gin Cocktail Recipes',
    h1: 'Gin Cocktail Recipes',
    metaDescription: 'Real gin cocktail recipes tested and filmed at home, with exact measurements.',
    intro:
      "Gin's botanical, herbal edge makes it one of the most versatile spirits behind the bar — equally at home in a classic martini or something a lot weirder. These are the gin cocktails we've actually made and filmed, exact recipes included.",
  },
  mezcal: {
    title: 'Mezcal Drinks & Cocktails',
    h1: 'Mezcal Drinks & Cocktails',
    metaDescription:
      'Real mezcal cocktail recipes — smoky, agave-forward drinks tested and filmed at home, with exact measurements.',
    intro:
      "Mezcal's smokier, funkier cousin-of-tequila reputation is well earned, and it rewards drinks that let that character show instead of hiding it. Here's every mezcal drink we've built and filmed, real recipes included.",
  },
  cognac: {
    title: 'Cognac Drinks & Cocktails',
    h1: 'Cognac Drinks & Cocktails',
    metaDescription: 'Real cognac cocktail recipes tested and filmed at home, from the Sidecar to the Vieux Carré.',
    intro:
      "Cognac doesn't show up in home bars nearly as often as it should — it's the backbone of genuine classics like the Sidecar and the Vieux Carré, not just a sipping spirit. Here's every cognac cocktail we've made and filmed, exact recipes included.",
  },
  cachaça: {
    title: 'Caipirinha & Cachaça Cocktail Recipes',
    h1: 'Caipirinha & Cachaça Cocktails',
    metaDescription:
      "Caipirinha and other cachaça cocktail recipes — Brazil's signature spirit, tested and filmed at home with exact measurements.",
    intro:
      "Cachaça is Brazil's answer to rum, and its signature cocktail — the caipirinha — deserves way more attention outside Brazil than it gets. Here's every cachaça drink we've built and filmed, caipirinhas included.",
  },
  thc: {
    title: 'THC Cocktail Recipes',
    h1: 'THC Drink Recipes',
    metaDescription:
      'THC cocktail recipes made with hemp-derived THC drinks — real recipes, tested and filmed, dosage notes included.',
    intro:
      'These are cocktails built around hemp-derived THC drinks instead of alcohol — same real bartending technique, different spirit entirely. Every recipe here has exact measurements; check our THC Drinks hub for reviews and dosage guides too.',
  },
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORY_CONTENT).map((categorySlug) => ({ params: { categorySlug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${URL}/graphql`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: GET_ALL_RECIPES }),
  });
  const data = await res.json();

  const recipes = filterRecipesByCategory(params.categorySlug, data.data.recipes_connection.data);

  return {
    props: {
      categorySlug: params.categorySlug,
      recipes,
    },
  };
}

export default function CategoryRecipes({ categorySlug, recipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const content = CATEGORY_CONTENT[categorySlug];

  const visibleRecipes = recipes.filter((recipe) =>
    recipe.attributes.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const canonicalUrl = `${SITE_URL}/cocktail-recipes/category/${categorySlug}`;

  return (
    <ContentWrapper>
      <Head>
        <title>{`Cocktail Underground - ${content.title}`}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`Cocktail Underground - ${content.title}`} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Cocktail Recipes', url: '/cocktail-recipes' },
            { name: content.h1 },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>

      <div className="constrained-content">
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp;
          <Link href="/cocktail-recipes">Cocktail Recipes</Link>&nbsp;:&nbsp;
          {content.h1}
        </div>

        <h1 className="text-brand-purple">{content.h1}</h1>
        <p>{content.intro}</p>

        <CategoryNavPills activeCategory={categorySlug} />

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
