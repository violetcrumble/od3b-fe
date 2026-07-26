import Link from 'next/link';
import PRODUCT_CATEGORIES from '../../utils/productCategories';
import styles from './ProductCategoryPills.module.scss';

export default function ProductCategoryPills({ activeCategory = '' }) {
  return (
    <div className={styles['product-category-pills']}>
      <Link href="/home-bar-supplies" className={activeCategory === '' ? styles.active : undefined}>
        All Supplies
      </Link>
      {PRODUCT_CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/home-bar-supplies/${category.slug}`}
          className={activeCategory === category.slug ? styles.active : undefined}
        >
          {category.name}
        </Link>
      ))}
      <Link href="/home-bar-supplies/filming-equipment">Filming Equipment</Link>
    </div>
  );
}
