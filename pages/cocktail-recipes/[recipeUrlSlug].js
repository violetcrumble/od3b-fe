import Head from 'next/head';
import Link from 'next/link';
import useRouter from 'next/router';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import YouTubePlayer from '../../components/YouTubePlayer/YouTubePlayer';
import Markdown from 'react-markdown';
import { RecipeDetailPageStyles } from '../../components/recipedetail.styled';

const URL = process.env.STRAPIBASEURL;

const query = `{recipes(pagination: { limit: 300 }) {
  data {
    attributes {
      title
      ingredients
      recipebody
      recipeUrlSlug
      YouTubeLink
      youTubeID
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

  return (
    <ContentWrapper>


      <Head>
        <title>One Drink Three Bars - Cocktail Recipes</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapperConstrainedStyles>

        <RecipeDetailPageStyles>

          <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/cocktail-recipes/">Cocktail Recipes</Link>&nbsp;:&nbsp;
            {featuredRecipe[0].attributes.title} Recipe</div>

          <div className="recipe-detail-layout">
            <div className="recipe-col-1">
              <h1>{featuredRecipe[0].attributes.title}</h1>

              <h2>Cocktail Recipe</h2>
              <Markdown>{featuredRecipe[0].attributes.ingredients}</Markdown>

              <Markdown>{featuredRecipe[0].attributes.recipebody}</Markdown>

              {featuredRecipe[0].attributes.PhotoMain.data &&
                featuredRecipe[0].attributes.PhotoMain.data.attributes.url &&
                <img
                  alt={featuredRecipe[0].attributes.PhotoMain.data.attributes.caption}
                  border="0"
                  src={featuredRecipe[0].attributes.PhotoMain.data.attributes.url} /> }


            </div>
            <div className="recipe-col-2">
              {featuredRecipe[0].attributes.YouTubeLink &&
                <YouTubePlayer videoId={featuredRecipe[0].attributes.youTubeID} />}
            </div>
          </div>

        </RecipeDetailPageStyles>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  );
}
