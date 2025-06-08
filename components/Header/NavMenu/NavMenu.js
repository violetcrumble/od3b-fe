import Link from 'next/link';
import styles from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <nav>
      <input className={styles['menu-btn']} type="checkbox" id="menu-btn" />
      <label className={styles['menu-icon']} htmlFor="menu-btn">
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
        <li className={styles['top-level-menu-item']}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles['top-level-menu-item']} ${styles['cocktail-recipes-top-menu']}`}>
          <Link href="/cocktail-recipes">Cocktail Recipes</Link>
          <ul className={styles['sub-menu']}>
            <li><Link href="/cocktail-recipes?category=tequila">Tequila Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?category=mezcal">Mezcal Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?category=whiskey">Whiskey Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?category=rum">Rum Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?category=cachaça">Cachaça Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?category=gin">Gin Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?category=vodka">Vodka Cocktail Recipes</Link></li>
          </ul>
        </li>
        <li className={styles['top-level-menu-item']}>
          <Link href="/blog">Articles</Link>
        </li>
        <li className={styles['top-level-menu-item']}>
          <Link href="/home-bar-supplies">Home Bar Supplies</Link>
        </li>
        <li className={styles['top-level-menu-item']}>
          <Link href="/friends">Our Friends</Link>
        </li>
      </ul>
    </nav>
  );
}