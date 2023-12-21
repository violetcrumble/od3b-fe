import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SLUGS, GET_INDIVIDUAL_RECIPE } from '../../graphql/queries';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import YouTubePlayer from '../../components/YouTubePlayer/YouTubePlayer';
import Markdown from 'react-markdown';
import { RecipeDetailPageStyles } from '../../components/recipedetail.styled';

const URL = process.env.STRAPIBASEURL;

const client = new ApolloClient({
  uri: `${URL}/graphql`,
  cache: new InMemoryCache()
});

export default function Recipe({ recipe }) {

  function addRecipeJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": "${recipe.title}",
      "image": [
        "${recipe.PhotoMain.data.attributes.url}"
       ],
       "recipeIngredient": [
        ${recipe.cocktailIngredients.ingredients}
       ],
      "description": "${recipe.recipebody}",
      "keywords": "${recipe.keywords ? recipe.keywords : "cocktail recipes, easy cocktails to make at home, alcoholic drink recipes"}",
      "recipeCategory": "Cocktail",
    }
  `,
    };
  }
  return (
    <ContentWrapper>

      <Head>
        <title>{`${recipe.title} cocktail recipe`}</title>
        <meta name="description" content={`How to make a ${recipe.title} cocktail at home`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${recipe.title} cocktail recipe`} />
        <meta property="og:description" content={`How to make a ${recipe.title} cocktail at home`} />
        <meta property="og:image" content={recipe.PhotoMain.data.attributes.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addRecipeJsonLd()}
          key="recipe-jsonld"
        />
      </Head>

      <ContentWrapperConstrainedStyles>

        <RecipeDetailPageStyles>

          <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/cocktail-recipes/">Cocktail Recipes</Link>&nbsp;:&nbsp;
            {recipe.title} Recipe</div>

          <div className="recipe-detail-layout">
            <div className="recipe-col-1">
              <h1>{recipe.title} Cocktail Recipe</h1>

              {recipe.RecipeIntro && <div className="recipe-intro">
                {recipe.RecipeIntro}
              </div>}
              

              <div className="recipe-ingredients">
                <h2>{recipe.title} Ingredients</h2>
                <Markdown>{recipe.ingredients}</Markdown>
              </div>

              <div className="recipe-technique">
                <h2>How to make a {recipe.title}</h2>
                <Markdown>{recipe.recipebody}</Markdown>
              </div>

              {recipe.YouTubeLink && <Link className="youtube-button" href={recipe.YouTubeLink} target='_blank'>Watch YouTubeVideo</Link>}
              <br /><br /><br />
              {/* {recipe.YouTubeLink &&
                <YouTubePlayer videoId={recipe.youTubeID} />} */}

            </div>
            <div className="recipe-col-2">
              {recipe.PhotoMain.data &&
                recipe.PhotoMain.data.attributes.url &&
                <Image
                  src={recipe.PhotoMain.data.attributes.url}
                  alt={recipe.title}
                  layout="responsive"
                  width="700"
                  height="700"
                />
              }
            </div>
          </div>

        </RecipeDetailPageStyles>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  )
}

export async function getStaticPaths() {

  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.recipes.data.map((recipe) => {
    return { params: { recipeUrlSlug: recipe.attributes.recipeUrlSlug } }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const { data } = await client.query({
    query: GET_INDIVIDUAL_RECIPE,
    variables: { recipeUrlSlug: params.recipeUrlSlug }
  });

  const attrs = data.recipes.data[0].attributes;

  return {
    props: {
      recipe: attrs
    }
  }
}

