import Link from 'next/link';
import HeroImage from '../HeroImage/HeroImage';
import RecipeListingCard from '../Cards/RecipeListingCard/RecipeListingCard.js';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';
import CategoryNavPills from '../CategoryNavPills/CategoryNavPills';
import AboutSection from '../AboutSection/AboutSection';
import styles from './Home.module.scss';

export default function HomePage({ recipes, thcRecipes, latestRecipe }) {
  return (
    <div className={styles['home-page']}>
      <HeroImage />

      <div className="constrained-content">
        <div className={styles['thc-grid']}>
          <div className={styles['thc-panel']}>
            <h2 className="text-brand-purple">THC Drinks</h2>
            <p className={styles['intro-text']}>
              Curious about THC drinks but not sure where to begin? We test THC cocktail recipes, THC seltzers, and more
              so you don&apos;t have to guess. Explore our <Link href="/thc-drinks">THC drinks hub</Link> or check out
              all of our <Link href="/thc-drinks/recipes">THC cocktail recipes</Link>.
            </p>
            <div className={styles['thc-recipe-cards']}>
              {thcRecipes.map((recipe, index) => (
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

          {latestRecipe && (
            <div className={styles['latest-recipe-panel']}>
              <h2 className="text-brand-teal">Latest Recipe</h2>
              <Link className="listing-card" href={`/cocktail-recipes/${latestRecipe.attributes.recipeUrlSlug}`}>
                <RecipeListingCard recipe={latestRecipe} />
              </Link>
              <div className={styles['centered-cta']}>
                <Link href="/cocktail-recipes">
                  <button>View All Recipes</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="constrained-content">
        <div className={styles['browse-about-grid']}>
          <div className={styles['browse-panel']}>
            <h2 className="text-brand-teal">Browse Cocktails by Spirit</h2>
            <CategoryNavPills />
          </div>
          <AboutSection />
        </div>
      </div>

      <div className="constrained-content">
        <NewsletterSignup />
      </div>
    </div>
  );
}
