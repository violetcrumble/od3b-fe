import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  GET_ALL_RECIPE_SLUGS,
  GET_ALL_RECIPE_SUMMARIES,
  GET_INDIVIDUAL_RECIPE,
  GET_ALL_AFFILIATE_PARTNERS,
} from '../../graphql/queries';
import { strapiQuery, strapiQueryCached } from '../../utils/strapiQuery';
import ContentWrapper from '../../components/ContentWrapper';
import Markdown from 'react-markdown';
import AmazonListingCard from '../../components/Cards/AmazonListingCard/AmazonListingCard';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import markdownLinkComponents from '../../utils/markdownLinkComponents';
import { linkifyAffiliateIngredients, selectRecipeAffiliates } from '../../utils/affiliateIngredients';
import getArticle from '../../utils/getArticle';
import cloudinaryOptimize from '../../utils/cloudinaryOptimize';
import getRelatedRecipes from '../../utils/getRelatedRecipes';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import ThcAffiliateCTAs from '../../components/ThcAffiliateCTAs/ThcAffiliateCTAs';
import RecipeRating from '../../components/RecipeRating/RecipeRating';
import getBreadcrumbJsonLd from '../../utils/breadcrumbJsonLd';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/Recipe.module.scss';
// import shareIcon from '../../public/icons/share.svg';
// import printIcon from '../../public/icons/printer.svg';

