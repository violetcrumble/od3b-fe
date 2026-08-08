import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'react-markdown';
import ContentWrapper from '../../../components/ContentWrapper';
import ThcAffiliateCTAs from '../../../components/ThcAffiliateCTAs/ThcAffiliateCTAs';
import NewsletterSignup from '../../../components/NewsletterSignup/NewsletterSignup';
import THC_STATE_LEGALITY, { FEDERAL_BAN } from '../../../data/thcStateLegality';
import THC_STATE_GUIDES from '../../../data/thcStateGuides';
import { GET_ALL_AFFILIATE_PARTNERS } from '../../../graphql/queries';
import { strapiQueryCached } from '../../../utils/strapiQuery';
import getBreadcrumbJsonLd from '../../../utils/breadcrumbJsonLd';
import markdownLinkComponents from '../../../utils/markdownLinkComponents';
import SITE_URL from '../../../utils/siteUrl';
import thcStyles from '../../../styles/pages/THC.module.scss';
import styles from '../../../styles/pages/LegalStates.module.scss';

export async function getStaticProps() {
  const affiliatesData = await strapiQueryCached(GET_ALL_AFFILIATE_PARTNERS);

  return {
    props: {
      affiliates: affiliatesData.affiliatePartners,
    },
  };
}

const STATUS_LABELS = {
  legal: 'Legal at retail',
  restricted: 'Restricted',
  banned: 'Banned',
  unclear: 'Gray area',
};

// Tile grid layout: 11 columns, roughly geographic. null = empty cell.
const TILE_ROWS = [
  [null, null, null, null, null, null, null, null, null, null, 'ME'],
  [null, null, null, null, null, null, 'WI', null, null, 'VT', 'NH'],
  ['WA', 'ID', 'MT', 'ND', 'MN', 'IL', 'MI', null, 'NY', 'MA', null],
  ['OR', 'NV', 'WY', 'SD', 'IA', 'IN', 'OH', 'PA', 'NJ', 'CT', 'RI'],
  ['CA', 'UT', 'CO', 'NE', 'MO', 'KY', 'WV', 'VA', 'MD', 'DE', null],
  [null, 'AZ', 'NM', 'KS', 'AR', 'TN', 'NC', 'SC', null, null, null],
  [null, null, null, 'OK', 'LA', 'MS', 'AL', 'GA', null, null, null],
  ['HI', 'AK', null, null, 'TX', null, null, null, 'FL', null, null],
];

const statesByCode = Object.fromEntries(THC_STATE_LEGALITY.map((state) => [state.code, state]));
const guidesByCode = Object.fromEntries(THC_STATE_GUIDES.map((guide) => [guide.code, guide]));

