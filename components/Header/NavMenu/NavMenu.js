import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavMenu.module.scss';

export default function NavMenu() {
  const { asPath } = useRouter();
  const currentPath = asPath.split(/[?#]/)[0];
  const activeClass = (href) =>
    currentPath === href || currentPath.startsWith(`${href}/`) ? styles.active : undefined;

  return (
    <nav className={styles['nav-menu']}>
      <input className={styles['menu-btn']} type="checkbox" id="menu-btn" />
      <label className={styles['menu-icon']} htmlFor="menu-btn" aria-label="Toggle navigation menu">
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
        <li className={`${styles['top-level-menu-item']} ${styles['cocktail-recipes-top-menu']}`}>
          <Link href="/cocktail-recipes" className={activeClass('/cocktail-recipes')}>
            Cocktail Recipes
            <span className={styles.chevron} aria-hidden="true">
              ▾
            </span>
          </Link>
          <ul className={styles['sub-menu']}>
            <li>
              <Link href="/cocktail-recipes/category/thc">THC Cocktail Recipes</Link>
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
        </li>
        <li className={`${styles['top-level-menu-item']} ${styles['thc-drinks-top-menu']}`}>
          <Link href="/thc-drinks" className={activeClass('/thc-drinks')}>
            THC Drinks
            <span className={styles.chevron} aria-hidden="true">
              ▾
            </span>
          </Link>
          <ul className={styles['sub-menu']}>
            <li>
              <Link href="/thc-drinks/reviews">THC Drink Reviews</Link>
            </li>
            <li>
              <Link href="/thc-drinks/recipes">THC Drink Recipes</Link>
            </li>
            <li>
              <Link href="/thc-drinks/guides">THC Guides</Link>
            </li>
            <li>
              <Link href="/thc-drinks/discounts">THC Discount Codes</Link>
            </li>
          </ul>
        </li>
        <li className={styles['top-level-menu-item']}>
          <Link href="/blog" className={activeClass('/blog')}>
            Articles
          </Link>
        </li>
        <li className={styles['top-level-menu-item']}>
          <Link href="/home-bar-supplies" className={activeClass('/home-bar-supplies')}>
            Home Bar Supplies
          </Link>
        </li>
        <li className={styles['top-level-menu-item']}>
          <Link href="/friends" className={activeClass('/friends')}>
            Our Friends
          </Link>
        </li>
      </ul>
    </nav>
  );
}
