import Link from 'next/link';
import styles from './CategoryNavPills.module.scss';

export default function CategoryNavPills({ activeCategory = '' }) {
  return (
    <div className={styles['category-nav-pills']}>
      <Link href="/cocktail-recipes" className={activeCategory === '' ? styles.active : undefined}>
        All Cocktails
      </Link>
      <Link href="/cocktail-recipes/category/thc" className={activeCategory === 'thc' ? styles.active : undefined}>
        THC Drinks
      </Link>
      <Link
        href="/cocktail-recipes/category/mezcal"
        className={activeCategory === 'mezcal' ? styles.active : undefined}
      >
        Mezcal Cocktails
      </Link>
      <Link
        href="/cocktail-recipes/category/tequila"
        className={activeCategory === 'tequila' ? styles.active : undefined}
      >
        Tequila Cocktails
      </Link>
      <Link
        href="/cocktail-recipes/category/whiskey"
        className={activeCategory === 'whiskey' ? styles.active : undefined}
      >
        Whiskey Cocktails
      </Link>
      <Link
        href="/cocktail-recipes/category/cognac"
        className={activeCategory === 'cognac' ? styles.active : undefined}
      >
        Cognac Cocktails
      </Link>
      <Link href="/cocktail-recipes/category/rum" className={activeCategory === 'rum' ? styles.active : undefined}>
        Rum Cocktails
      </Link>
      <Link
        href="/cocktail-recipes/category/cachaça"
        className={activeCategory === 'cachaça' ? styles.active : undefined}
      >
        Cachaça Cocktails
      </Link>
      <Link href="/cocktail-recipes/category/gin" className={activeCategory === 'gin' ? styles.active : undefined}>
        Gin Cocktails
      </Link>
      <Link href="/cocktail-recipes/category/vodka" className={activeCategory === 'vodka' ? styles.active : undefined}>
        Vodka Cocktails
      </Link>
    </div>
  );
}