// Multiple recipes often share one video at different timestamps (?t=137 or ?t=183s).
function getYouTubeStartSeconds(youTubeLink) {
  if (!youTubeLink) return null;
  const match = youTubeLink.match(/[?&]t=(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

export default function Recipe({ recipe, relatedRecipes, affiliates }) {
  // Related Products is Amazon-only: THC partner products are promoted via the
  // affiliate CTA boxes and ingredient links instead, not listed twice.
  const amazonProducts = recipe.relatedProducts.filter((product) =>
    /amazon\.com|amzn\.to/.test(product.AmazonLink || ''),
  );

  const youTubeStartSeconds = getYouTubeStartSeconds(recipe.YouTubeLink);
  const youTubeEmbedUrl = recipe.youTubeID
    ? `https://www.youtube-nocookie.com/embed/${recipe.youTubeID}${youTubeStartSeconds ? `?start=${youTubeStartSeconds}` : ''}`
    : null;

  function addRecipeJsonLd() {
    const jsonLd = {
      '@context': 'https://schema.org/',
      '@type': 'Recipe',
      name: recipe.title,
      image: [cloudinaryOptimize(recipe.PhotoMain[0].url)],
      recipeIngredient: recipe.cocktailIngredients.ingredients,
      recipeYield: '1 cocktail',
      description: recipe.recipebody,
      recipeInstructions: recipe.recipebody,
      prepTime: 'PT5M',
      cookTime: 'PT0M',
      keywords: recipe.keywords
        ? recipe.keywords
        : 'cocktail recipes, easy cocktails to make at home, alcoholic drink recipes',
      recipeCategory: 'Cocktail',
      video: recipe.YouTubeLink
        ? {
            '@type': 'VideoObject',
            name: `How to make ${getArticle(recipe.title)}${recipe.title}`,
            description: recipe.recipebody,
            contentUrl: recipe.YouTubeLink,
            ...(youTubeEmbedUrl && { embedUrl: youTubeEmbedUrl }),
            ...(recipe.videoUploadDate && {
              uploadDate: recipe.videoUploadDate,
            }),
            thumbnailUrl: cloudinaryOptimize(
              recipe.videoThumbnail ? recipe.videoThumbnail.url : recipe.PhotoMain[0].url,
            ),
          }
        : undefined,
      author: {
        '@type': 'Organization',
        name: 'Cocktail Underground',
      },
      ...(recipe.ratingCount > 0 && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: Number((recipe.ratingTotal / recipe.ratingCount).toFixed(1)),
          ratingCount: recipe.ratingCount,
          bestRating: 5,
          worstRating: 1,
        },
      }),
    };
    return { __html: JSON.stringify(jsonLd) };
  }
  return (
    <ContentWrapper>
      <Head>
        <title>{`${recipe.title} cocktail recipe`}</title>
        <meta
          name="description"
          content={recipe.seoDescription || `How to make ${getArticle(recipe.title)}${recipe.title} cocktail at home`}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/cocktail-recipes/${recipe.recipeUrlSlug}`} />
        <meta property="og:title" content={`${recipe.title} cocktail recipe`} />
        <meta
          property="og:description"
          content={recipe.seoDescription || `How to make ${getArticle(recipe.title)}${recipe.title} cocktail at home`}
        />
        <meta property="og:image" content={cloudinaryOptimize(recipe.PhotoMain[0].url)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={addRecipeJsonLd()} key="recipe-jsonld" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Cocktail Recipes', url: '/cocktail-recipes' },
            { name: recipe.title },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>

      <div className={`${styles['recipe-page']} constrained-content`}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp;
          <Link href="/cocktail-recipes/">Cocktail Recipes</Link>&nbsp;:&nbsp;
          {recipe.title}
        </div>

        <div className={`${styles['recipe-header']}`}>
          <h1 className="text-brand-purple">{recipe.title} Recipe</h1>
          {/* <div className={`${styles['recipe-share-buttons']}`}>
            <div className={`${styles['print-button']}`}>
              <Image priority src={printIcon} alt="Print" height={24} width={24} />
              print
            </div>
            <div className={`${styles['share-button']}`}>
              <Image priority src={shareIcon} alt="Share" height={24} width={24} />
              share
            </div>
          </div> */}
        </div>
        {/* end recipe header */}

        <RecipeRating
          slug={recipe.recipeUrlSlug}
          initialCount={recipe.ratingCount || 0}
          initialTotal={recipe.ratingTotal || 0}
        />

        <div className={`${styles['recipe-page-col-container']}`}>
          <div className={`${styles['recipe-page-col-1']}`}>
            <h2 className={`${styles['recipe-ingredients-heading']} text-teal`}>{recipe.title} Ingredients</h2>
            <div className={`${styles['recipe-ingredients']}`}>
              <Markdown components={markdownLinkComponents}>
                {affiliates?.length
                  ? linkifyAffiliateIngredients(recipe.ingredients, affiliates, recipe.recipeUrlSlug)
                  : recipe.ingredients}
              </Markdown>
            </div>

            {/* real embedded player, not a link-out — required for Google video indexing */}
            {youTubeEmbedUrl && (
              <div className={`${styles['video-embed-container']}`}>
                <iframe
                  src={youTubeEmbedUrl}
                  title={`How to make ${getArticle(recipe.title)}${recipe.title}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            <h2 className={`${styles['recipe-body-heading']} text-brand-teal`}>
              How to make {getArticle(recipe.title)}
              {recipe.title}
            </h2>
            <Markdown>{recipe.recipebody}</Markdown>

            {recipe.PhotoMain?.[0]?.url && (
              <div className="mobile-recipe-pic-container">
                <Image
                  src={recipe.PhotoMain[0].url}
                  alt={recipe.PhotoMain[0].alternativeText ? recipe.PhotoMain[0].alternativeText : recipe.title}
                  width="487"
                  height="487"
                  className={styles['mobile-recipe-image']}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                  sizes="90vw"
                />
              </div>
            )}

            {recipe.RecipeIntro && (
              <div className="recipe-intro">
                <Markdown components={markdownLinkComponents}>{recipe.RecipeIntro}</Markdown>
              </div>
            )}
          </div>
          {/* end column 1 */}

          <div className={`${styles['recipe-page-col-2']}`}>
            {recipe.PhotoMain?.[0]?.url && (
              <Image
                src={recipe.PhotoMain[0].url}
                alt={recipe.PhotoMain[0].alternativeText ? recipe.PhotoMain[0].alternativeText : recipe.title}
                width="487"
                height="487"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                sizes="(min-width: 1600px) 500px, 35vw"
              />
            )}
            {recipe.PhotoMain?.[1]?.url && (
              <Image
                src={recipe.PhotoMain[1].url}
                alt={recipe.PhotoMain[1].alternativeText ? recipe.PhotoMain[1].alternativeText : recipe.title}
                width="487"
                height="487"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                sizes="(min-width: 1600px) 500px, 35vw"
              />
            )}

            <ThcAffiliateCTAs affiliates={affiliates} campaign={recipe.recipeUrlSlug} />

            <NewsletterSignup />

            {recipe.PhotoPinterest?.url && (
              <Image
                src={recipe.PhotoPinterest.url}
                alt={recipe.PhotoPinterest.alternativeText}
                width="256"
                height="370"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                sizes="(min-width: 1600px) 500px, 35vw"
              />
            )}

            {amazonProducts.length ? (
              <div>
                <h2>Related Products</h2>
                <p>
                  This site contains product affiliate links. We may receive a commission if you make a purchase after
                  clicking on one of these links.
                </p>

                <div className={`${styles['related-product-cards']}`}>
                  {amazonProducts.map((product) => (
                    <AmazonListingCard
                      key={product.AmazonASIN || product.ProductName}
                      productName={product.ProductName}
                      productCategory={product.ProductCategory}
                      amazonLink={product.AmazonLink}
                      amazonASIN={product.AmazonASIN}
                      amazonPhotoURL={product.AmazonPhotoURL}
                    />
                  ))}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* end column 2 */}
        </div>
        {/* end col container */}

        {relatedRecipes.length > 0 && (
          <div className={`${styles['related-recipes']}`}>
            <h2 className="text-brand-teal">You Might Also Like</h2>
            <div className="listings-3-col">
              {relatedRecipes.map((related) => (
                <Link
                  className="listing-card"
                  key={related.recipeUrlSlug}
                  href={`/cocktail-recipes/${related.recipeUrlSlug}`}
                >
                  <RecipeListingCard recipe={related} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
}

export async function getStaticPaths() {
  const data = await strapiQuery(GET_ALL_RECIPE_SLUGS);

  const paths = data.recipes.map((recipe) => {
    return { params: { recipeUrlSlug: recipe.recipeUrlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await strapiQuery(GET_INDIVIDUAL_RECIPE, { recipeUrlSlug: params.recipeUrlSlug });

  const attrs = data.recipes[0];

  const allRecipesData = await strapiQueryCached(GET_ALL_RECIPE_SUMMARIES);

  const relatedRecipes = getRelatedRecipes(attrs, allRecipesData.recipes);

  // THC recipes get affiliate CTA boxes in the sidebar; other spirits don't,
  // since the partner lineup is all THC brands. Each recipe shows only the
  // partner whose product it actually uses; if no partner matches (e.g. a
  // Willie's Remedy recipe, where we have no affiliate program), show all.
  const isThcRecipe = attrs.spirits.some((spirit) => spirit.spirit === 'thc');
  let affiliates = [];
  if (isThcRecipe) {
    const affiliatesData = await strapiQueryCached(GET_ALL_AFFILIATE_PARTNERS);
    affiliates = selectRecipeAffiliates(attrs, affiliatesData.affiliatePartners);
  }

  return {
    props: {
      recipe: attrs,
      relatedRecipes,
      affiliates,
    },
  };
}
