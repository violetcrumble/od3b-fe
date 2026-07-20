import Head from 'next/head';
import Link from 'next/link';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { GET_ALL_REVIEW_SLUGS, GET_REVIEW, GET_ALL_AFFILIATE_PARTNERS } from '../../../graphql/queries';
import ContentWrapper from '../../../components/ContentWrapper';
import Markdown from 'react-markdown';
import styles from '../../../styles/pages/Review.module.scss';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import ThcAffiliateCTAs from '../../../components/ThcAffiliateCTAs/ThcAffiliateCTAs';
import ReviewRatingBadge from '../../../components/Review/ReviewRatingBadge/ReviewRatingBadge';
import ReviewVerdictBox from '../../../components/Review/ReviewVerdictBox/ReviewVerdictBox';
import ReviewProsCons from '../../../components/Review/ReviewProsCons/ReviewProsCons';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import markdownLinkComponents from '../../../utils/markdownLinkComponents';
import cloudinaryOptimize from '../../../utils/cloudinaryOptimize';
import SITE_URL from '../../../utils/siteUrl';

const URL = process.env.STRAPIBASEURL;

const client = new ApolloClient({
  link: new HttpLink({ uri: `${URL}/graphql` }),
  cache: new InMemoryCache(),
});

export default function Review({ review, affiliates }) {
  const formattedDate = new Date(review.reviewDate).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  });

  const canonicalUrl = `${SITE_URL}/thc-drinks/reviews/${review.reviewUrlSlug}`;
  const authorName = review.review_authors[0]?.AuthorName || 'Cocktail Underground';
  const listingImageUrl = review.listingCardImage?.url;
  const ogImageUrl = review.ogImage?.url || listingImageUrl;

  function addReviewJsonLd() {
    const jsonLd = {
      '@context': 'https://schema.org/',
      '@type': 'Review',
      name: review.title,
      // Verdict may contain markdown links; structured data wants plain text.
      reviewBody: review.verdict.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1'),
      itemReviewed: {
        '@type': 'Product',
        name: review.productName,
        image: [listingImageUrl ? cloudinaryOptimize(listingImageUrl) : `${SITE_URL}/pic-not-available.gif`],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: review.rating,
          reviewCount: 1,
          bestRating: 5,
          worstRating: 1,
        },
        ...(review.price && {
          offers: { '@type': 'Offer', price: review.price, priceCurrency: 'USD', url: review.buyUrl },
        }),
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        '@type': 'Person',
        name: authorName,
      },
      datePublished: review.reviewDate,
      dateModified: review.updatedAt || review.reviewDate,
      publisher: { '@type': 'Organization', name: 'Cocktail Underground' },
    };
    return { __html: JSON.stringify(jsonLd) };
  }

  return (
    <ContentWrapper>
      <Head>
        <title>{review.title}</title>
        <meta name="description" content={review.seoDescription || review.previewSnippet} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={review.title} />
        <meta property="og:description" content={review.seoDescription || review.previewSnippet} />
        <meta
          property="og:image"
          content={ogImageUrl ? cloudinaryOptimize(ogImageUrl) : `${SITE_URL}/pic-not-available.gif`}
        />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={addReviewJsonLd()} key="review-jsonld" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'THC Drinks', url: '/thc-drinks' },
            { name: 'Reviews', url: '/thc-drinks/reviews' },
            { name: review.title },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>

      <div className={`${styles['review-page']} constrained-content`}>
        <div className={`${styles['review-content']}`}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/thc-drinks">THC Drinks</Link>&nbsp;:&nbsp;
            <Link href="/thc-drinks/reviews">Reviews</Link>&nbsp;:&nbsp;
            {review.title}
          </div>
          <h1 className="text-brand-purple">{review.title}</h1>
          <p>
            {authorName} | {formattedDate}
          </p>

          <ReviewRatingBadge rating={review.rating} />
          <ReviewVerdictBox verdict={review.verdict} />

          <Markdown components={markdownLinkComponents}>{review.reviewBody}</Markdown>

          <ReviewProsCons pros={review.pros?.items || []} cons={review.cons?.items || []} />

          {review.disclaimer && <p className={styles.disclaimer}>{review.disclaimer}</p>}
        </div>

        <div className={`${styles['sidebar']}`}>
          <ThcAffiliateCTAs affiliates={affiliates} campaign={review.reviewUrlSlug} />
          <NewsletterSignup />
        </div>
      </div>
    </ContentWrapper>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_REVIEW_SLUGS });

  const paths = data.reviews.map((review) => {
    return { params: { reviewUrlSlug: review.reviewUrlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [{ data }, affiliatesResult] = await Promise.all([
    client.query({
      query: GET_REVIEW,
      variables: { reviewUrlSlug: params.reviewUrlSlug },
    }),
    client.query({ query: GET_ALL_AFFILIATE_PARTNERS }),
  ]);

  const attrs = data.reviews[0];
  const affiliates = affiliatesResult.data.affiliatePartners;

  return {
    props: {
      review: attrs,
      affiliates,
    },
  };
}
