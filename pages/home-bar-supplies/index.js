import { useState } from 'react';
import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import { Listing4ColStyles } from '../../components/Listings4Col.styled';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import { HomeBarSuppliesStyles } from '../../components/homeBarSupples.styled';

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

  function filterProducts(category) {
    if (category === "all_products"){
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(element => element.attributes.ProductCategory == category));
    }
  }

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState();
  // TODO: pull these from strapi instead of hard coding
  const [productCategories, setProductCategories] = useState([
    "all_products",
    "glassware", 
    "syrups", 
    "garnishes", 
    "bar_tools", 
    "bitters", 
    "ice_molds",
    "appliances",
    "cocktail_books",
    "juices"]);

  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars - Cocktail Recipes - Home Bar Supplies</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapperConstrainedStyles>
        <HomeBarSuppliesStyles>
          <h1>Home Bar Supplies</h1>
          <p>This site contains product affiliate links. We may receive a commission if you make a purchase after clicking on one of these links.</p>

          <div className="product-category-filters">
            <p>Filter products by category:</p>
            <select
              value={currentCategory}
              onChange={(e) => { 
                setCurrentCategory(e.target.value); 
                filterProducts(e.target.value); 
              }}
            >
              {productCategories.map((option, i) => {
                return (
                  <option value={option} key={i}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>

          <Listing4ColStyles>
            {filteredProducts.map((product, index) => (
              <AmazonListingCard
                key={index}
                productName={product.attributes.ProductName}
                productCategory={product.attributes.ProductCategory}
                amazonLink={product.attributes.AmazonLink}
                amazonASIN={product.attributes.AmazonASIN}
                amazonPhotoURL={product.attributes.AmazonPhotoURL}
              />
            ))}
            {filteredProducts.length !== Math.floor(filteredProducts.length / 4) && <><div className="listing-card"></div><div className="listing-card"></div></>}
          </Listing4ColStyles>
        </HomeBarSuppliesStyles>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  );
}
