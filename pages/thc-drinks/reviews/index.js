import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../../components/ContentWrapper';
import ListingCard from '../../../components/Cards/ListingCard/ListingCard';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import { GET_ALL_REVIEWS } from '../../../graphql/queries';
import { strapiQueryCached } from '../../../utils/strapiQuery';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import SITE_URL from '../../../utils/siteUrl';
import styles from '../../../styles/pages/THC.module.scss';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_ALL_REVIEWS);

  return {
    props: {
      reviews: data.reviews,
    },
  };
}

export default function THCReviews({ reviews }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks - Reviews</title>
        <meta
          name="description"
          content="Honest reviews of THC drinks and seltzers — flavor, dose, price, and lab-test checks for Willie's Remedy, Crescent 9, Artet, and more."
        />
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
          <div className="listing-card">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
