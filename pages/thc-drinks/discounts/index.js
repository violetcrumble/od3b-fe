import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ContentWrapper from '../../../components/ContentWrapper';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import { GET_AFFILIATE_DISCOUNTS } from '../../../graphql/queries';
import { strapiQueryCached } from '../../../utils/strapiQuery';
import affiliateLink from '../../../utils/affiliateLink';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import SITE_URL from '../../../utils/siteUrl';
import thcStyles from '../../../styles/pages/THC.module.scss';
import styles from '../../../styles/pages/Discounts.module.scss';

export async function getStaticProps() {
  const data = await strapiQueryCached(GET_AFFILIATE_DISCOUNTS);

  return {
    props: {
      partners: data.affiliatePartners,
    },
  };
}

function CopyCodeButton({ code }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className={styles['copy-btn']}
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? 'Copied!' : 'Copy code'}
    </button>
  );
}

export default function THCDiscounts({ partners }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks - Discount Codes</title>
        <meta
          name="description"
          content="Working discount codes for THC drinks and beverages, tested by us. Save on Grind, Crescent 9, Artet and more, with honest reviews to help you pick."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/thc-drinks/discounts`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'THC Drinks', url: '/thc-drinks' },
            { name: 'Discount Codes' },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>
      <div className={`${thcStyles['thc-page']} constrained-content`}>
        <div className="breadcrumb">
          <Link href="/">Home</Link>&nbsp;:&nbsp;
          <Link href="/thc-drinks">THC Drinks</Link>&nbsp;:&nbsp; Discount Codes
        </div>

        <h1 className="text-brand-purple">THC Drink Discount Codes</h1>

        <p>
          Current discount codes for the THC drink brands we have actually tried. Every code on this page is one we use
          ourselves, and where we have published a full review, it is linked so you can read our honest take before you
          buy.
        </p>
        <p>
          This site contains product affiliate links. We may receive a commission if you make a purchase after clicking
          on one of these links.
        </p>

        <div className={styles['discount-list']}>
          {partners.map((partner) => (
            <div key={partner.name} className={styles['discount-card']}>
              <div className={styles['discount-card-top']}>
                <div className={styles['discount-card-text']}>
                  <h2 className="text-brand-teal">
                    {partner.name} {partner.discountCode ? 'Discount Code' : 'Discount'}
                  </h2>
                  {partner.discountDetails && <p className={styles.deal}>{partner.discountDetails}</p>}
                  <p>{partner.blurb}</p>
                </div>
                {partner.photoUrl && (
                  <div className={styles['discount-card-photo']}>
                    <Image src={partner.photoUrl} alt={partner.name} fill sizes="104px" />
                  </div>
                )}
              </div>

              {partner.discountCode ? (
                <div className={styles['code-row']}>
                  <span className={styles.code}>{partner.discountCode}</span>
                  <CopyCodeButton code={partner.discountCode} />
                </div>
              ) : (
                <p className={styles['no-code']}>No code needed. Your discount is applied through our link.</p>
              )}

              {partner.reviewUrl && (
                <Link className={styles['review-link']} href={partner.reviewUrl}>
                  Read our full {partner.name} review
                </Link>
              )}

              <a
                className={styles['cta-link']}
                href={affiliateLink(partner.baseUrl, {
                  medium: 'discounts_page',
                  campaign: 'thc_discounts',
                  content: partner.name.toLowerCase().replace(/\s+/g, '_'),
                })}
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                {partner.cta}
              </a>
            </div>
          ))}
        </div>

        <NewsletterSignup />

        <p className={thcStyles['legal-note']}>
          Safety and legal note: THC products are intended for adults 21 and older. Effects vary by person and product.
          Start with a low dose, allow adequate time before consuming more, and do not drive after use. Laws and
          availability vary by location.
        </p>
      </div>
    </ContentWrapper>
  );
}
