import Link from 'next/link';
import HeroImage from '../HeroImage/HeroImage';
import RecipeListingCard from '../Cards/RecipeListingCard/RecipeListingCard.js';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';
import filterRecipesByCategory from '../../utils/filterRecipesByCategory.js';
import styles from './Home.module.scss';

export default function HomePage({ recipes }) {
  return (
    <div className={styles['home-page']}>
      <HeroImage />

      <div className="constrained-content">
        <h2 className="text-brand-teal">Tequila Recipes</h2>
        <p>
          Looking for something beyond a tequila sunrise? Whether you want the combination of tequila, lime juice, and
          orange liqueur in a margarita or you&apos;re in the mood for a crisp, refreshing ranch water, we&apos;re sure
          to have a <Link href="/cocktail-recipes?category=tequila">tequila cocktail</Link> for you!
        </p>
        <div className="listings-3-col">
          {filterRecipesByCategory('tequila', recipes)
            .slice(0, 3)
            .map((recipe) => (
              <Link
                className="listing-card"
                key={recipe.attributes.recipeUrlSlug}
                href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}
              >
                <RecipeListingCard recipe={recipe} />
              </Link>
            ))}
        </div>
      </div>
      <div className="constrained-content">
        <h2 className="text-brand-teal">Whiskey Recipes</h2>
        <p>
          From classic bourbon old fashioneds to equal parts bangers like the paper plane, there&apos;s a{' '}
          <Link href="/cocktail-recipes?category=whiskey">whiskey cocktail recipe</Link> here for you.
        </p>
        <div className="listings-3-col">
          {filterRecipesByCategory('whiskey', recipes)
            .slice(0, 3)
            .map((recipe) => (
              <Link
                className="listing-card"
                key={recipe.attributes.recipeUrlSlug}
                href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}
              >
                <RecipeListingCard recipe={recipe} />
              </Link>
            ))}
        </div>
      </div>

      <div className="constrained-content">
        <h2 className="text-brand-teal">Rum Cocktail Recipes</h2>
        <p>
          From tiki classics to espresso martini riffs, we have some great{' '}
          <Link href="/cocktail-recipes?category=rum">rum recipes</Link>!
        </p>
        <div className="listings-3-col">
          {filterRecipesByCategory('rum', recipes)
            .slice(0, 3)
            .map((recipe) => (
              <Link
                className="listing-card"
                key={recipe.attributes.recipeUrlSlug}
                href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}
              >
                <RecipeListingCard recipe={recipe} />
              </Link>
            ))}
        </div>
      </div>

      <div className="constrained-content">
        <NewsletterSignup />
      </div>
    </div>
  );
}
