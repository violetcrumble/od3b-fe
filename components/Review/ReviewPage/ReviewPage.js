import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'react-markdown';
import ContentWrapper from '../../ContentWrapper';
import NewsletterSignup from '../../NewsletterSignup/NewsletterSignup';
import ThcAffiliateCTAs from '../../ThcAffiliateCTAs/ThcAffiliateCTAs';
import AmazonListingCard from '../../Cards/AmazonListingCard/AmazonListingCard';
import ReviewRatingBadge from '../ReviewRatingBadge/ReviewRatingBadge';
import ReviewVerdictBox from '../ReviewVerdictBox/ReviewVerdictBox';
import ReviewProsCons from '../ReviewProsCons/ReviewProsCons';
import Byline from '../../Byline/Byline';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import markdownLinkComponents from '../../../utils/markdownLinkComponents';
import cloudinaryOptimize from '../../../utils/cloudinaryOptimize';
import SITE_URL from '../../../utils/siteUrl';
import styles from '../../../styles/pages/Review.module.scss';

// One template for every review. `section` (from utils/reviewSections) sets
// the canonical URL, the breadcrumb trail and which sidebar to show.
export default function ReviewPage({ review, section, affiliates = [] }) {
  const canonicalUrl = `${SITE_URL}${section.basePath}/${review.reviewUrlSlug}`;
  const authorName = review.review_authors[0]?.AuthorName || 'Cocktail Underground';
  const listingImageUrl = review.listingCardImage?.url;
  const ogImageUrl = review.ogImage?.url || listingImageUrl;
  const relatedProducts = review.relatedProducts || [];

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
      // Hand-set in Strapi for genuine revisions. Strapi's updatedAt bumps on any save,
      // so it would overstate freshness here the same way it did on blog posts.
      dateModified: review.lastUpdated || review.reviewDate,
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
        <meta property="og:type" content="article" />
        <meta property="og:description" content={review.seoDescription || review.previewSnippet} />
        <meta
          property="og:image"
          content={ogImageUrl ? cloudinaryOptimize(ogImageUrl, 1200) : `${SITE_URL}/pic-not-available.gif`}
        />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={addReviewJsonLd()} key="review-jsonld" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([...section.trail, { name: review.title }])}
          key="breadcrumb-jsonld"
        />
      </Head>

      <div className={`${styles['review-page']} constrained-content`}>
        <div className={`${styles['review-content']}`}>
          <div className="breadcrumb">
            {section.trail.map((crumb) => (
              <span key={crumb.url}>
                <Link href={crumb.url}>{crumb.name}</Link>&nbsp;:&nbsp;
              </span>
            ))}
            {review.title}
          </div>
          <h1 className="text-brand-purple">{review.title}</h1>
          <Byline authorName={authorName} date={review.reviewDate} />

          <ReviewRatingBadge rating={review.rating} />
          <ReviewVerdictBox verdict={review.verdict} />

          <Markdown components={markdownLinkComponents}>{review.reviewBody}</Markdown>

          <ReviewProsCons pros={review.pros?.items || []} cons={review.cons?.items || []} />

          {review.disclaimer && <p className={styles.disclaimer}>{review.disclaimer}</p>}
        </div>

        <div className={`${styles['sidebar']}`}>
          {section.sidebar === 'thc_partners' && (
            <ThcAffiliateCTAs affiliates={affiliates} campaign={review.reviewUrlSlug} />
          )}
          {section.sidebar === 'related_products' && relatedProducts.length > 0 && (
            <div>
              <h2>Related Products</h2>
              <div className={styles['related-product-cards']}>
                {relatedProducts.map((product) => (
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
          )}
          <NewsletterSignup />
        </div>
      </div>
    </ContentWrapper>
  );
}
