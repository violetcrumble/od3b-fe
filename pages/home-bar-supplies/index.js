import { useState } from 'react';
import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import { GET_AMAZON_PRODUCTS } from '../../graphql/queries';
import styles from '../../styles/pages/HomeBarSupplies.module.scss'; // <-- Import SCSS module

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_AMAZON_PRODUCTS,
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
  function prettyText(uglyText) {
    return uglyText.replace('_', ' ').replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  }

  function filterProducts(category) {
    if (category === 'all_products') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((element) => element.attributes.ProductCategory == category));
    }
  }

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [productCategories, setProductCategories] = useState([
    'all_products',
    'glassware',
    'syrups',
    'garnishes',
    'bar_tools',
    'bitters',
    'ice_molds',
    'appliances',
    'cocktail_books',
    'juices',
    'teas',
    'sober_curious',
  ]);

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('all_products');

  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Cocktail Recipes - Home Bar Supplies</title>
        <meta
          name="description"
          content="If you need home bar supplies like cocktail mixing glasses, cocktail shakers, bitters, syrups or juices, check out some links to my favorite bar products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`constrained-content ${styles['home-bar-supplies-page']}`}>
        <h1 className="text-brand-purple">Home Bar Supplies</h1>
        <p>
          This site contains product affiliate links. We may receive a commission if you make a purchase after clicking
          on one of these links.
        </p>

        <div className={styles.dropdown}>
          <p>Filter products by category: </p>
          <div onClick={() => setIsActive(!isActive)} className={styles['dropdown-btn']}>
            {prettyText(selected)}{' '}
            <svg width="16" height="16" fill="#777" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
          <div className={styles['dropdown-content']} style={{ display: isActive ? 'block' : 'none' }}>
            {productCategories.map((option, i) => (
              <div
                onClick={(e) => {
                  setIsSelected(e.target.id);
                  setIsActive(!isActive);
                  filterProducts(e.target.id);
                }}
                className={styles.item}
                key={i}
                id={option}
              >
                {prettyText(option)}
              </div>
            ))}
          </div>
        </div>

        <div className="listings-4-col">
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
          {filteredProducts.length !== Math.floor(filteredProducts.length / 4) && (
            <>
              <div className="listing-card"></div>
              <div className="listing-card"></div>
            </>
          )}
        </div>
      </div>
    </ContentWrapper>
  );
}
