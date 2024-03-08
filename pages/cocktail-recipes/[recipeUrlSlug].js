import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_RECIPE_SLUGS, GET_INDIVIDUAL_RECIPE } from '../../graphql/queries';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import YouTubePlayer from '../../components/YouTubePlayer/YouTubePlayer';
import Markdown from 'react-markdown';
import { RecipeDetailPageStyles } from '../../components/recipedetail.styled';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';

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
       "recipeIngredient": 
        ${JSON.stringify(recipe.cocktailIngredients.ingredients)}
       ,
      "description": "${recipe.recipebody}",
      "keywords": "${recipe.keywords ? recipe.keywords : "cocktail recipes, easy cocktails to make at home, alcoholic drink recipes"}",
      "recipeCategory": "Cocktail",
      "video": {
        "contentUrl": "${recipe.YouTubeLink}"
      },
      "author": "One Drink Three Bars"
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
            {recipe.title}</div>

          <div className="recipe-detail-layout">
            <div className="recipe-col-1">
              <h1>{recipe.title} Recipe</h1>

              {recipe.PhotoMain.data &&
                    recipe.PhotoMain.data.attributes.url &&
                    <div className="mobile-recipe-pic-container"><Image
                      src={recipe.PhotoMain.data.attributes.url}
                      alt={recipe.title}
                      layout="responsive"
                      width="300"
                      height="300"
                      className="mobile-recipe-image"
                    /></div>
                  }

              {recipe.RecipeIntro && <div className="recipe-intro">
                <Markdown>{recipe.RecipeIntro}</Markdown>
              </div>}

              <div className="recipe-ingredients">

                <div className="recipe-ingredients-columns">
                  <div className="recipe-ingredients-text">
                  
                    <div className="recipe-ingredients-list">
                    <h2>How to make a {recipe.title}</h2>
                      <h4>Ingredients</h4>
                      <div className="recipe-ingredients-list-inside">
                      <Markdown>{recipe.ingredients}</Markdown>
                      </div>

                      <h4>Technique</h4>
                      <Markdown>{recipe.recipebody}</Markdown>

                      <br />
                      {recipe.YouTubeLink && <Link className="youtube-button" href={recipe.YouTubeLink} target='_blank'>Watch YouTube Video</Link>}
                      <br /><br />
                      {/* {recipe.YouTubeLink &&
                      <YouTubePlayer videoId={recipe.youTubeID} />} */}
                    </div>

                  </div>
                </div>

              </div>

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

            {recipe.relatedProducts.data.length ? <div className="related-products">
                <h2>Related Products</h2>
                <p>This site contains product affiliate links. We may receive a commission if you make a purchase after clicking on one of these links.</p>

                <div className="related-product-cards">
                {recipe && recipe.relatedProducts && recipe.relatedProducts.data && recipe.relatedProducts.data.map((product, index) => (
                  <AmazonListingCard
                    key={index}
                    productName={product.attributes.ProductName}
                    productCategory={product.attributes.ProductCategory}
                    amazonLink={product.attributes.AmazonLink}
                    amazonASIN={product.attributes.AmazonASIN}
                    amazonPhotoURL={product.attributes.AmazonPhotoURL}
                  />
                ))}
                </div>
              </div> : ""}



          </div>

        </RecipeDetailPageStyles>
      </ContentWrapperConstrainedStyles>
    </ContentWrapper>
  )
}

export async function getStaticPaths() {

  const { data } = await client.query({ query: GET_ALL_RECIPE_SLUGS });

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

