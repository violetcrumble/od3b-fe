import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';
import HomePage from '../components/HomePage/Home';
import { GET_ALL_RECIPES } from '../graphql/queries';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_ALL_RECIPES,
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
        <title>Cocktail Underground</title>
        <meta name="description" content="Cocktail Underground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage recipes={recipes} />
      
    </ContentWrapper>
  );
}
