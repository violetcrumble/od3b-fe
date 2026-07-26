import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import ProductCategoryPills from '../../components/ProductCategoryPills/ProductCategoryPills';
import { GET_AMAZON_PRODUCTS } from '../../graphql/queries';
import { strapiQueryCached } from '../../utils/strapiQuery';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/HomeBarSupplies.module.scss';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_AMAZON_PRODUCTS);

  return {
    props: {
      products: data.products,
    },
  };
}

export default function Products({ products }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Home Bar Supplies</title>
        <meta
          name="description"
          content="If you need home bar supplies like cocktail mixing glasses, cocktail shakers, bitters, syrups or juices, check out some links to my favorite bar products."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/home-bar-supplies`} />
      </Head>

      <div className={`${styles['supplies-page']} constrained-content`}>
        <h1 className="text-brand-purple">Home Bar Supplies</h1>
        <p>
          Everything here is gear I own or products I would buy again, organized by category so you can find what your
          bar is missing.
        </p>
        <p>
          This site contains product affiliate links. We may receive a commission if you make a purchase after clicking
          on one of these links.
        </p>

        <ProductCategoryPills />

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
