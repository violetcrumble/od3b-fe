import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import RecipeListingCard from '../../../components/Cards/RecipeListingCard/RecipeListingCard';
import { GET_ALL_THC_RECIPES } from '../../../graphql/queries';
import { strapiQueryCached } from '../../../utils/strapiQuery';
import styles from '../../../styles/pages/THC.module.scss';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import SITE_URL from '../../../utils/siteUrl';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_ALL_THC_RECIPES);

  return {
    props: {
      recipes: data.recipes,
    },
  };
}

export default function THCRecipes({ recipes }) {
  return (
    <ContentWrapper>
      <Head>
        <title>THC Drink Recipes and Cannabis Cocktails | Cocktail Underground</title>
        <meta
          name="description"
          content="THC cocktail recipes made with hemp-derived drinks: real bartending technique, exact measurements, and THC dose notes for every drink."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/thc-drinks/recipes`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'THC Drinks', url: '/thc-drinks' },
            { name: 'Recipes' },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp;
          <Link href="/thc-drinks">THC Drinks</Link>&nbsp;:&nbsp; Recipes
        </div>

        <h1 className="text-brand-purple">THC Drink Recipes</h1>

        <p>
          These THC drink recipes use hemp-derived seltzers and beverages to recreate the flavor and ritual of cocktails
          without relying on traditional spirits. Each recipe includes the THC dose per serving, flavor notes, and
          guidance for keeping the final drink balanced rather than merely pouring juice on top of a canned seltzer and
          hoping for enlightenment.
        </p>

        <h2 className="sr-only">Recipes</h2>

        <div className="listings-3-col">
          {recipes.map((recipe, index) => (
            <Link
              className="listing-card"
              key={recipe.recipeUrlSlug}
              href={`/cocktail-recipes/${recipe.recipeUrlSlug}`}
            >
              <RecipeListingCard recipe={recipe} priority={index === 0} />
            </Link>
          ))}
        </div>

        <NewsletterSignup />
      </div>
    </ContentWrapper>
  );
}
