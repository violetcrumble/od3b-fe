import Head from 'next/head';
import { useRouter } from 'next/router';
import ContentWrapper from '../../components/ContentWrapper';


const URL = process.env.STRAPIBASEURL;

const query = `{recipes {
  data {
    attributes {
      title
      ingredients
      recipebody
      recipeUrlSlug
      YouTubeLink
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
  }}`

export async function getStaticPaths() {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();
  const paths = data.data.recipes.data.map(recipe => ({
    params: { recipeUrlSlug: recipe.attributes.recipeUrlSlug.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps() {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
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

export default function Recipe({ recipes }) {
  
  const featuredRecipe = recipes.filter((recipe) => recipe.attributes.recipeUrlSlug === useRouter().query.recipeUrlSlug.toString());
  console.log(featuredRecipe);
  
  return (
    <ContentWrapper>

    
      <Head>
        <title>One Drink Three Bars - Cocktail Recipes</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main>
        <h1>{featuredRecipe[0].attributes.title}</h1>

        {featuredRecipe[0].attributes.YouTubeLink && <><h2>Video</h2>
        <iframe 
        width="560" 
        height="315" 
        src={featuredRecipe[0].attributes.YouTubeLink} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

        </iframe>
        </>} 
        
        
        
        <h2>Recipe</h2>
        {featuredRecipe[0].attributes.ingredients}
        
        {featuredRecipe[0].attributes.recipebody}

  
      </main>
    </ContentWrapper>
  );
}
