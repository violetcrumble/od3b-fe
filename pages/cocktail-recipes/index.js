import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{recipes {
        data {
          attributes {
            title
            ingredients
            recipebody
            recipeUrlSlug
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
      recipes: data.data.recipes.data, // Extracting the recipes array
    },
  };
}

export default function Recipes({ recipes }) {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars - Cocktail Recipes</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h2>{recipe.attributes.title}</h2>
              <p>Ingredients: {recipe.attributes.ingredients}</p>
              <p>Recipe: {recipe.attributes.recipebody}</p>
              <p><Link href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}>learn more</Link></p>
              {/* <img width="500" src={recipe.attributes.PhotoMain.data.attributes.url} alt={recipe.attributes.PhotoMain.data.attributes.caption} /> */}
            </li>
          ))}
        </ul>
      </main>
    </ContentWrapper>
  );
}
