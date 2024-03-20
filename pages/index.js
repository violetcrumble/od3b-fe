import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';
import HomePage from '../components/HomePage/Home';


const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{recipes(pagination: { limit: 300 }) {
        data {
          attributes {
            title
            ingredients
            recipebody
            recipeUrlSlug
            spirits {
              data {
                attributes {
                  spirit
                }
              }
            }
            PhotoMain {
              data {
                attributes {
                  url
                  caption
                }
              }
            }
          }
        }
      }}`,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: {
      recipes: data.data.recipes.data,
    },
  };
}

export default function Home({recipes}) {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage recipes={recipes} />
      
    </ContentWrapper>
  );
}
