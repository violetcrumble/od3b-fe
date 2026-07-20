import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import ListingCard from '../../components/Cards/ListingCard/ListingCard';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import { GET_ALL_THC_RECIPES, GET_ALL_BLOG_POSTS, GET_ALL_REVIEWS } from '../../graphql/queries';
import { strapiQueryCached } from '../../utils/strapiQuery';
import THC_GUIDE_SLUGS from '../../utils/thcGuideSlugs';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/THC.module.scss';

export async function getStaticProps() {
  const [data, blogData, reviewsData] = await Promise.all([
    strapiQueryCached(GET_ALL_THC_RECIPES),
    strapiQueryCached(GET_ALL_BLOG_POSTS),
    strapiQueryCached(GET_ALL_REVIEWS),
  ]);

  const guides = blogData.blogPosts.filter((post) => THC_GUIDE_SLUGS.includes(post.urlSlug));

  return {
    props: {
      recipes: data.recipes.slice(0, 3),
      guides,
      reviews: reviewsData.reviews,
    },
  };
}

export default function THCMain({ recipes, guides, reviews }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks</title>
        <meta
          name="description"
          content="THC drinks explained: tested cocktail recipes, honest reviews of hemp-derived seltzers and tonics, and dosage guides to help you pour with confidence."
        />
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
              key={review.reviewUrlSlug}
              href={`/thc-drinks/reviews/${review.reviewUrlSlug}`}
            >
              <ListingCard
                title={review.title}
                authorName={review.review_authors[0]?.AuthorName}
                date={review.reviewDate}
                imageUrl={review.listingCardImage?.url}
                imageCaption={review.listingCardImage?.caption}
                snippet={review.previewSnippet}
                rating={review.rating}
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
              key={recipe.recipeUrlSlug}
              href={`/cocktail-recipes/${recipe.recipeUrlSlug}`}
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
                <Link className="listing-card" key={guide.urlSlug} href={`/blog/${guide.urlSlug}`}>
                  <ListingCard
                    title={guide.Title}
                    authorName={guide.blog_authors[0].AuthorName}
                    date={guide.Date}
                    imageUrl={guide.ListingCardImage?.url}
                    imageCaption={guide.ListingCardImage?.caption}
                    snippet={guide.TextPreviewSnippet}
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
