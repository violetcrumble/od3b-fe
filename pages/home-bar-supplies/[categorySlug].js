import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import ProductCategoryPills from '../../components/ProductCategoryPills/ProductCategoryPills';
import { GET_AMAZON_PRODUCTS } from '../../graphql/queries';
import { strapiQueryCached } from '../../utils/strapiQuery';
import PRODUCT_CATEGORIES from '../../utils/productCategories';
import getBreadcrumbJsonLd from '../../utils/breadcrumbJsonLd';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/HomeBarSupplies.module.scss';

export async function getStaticPaths() {
  return {
    paths: PRODUCT_CATEGORIES.map((category) => ({ params: { categorySlug: category.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.categorySlug);
  const data = await strapiQueryCached(GET_AMAZON_PRODUCTS);

  return {
    props: {
      category,
      products: data.products.filter((product) => category.dbValues.includes(product.ProductCategory)),
    },
  };
}

export default function ProductCategory({ category, products }) {
  return (
    <ContentWrapper>
      <Head>
        <title>{`Cocktail Underground - Home Bar Supplies - ${category.name}`}</title>
        <meta name="description" content={category.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/home-bar-supplies/${category.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Home Bar Supplies', url: '/home-bar-supplies' },
            { name: category.name },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>

      <div className={`${styles['supplies-page']} constrained-content`}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp;
          <Link href="/home-bar-supplies">Home Bar Supplies</Link>&nbsp;:&nbsp; {category.name}
        </div>

        <h1 className="text-brand-purple">{category.name}</h1>
        <p>{category.intro}</p>
        <p>
          This site contains product affiliate links. We may receive a commission if you make a purchase after clicking
          on one of these links.
        </p>

        <ProductCategoryPills activeCategory={category.slug} />

        <h2 className="sr-only">Products</h2>

        <div className="listings-4-col">
          {products.map((product) => (
            <AmazonListingCard
              key={product.documentId}
              productName={product.ProductName}
              productCategory={product.ProductCategory}
              amazonLink={product.AmazonLink}
              amazonASIN={product.AmazonASIN}
              amazonPhotoURL={product.AmazonPhotoURL}
            />
          ))}
          <div className="listing-card"></div>
          <div className="listing-card"></div>
        </div>
      </div>
    </ContentWrapper>
  );
}
