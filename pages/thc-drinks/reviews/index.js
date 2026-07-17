import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import BlogListingCard from '../../../components/Cards/BlogListingCard/BlogListingCard';
import ReviewListingCard from '../../../components/Cards/ReviewListingCard/ReviewListingCard';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import { GET_ALL_BLOG_POSTS, GET_ALL_REVIEWS } from '../../../graphql/queries';
import THC_REVIEW_SLUGS from '../../../utils/thcReviewSlugs';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import SITE_URL from '../../../utils/siteUrl';
import styles from '../../../styles/pages/THC.module.scss';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = (query) => ({
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const [blogRes, reviewsRes] = await Promise.all([
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_BLOG_POSTS)),
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_REVIEWS)),
  ]);
  const blogData = await blogRes.json();
  const reviewsData = await reviewsRes.json();

  // Reviews already migrated to the dedicated `review` content type, plus the
  // remaining ones still living as blog posts (see utils/thcReviewSlugs.js).
  const migratedReviews = reviewsData.data.reviews_connection.data.map((review) => ({ type: 'review', review }));
  const blogReviews = blogData.data.blogPosts_connection.data
    .filter((post) => THC_REVIEW_SLUGS.includes(post.attributes.urlSlug))
    .map((blogPost) => ({ type: 'blogReview', blogPost }));

  return {
    props: {
      reviews: [...migratedReviews, ...blogReviews],
    },
  };
}

export default function THCReviews({ reviews }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks - Reviews</title>
        <meta name="description" content="THC Drinks" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/thc-drinks/reviews`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'THC Drinks', url: '/thc-drinks' },
            { name: 'Reviews' },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp;
          <Link href="/thc-drinks">THC Drinks</Link>&nbsp;:&nbsp; Reviews
        </div>

        <h1 className="text-brand-purple">THC Reviews</h1>

        <p>
          Honest reviews of hemp-derived THC drinks and seltzers, including flavor notes, dose, and price comparisons.
        </p>

        <h2 className="sr-only">Reviews</h2>

        <div className="listings-3-col">
          {reviews.map((item) =>
            item.type === 'review' ? (
              <Link
                className="listing-card"
                key={item.review.attributes.reviewUrlSlug}
                href={`/thc-drinks/reviews/${item.review.attributes.reviewUrlSlug}`}
              >
                <ReviewListingCard review={item.review} />
              </Link>
            ) : (
              <Link
                className="listing-card"
                key={item.blogPost.attributes.urlSlug}
                href={`/blog/${item.blogPost.attributes.urlSlug}`}
              >
                <BlogListingCard blogPost={item.blogPost} />
              </Link>
            ),
          )}
          <div className="listing-card">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
