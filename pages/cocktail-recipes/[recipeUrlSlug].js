import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_RECIPE_SLUGS, GET_INDIVIDUAL_RECIPE } from '../../graphql/queries';
import ContentWrapper from '../../components/ContentWrapper';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import Markdown from 'react-markdown';
import { RecipeDetailPageStyles } from '../../components/recipedetail.styled';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import { sendGTMEvent } from '@next/third-parties/google';
import videoOverlayGraphic from '../../public/video-overlay.gif';

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
        "${recipe.PhotoMain.data[0].attributes.url}"
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
      "author": "Cocktail Underground"
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
        <meta property="og:image" content={recipe.PhotoMain.data[0].attributes.url} />
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

          <h1>{recipe.title} Recipe</h1>

          <div className="recipe-detail-layout">
            <div className="recipe-col-1">

              <div className="recipe-ingredients">

                <div className="recipe-ingredients-columns">
                  <div className="recipe-ingredients-text">

                    <div className="recipe-ingredients-list">
                      <h2>How to make a {recipe.title}</h2>
                      <h4>Ingredients</h4>
                      <div className="recipe-ingredients-list-inside">
                        <Markdown>{recipe.ingredients}</Markdown>
                      </div>

                      {/* show video thumbnail with overlay if we have it */}
                      {recipe.YouTubeLink && recipe.videoThumbnail.data && recipe.videoThumbnail.data.attributes.url &&
                        <div className="video-thumbnail-container">

                          <Link
                            href={recipe.YouTubeLink}
                            onClick={() => sendGTMEvent({ event: 'conversion', value: recipe.title })}
                            target='_blank'>
                            <Image
                              src={recipe.videoThumbnail.data.attributes.url}
                              alt={recipe.videoThumbnail.data.attributes.alternativeText ? recipe.videoThumbnail.data.attributes.alternativeText : recipe.title}
                              layout="responsive"
                              width="590"
                              height="332"
                            />
                            <Image
                              src={videoOverlayGraphic.src}
                              alt=""
                              layout="responsive"
                              width="590"
                              height="332"
                            />
                          </Link>
                          <br />

                        </div>}

                      {recipe.PhotoMain.data[0] &&
                        recipe.PhotoMain.data[0].attributes.url &&
                        <div className="mobile-recipe-pic-container"><Image
                          src={recipe.PhotoMain.data[0].attributes.url}
                          alt={recipe.PhotoMain.data[0].attributes.alternativeText ? recipe.PhotoMain.data[0].attributes.alternativeText : recipe.title}
                          layout="responsive"
                          width="300"
                          height="300"
                          className="mobile-recipe-image"
                        /></div>
                      }

                      <h4>Technique</h4>
                      <Markdown>{recipe.recipebody}</Markdown>

                      {/* show button if no video thumbnail is uploaded */}
                      {recipe.YouTubeLink && !recipe.videoThumbnail.data && <><br /><Link
                        className="youtube-button"
                        href={recipe.YouTubeLink}
                        onClick={() => sendGTMEvent({ event: 'conversion', value: recipe.title })}
                        target='_blank'>
                        Watch YouTube Video</Link></>}

                      <br /><br />


                    </div>

                  </div>
                </div>

                {recipe.RecipeIntro && <div className="recipe-intro">
                  <Markdown>{recipe.RecipeIntro}</Markdown>
                </div>}

              </div>
            </div>

            <div className="recipe-col-2">
              {recipe.PhotoMain.data[0] &&
                recipe.PhotoMain.data[0].attributes.url &&
                <Image
                  src={recipe.PhotoMain.data[0].attributes.url}
                  alt={recipe.PhotoMain.data[0].attributes.alternativeText ? recipe.PhotoMain.data[0].attributes.alternativeText : recipe.title}
                  layout="responsive"
                  width="700"
                  height="700"
                />
              }
              {recipe.PhotoMain.data[1] &&
                recipe.PhotoMain.data[1].attributes.url &&
                <Image
                  src={recipe.PhotoMain.data[1].attributes.url}
                  alt={recipe.PhotoMain.data[1].attributes.alternativeText ? recipe.PhotoMain.data[1].attributes.alternativeText : recipe.title}
                  layout="responsive"
                  width="700"
                  height="700"
                />
              }

              {recipe.PhotoPinterest.data &&
                recipe.PhotoPinterest.data.attributes.url &&
                <Image
                  src={recipe.PhotoPinterest.data.attributes.url}
                  alt={recipe.PhotoPinterest.data.attributes.alternativeText}
                  layout="responsive"
                  width="500"
                  height="775"
                />
              }

            </div>

            <div className="recipe-col-3">
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

