import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import StartHere from '../../components/StartHere/StartHere';
import ProductCategoryPills from '../../components/ProductCategoryPills/ProductCategoryPills';
import { GET_AMAZON_PRODUCTS, GET_FEATURED_PRODUCTS } from '../../graphql/queries';
import { strapiQueryCached } from '../../utils/strapiQuery';
import SITE_URL from '../../utils/siteUrl';

// The same picks as an Amazon idea list, for people who'd rather shop them in one place.
const ESSENTIALS_LIST_URL = 'https://a.co/d/0f0wpw4v';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_AMAZON_PRODUCTS);

  // The section is optional: if Strapi doesn't have the FeaturedOrder field yet,
  // or nothing is numbered, the page builds without it.
  let featuredProducts = [];
  try {
    const featured = await strapiQueryCached(GET_FEATURED_PRODUCTS);
    featuredProducts = featured.products;
  } catch (err) {
    console.warn(`Start here section skipped: ${err.message}`);
  }

  return {
    props: {
      products: data.products,
      featuredProducts,
    },
  };
}

export default function Products({ products, featuredProducts }) {
  const hasFeatured = featuredProducts.length > 0;

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

      <div className="constrained-content">
        <h1 className="text-brand-purple">Home Bar Supplies</h1>
        <p>
          Everything here is gear I own or products I would buy again, organized by category so you can find what your
          bar is missing.
        </p>
        <p className="affiliate-note">These are affiliate links. I may earn a commission if you buy through them.</p>

        <ProductCategoryPills />

        <StartHere products={featuredProducts} listUrl={ESSENTIALS_LIST_URL} />

        <h2 className={hasFeatured ? 'text-brand-purple' : 'sr-only'}>{hasFeatured ? 'All Supplies' : 'Products'}</h2>

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
