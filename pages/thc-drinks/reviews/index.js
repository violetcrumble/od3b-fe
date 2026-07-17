import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import BlogListingCard from '../../../components/Cards/BlogListingCard/BlogListingCard';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import { GET_ALL_BLOG_POSTS } from '../../../graphql/queries';
import THC_REVIEW_SLUGS from '../../../utils/thcReviewSlugs';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import SITE_URL from '../../../utils/siteUrl';
import styles from '../../../styles/pages/THC.module.scss';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_ALL_BLOG_POSTS,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  const reviews = data.data.blogPosts_connection.data.filter((post) =>
    THC_REVIEW_SLUGS.includes(post.attributes.urlSlug),
  );

  return {
    props: {
      reviews,
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
          {reviews.map((review) => (
            <Link className="listing-card" key={review.attributes.urlSlug} href={`/blog/${review.attributes.urlSlug}`}>
              <BlogListingCard blogPost={review} />
            </Link>
          ))}
          <div className="listing-card">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
