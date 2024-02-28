import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import { Listing4ColStyles } from '../../components/Listings4Col.styled';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{products(pagination: { limit: 300 }) {
        data {
          attributes {
            AmazonLink
            AmazonASIN
            AmazonPhotoURL
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
        <title>One Drink Three Bars - Cocktail Recipes - Home Bar Supplies</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapperConstrainedStyles>
      <main>
        <h1>Home Bar Supplies</h1>
        <p>This site contains product affiliate links. We may receive a commission if you make a purchase after clicking on one of these links.</p>
        {/* TODO: loop through the categories in Strapi */}
        {/* <a href="">Cocktail Books</a> | <a href="">Bar Tools</a><br /><br /> */}
        <Listing4ColStyles>
          {/* TODO: if it's not a multiple of 4, add a couple empty divs to make it one */}
          {products.map((product, index) => (
            <AmazonListingCard
              key={index}
              productName={product.attributes.ProductName}
              productCategory={product.attributes.ProductCategory}
              amazonLink={product.attributes.AmazonLink}
              amazonASIN={product.attributes.AmazonASIN}
              amazonPhotoURL={product.attributes.AmazonPhotoURL}
            />
          ))}
          {products.length !== Math.floor(products.length / 4) && <><div className="listing-card"></div><div className="listing-card"></div></>}
        </Listing4ColStyles>
      </main>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  );
}
