import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'react-markdown';
import ContentWrapper from '../../../components/ContentWrapper';
import ThcAffiliateCTAs from '../../../components/ThcAffiliateCTAs/ThcAffiliateCTAs';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import THC_STATE_GUIDES from '../../../data/thcStateGuides';
import THC_STATE_LEGALITY from '../../../data/thcStateLegality';
import { GET_ALL_AFFILIATE_PARTNERS } from '../../../graphql/queries';
import { strapiQueryCached } from '../../../utils/strapiQuery';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import markdownLinkComponents from '../../../utils/markdownLinkComponents';
import SITE_URL from '../../../utils/siteUrl';
import thcStyles from '../../../styles/pages/THC.module.scss';
import styles from '../../../styles/pages/LegalStates.module.scss';

const STATUS_LABELS = {
  legal: 'Legal at retail',
  restricted: 'Restricted',
  banned: 'Banned',
  unclear: 'Gray area',
};

export async function getStaticPaths() {
  return {
    paths: THC_STATE_GUIDES.map((guide) => ({ params: { stateSlug: guide.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const guide = THC_STATE_GUIDES.find((entry) => entry.slug === params.stateSlug);
  const stateEntry = THC_STATE_LEGALITY.find((state) => state.code === guide.code);
  const affiliatesData = await strapiQueryCached(GET_ALL_AFFILIATE_PARTNERS);

  return {
    props: {
      guide,
      stateEntry,
      affiliates: affiliatesData.affiliatePartners,
    },
  };
}

export default function StateGuide({ guide, stateEntry, affiliates }) {
  const faqJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  });

  return (
    <ContentWrapper>
      <Head>
        <title>{`Cocktail Underground - ${guide.seoTitle}`}</title>
        <meta name="description" content={guide.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/thc-drinks/legal-states/${guide.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'THC Drinks', url: '/thc-drinks' },
            { name: 'Legal States', url: '/thc-drinks/legal-states' },
            { name: stateEntry.name },
          ])}
          key="breadcrumb-jsonld"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} key="faq-jsonld" />
      </Head>
      <div className={`${thcStyles['thc-page']} ${styles['legal-states-page']} constrained-content`}>
        <div className={styles['legal-content']}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/thc-drinks">THC Drinks</Link>&nbsp;:&nbsp;
            <Link href="/thc-drinks/legal-states">Legal States</Link>&nbsp;:&nbsp;{stateEntry.name}
          </div>

          <h1 className="text-brand-purple">
            {guide.heading}
            <span className={`${styles['status-badge']} ${styles[`status-${stateEntry.status}`]}`}>
              {STATUS_LABELS[stateEntry.status]}
            </span>
          </h1>

          <div className={styles['federal-callout']}>
            <h2 className="text-brand-purple">The short answer</h2>
            <p>{guide.quickAnswer}</p>
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-brand-teal">{section.heading}</h2>
              <Markdown components={markdownLinkComponents}>{section.body}</Markdown>
            </section>
          ))}

          <h2 className="text-brand-teal">{stateEntry.name} THC drink questions, answered</h2>
          {guide.faqs.map((faq) => (
            <section key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </section>
          ))}

          <p>
            Rules elsewhere are different, sometimes wildly. See how every state handles THC drinks on our{' '}
            <Link href="/thc-drinks/legal-states">50-state legality page</Link>.
          </p>

          <p className={styles['state-meta']}>
            Last updated {guide.updated}. Source{guide.sources.length > 1 ? 's' : ''}:{' '}
            {guide.sources.map((source, index) => (
              <span key={source.url}>
                {index > 0 && ', '}
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
              </span>
            ))}
          </p>

          <p className={styles.disclaimer}>
            This page is our best good-faith reading of a fast-moving area of law, written for drinkers, not lawyers. It
            is not legal advice, and a state can change its rules faster than we can update a website. When it matters,
            check your state&apos;s own guidance or talk to an attorney. This site contains product affiliate links; we
            may receive a commission if you make a purchase after clicking one.
          </p>
        </div>

        <div className={styles.sidebar}>
          <ThcAffiliateCTAs affiliates={affiliates} campaign={`legal-states-${guide.slug}`} />
          <NewsletterSignup />
        </div>
      </div>
    </ContentWrapper>
  );
}
