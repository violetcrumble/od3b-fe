import SocialLinks from '../SocialLinks/SocialLinks';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

var currentTime = new Date();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-grid-main']}>
        <div className={styles['footer-brand']}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo-skull-only.svg" alt="" width="52" height="68" />
            <span>Cocktail Underground</span>
          </Link>
        </div>

        <nav className={styles['footer-nav']} aria-label="Explore">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes">Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/thc-drinks">THC Drinks</Link>
            </li>
            <li>
              <Link href="/blog">Articles</Link>
            </li>
            <li>
              <Link href="/home-bar-supplies">Home Bar Supplies</Link>
            </li>
            <li>
              <Link href="/friends">Our Friends</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles['footer-nav']} aria-label="Recipes by spirit">
          <h3>Recipes by Spirit</h3>
          <ul>
            <li>
              <Link href="/cocktail-recipes/category/thc">THC Drink Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/tequila">Tequila Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/mezcal">Mezcal Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/whiskey">Whiskey Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/cognac">Cognac Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/rum">Rum Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/cachaça">Cachaça Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/gin">Gin Cocktail Recipes</Link>
            </li>
            <li>
              <Link href="/cocktail-recipes/category/vodka">Vodka Cocktail Recipes</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles['footer-nav']} aria-label="THC drinks">
          <h3>THC Drinks</h3>
          <ul>
            <li>
              <Link href="/blog/best-thc-drinks">Best THC Drinks</Link>
            </li>
            <li>
              <Link href="/thc-drinks/reviews">THC Drink Reviews</Link>
            </li>
            <li>
              <Link href="/thc-drinks/recipes">THC Drink Recipes</Link>
            </li>
            <li>
              <Link href="/thc-drinks/guides">THC Guides</Link>
            </li>
          </ul>
        </nav>

        <div className={styles['footer-newsletter']}>
          <NewsletterSignup />
        </div>
      </div>

      <div className={styles['footer-social-copy']}>
        <SocialLinks />
        <p>Copyright &copy; {currentTime.getFullYear()} Cocktail Underground</p>
      </div>
    </footer>
  );
}
