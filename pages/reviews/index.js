import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import ListingCard from '../../components/Cards/ListingCard/ListingCard';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import { GET_ALL_REVIEWS } from '../../graphql/queries';
import { strapiQueryCached } from '../../utils/strapiQuery';
import { REVIEW_SECTIONS, reviewHref, reviewsInSection } from '../../utils/reviewSections';
import getBreadcrumbJsonLd from '../../utils/breadcrumbJsonLd';
import SITE_URL from '../../utils/siteUrl';
import styles from '../../styles/pages/THC.module.scss';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_ALL_REVIEWS);

  return {
    props: {
      reviews: reviewsInSection(data.reviews, REVIEW_SECTIONS.general),
    },
  };
}

export default function Reviews({ reviews }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Reviews</title>
        <meta
          name="description"
          content="Honest reviews of home bar gear and drinks we actually use: ice makers, canned cocktails, and more, tested in real cocktails."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/reviews`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Reviews' }])}
          key="breadcrumb-jsonld"
        />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp; Reviews
        </div>

        <h1 className="text-brand-purple">Reviews</h1>

        <p>
          Home bar gear and drinks, tested in real cocktails and reviewed honestly. Looking for THC drinks? Those
          reviews live in the <Link href="/thc-drinks/reviews">THC Drinks section</Link>.
        </p>

        <h2 className="sr-only">Reviews</h2>

        <div className="listings-3-col">
          {reviews.map((review) => (
            <Link className="listing-card" key={review.reviewUrlSlug} href={reviewHref(review)}>
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
