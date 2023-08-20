import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';
import AmazonListingCard from '../components/Cards/AmazonListingCard/AmazonListingCard';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{products {
        data {
          attributes {
            AmazonLink
            ProductName
            ProductCategory
          }
        }
      }}`,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: {
      products: data.data.products.data,
    },
  };
}

export default function Products({ products }) {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars - Cocktail Recipes</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Products</h1>
        <ul>
          {products.map((product, index) => (
            <AmazonListingCard
              key={index}
              productName={product.attributes.ProductName}
              productCategory={product.attributes.ProductCategory}
              amazonLink={product.attributes.AmazonLink}
            />
          ))}
        </ul>
      </main>
    </ContentWrapper>
  );
}
