import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
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
            {recipe.title} Recipe</div>

          <div className="recipe-detail-layout">
            <div className="recipe-col-1">
              <h1>{recipe.title}</h1>

              <h2>Cocktail Recipe</h2>
              <Markdown>{recipe.ingredients}</Markdown>

              <Markdown>{recipe.recipebody}</Markdown>

              {recipe.PhotoMain.data &&
                recipe.PhotoMain.data.attributes.url &&
                <img
                  alt={recipe.PhotoMain.data.attributes.caption}
                  border="0"
                  src={recipe.PhotoMain.data.attributes.url} /> }


            </div>
            <div className="recipe-col-2">
              {recipe.YouTubeLink &&
                <YouTubePlayer videoId={recipe.youTubeID} />}
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

