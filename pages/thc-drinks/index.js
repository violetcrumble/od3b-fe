import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import ListingCard from '../../components/Cards/ListingCard/ListingCard';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import { GET_ALL_THC_RECIPES, GET_ALL_BLOG_POSTS, GET_ALL_REVIEWS } from '../../graphql/queries';
import THC_GUIDE_SLUGS from '../../utils/thcGuideSlugs';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/THC.module.scss';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = (query) => ({
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const [recipesRes, blogRes, reviewsRes] = await Promise.all([
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_THC_RECIPES)),
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_BLOG_POSTS)),
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_REVIEWS)),
  ]);
  const data = await recipesRes.json();
  const blogData = await blogRes.json();
  const reviewsData = await reviewsRes.json();

  const guides = blogData.data.blogPosts_connection.data.filter((post) =>
    THC_GUIDE_SLUGS.includes(post.attributes.urlSlug),
  );

  return {
    props: {
      recipes: data.data.recipes_connection.data.slice(0, 3),
      guides,
      reviews: reviewsData.data.reviews_connection.data,
    },
  };
}

export default function THCMain({ recipes, guides, reviews }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks</title>
        <meta name="description" content="THC Drinks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/thc-drinks`} />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <h1 className="text-brand-purple">THC Drinks, Recipes and Reviews</h1>
        <p>
          Curious about THC drinks but not sure where to begin? Explore tested THC cocktail recipes, honest canned-drink
          reviews, dosage guides, and practical answers about hemp-derived THC beverages.
        </p>

        <h2 className="text-brand-teal">THC Drink Reviews</h2>
        <div className="listings-3-col">
          {reviews.map((review) => (
            <Link
              className="listing-card"
              key={review.attributes.reviewUrlSlug}
              href={`/thc-drinks/reviews/${review.attributes.reviewUrlSlug}`}
            >
              <ListingCard
                title={review.attributes.title}
                authorName={review.attributes.review_authors_connection.data[0]?.attributes.AuthorName}
                date={review.attributes.reviewDate}
                imageUrl={review.attributes.listingCardImage?.data?.attributes.url}
                imageCaption={review.attributes.listingCardImage?.data?.attributes.caption}
                snippet={review.attributes.previewSnippet}
                rating={review.attributes.rating}
              />
            </Link>
          ))}
          <div className="listing-card"></div>
        </div>
        <Link href="/thc-drinks/reviews">
          <button>View All THC Reviews</button>
        </Link>

        <hr></hr>

        <h2 className="text-brand-teal">THC Recipes</h2>
        <div className="listings-3-col">
          {recipes.map((recipe, index) => (
            <Link
              className="listing-card"
              key={recipe.attributes.recipeUrlSlug}
              href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}
            >
              <RecipeListingCard recipe={recipe} priority={index === 0} />
            </Link>
          ))}
        </div>
        <Link href="/thc-drinks/recipes">
          <button>View All THC Recipes</button>
        </Link>

        <hr></hr>

        {/* Renders only once guide posts are published in Strapi */}
        {guides.length > 0 && (
          <>
            <h2 className="text-brand-teal">THC Guides and Answers</h2>
            <div className="listings-3-col">
              {guides.map((guide) => (
                <Link
                  className="listing-card"
                  key={guide.attributes.urlSlug}
                  href={`/blog/${guide.attributes.urlSlug}`}
                >
                  <ListingCard
                    title={guide.attributes.Title}
                    authorName={guide.attributes.blog_authors_connection.data[0].attributes.AuthorName}
                    date={guide.attributes.Date}
                    imageUrl={guide.attributes.ListingCardImage?.data?.attributes.url}
                    imageCaption={guide.attributes.ListingCardImage?.data?.attributes.caption}
                    snippet={guide.attributes.TextPreviewSnippet}
                  />
                </Link>
              ))}
            </div>
            <Link href="/thc-drinks/guides">
              <button>View All THC Guides</button>
            </Link>
          </>
        )}

        <NewsletterSignup />

        <p className={styles['legal-note']}>
          Safety and legal note: THC products are intended for adults 21 and older. Effects vary by person and product.
          Start with a low dose, allow adequate time before consuming more, and do not drive after use. Laws and
          availability vary by location.
        </p>
      </div>
    </ContentWrapper>
  );
}