export default function LegalStates({ affiliates }) {
  const [selectedCode, setSelectedCode] = useState('');

  const jumpToState = (code) => {
    setSelectedCode(code);
    document.getElementById(`state-${code}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const counts = THC_STATE_LEGALITY.reduce((acc, state) => {
    acc[state.status] = (acc[state.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Are THC Drinks Legal in My State?</title>
        <meta
          name="description"
          content="State-by-state guide to where hemp THC drinks are legal, restricted, or banned, with sources and review dates for all 50 states. Check yours before you buy."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/thc-drinks/legal-states`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'THC Drinks', url: '/thc-drinks' },
            { name: 'Legal States' },
          ])}
          key="breadcrumb-jsonld"
        />
      </Head>
      <div className={`${thcStyles['thc-page']} ${styles['legal-states-page']} constrained-content`}>
        <div className={styles['legal-content']}>
          <div className="breadcrumb">
            <Link href="/">Home</Link>&nbsp;:&nbsp;
            <Link href="/thc-drinks">THC Drinks</Link>&nbsp;:&nbsp; Legal States
          </div>

          <h1 className="text-brand-purple">Are THC Drinks Legal in Your State?</h1>

          <p>
            Hemp-derived THC drinks live or die by state law, and the rules change constantly. This page tracks where
            you can buy them at ordinary retail, where they are locked behind dispensary doors, and where they are
            banned outright. Every state entry lists its sources and the date we last reviewed it.
          </p>
          <p>
            Each entry also covers mail order, because &quot;legal in stores&quot; and &quot;someone will ship it to
            you&quot; are different questions. A few states allow retail but ban direct shipping, and every brand
            maintains its own ship-to list at checkout, so treat the checkout page of{' '}
            <Link href="/thc-drinks/discounts">a brand we have vetted</Link> as the final word for your address.
          </p>

          <div className={styles['federal-callout']}>
            <h2 className="text-brand-purple">
              First, the big one: the federal ban arrives {FEDERAL_BAN.effectiveDate}
            </h2>
            <p>
              {FEDERAL_BAN.summary} We cover what that means and what you can do about it in{' '}
              <Link href={FEDERAL_BAN.postUrl}>our federal THC drink ban explainer</Link>.
            </p>
          </div>

          <div className={styles['state-picker']}>
            <label htmlFor="state-select">Jump to your state</label>
            <select
              id="state-select"
              value={selectedCode}
              onChange={(event) => {
                if (event.target.value) jumpToState(event.target.value);
              }}
            >
              <option value="">Pick a state...</option>
              {THC_STATE_LEGALITY.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name} ({STATUS_LABELS[state.status]})
                </option>
              ))}
            </select>
          </div>

          <ul className={styles.legend}>
            {Object.entries(STATUS_LABELS).map(([status, label]) => (
              <li key={status}>
                <span className={`${styles.swatch} ${styles[`status-${status}`]}`} aria-hidden="true" />
                {label} ({counts[status] || 0})
              </li>
            ))}
          </ul>

          <div className={styles['tile-map']} role="img" aria-label="Map of THC drink legality by state">
            {TILE_ROWS.flat().map((code, index) =>
              code ? (
                <button
                  key={code}
                  type="button"
                  className={`${styles.tile} ${styles[`status-${statesByCode[code].status}`]}`}
                  title={`${statesByCode[code].name}: ${STATUS_LABELS[statesByCode[code].status]}`}
                  aria-label={`${statesByCode[code].name}: ${STATUS_LABELS[statesByCode[code].status]}`}
                  onClick={() => jumpToState(code)}
                >
                  {code}
                </button>
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <span key={`spacer-${index}`} className={styles['tile-spacer']} aria-hidden="true" />
              ),
            )}
          </div>
          <p className={styles['map-note']}>
            Tap a state for details. Color shows status; every entry spells it out below.
          </p>

          <h2 className="text-brand-purple">Every state, in detail</h2>
          <p className={styles['status-counts']}>
            The quick math: {counts.legal} states let you buy THC drinks at regular stores, {counts.restricted} restrict
            them to dispensaries or cap doses below real-world products, {counts.banned} ban them outright, and{' '}
            {counts.unclear} are genuine gray areas.
          </p>

          {THC_STATE_LEGALITY.map((state) => (
            <section
              key={state.code}
              id={`state-${state.code}`}
              className={`${styles['state-section']} ${selectedCode === state.code ? styles.highlighted : ''}`}
            >
              <h3 className="text-brand-teal">
                {state.name}
                <span className={`${styles['status-badge']} ${styles[`status-${state.status}`]}`}>
                  {STATUS_LABELS[state.status]}
                </span>
              </h3>
              <p className={styles['state-summary']}>{state.summary}</p>
              <p className={styles['state-details']}>{state.details}</p>
              <div className={styles['state-shipping']}>
                <Markdown
                  components={markdownLinkComponents}
                >{`**Can you order it online?** ${state.shipping}`}</Markdown>
              </div>
              {guidesByCode[state.code] && (
                <p className={styles['state-guide-link']}>
                  <Link href={`/thc-drinks/legal-states/${guidesByCode[state.code].slug}`}>
                    Read our full {state.name} THC drinks guide
                  </Link>
                </p>
              )}
              <p className={styles['state-meta']}>
                Last reviewed {state.lastReviewed}. Source
                {state.sources.length > 1 ? 's' : ''}:{' '}
                {state.sources.map((source, index) => (
                  <span key={source.url}>
                    {index > 0 && ', '}
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.label}
                    </a>
                  </span>
                ))}
              </p>
            </section>
          ))}

          <p className={styles.disclaimer}>
            This page is our best good-faith reading of a fast-moving patchwork of laws, written for drinkers, not
            lawyers. It is not legal advice, and a state can change its rules faster than we can update a website. When
            it matters, check your state&apos;s own guidance or talk to an attorney. This site contains product
            affiliate links; we may receive a commission if you make a purchase after clicking one.
          </p>
        </div>

        <div className={styles.sidebar}>
          <ThcAffiliateCTAs affiliates={affiliates} campaign="legal-states" />
          <NewsletterSignup />
        </div>
      </div>
    </ContentWrapper>
  );
}
