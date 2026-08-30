import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import ThcAffiliateCTAs from '../../components/ThcAffiliateCTAs/ThcAffiliateCTAs';
import { GET_ALL_AFFILIATE_PARTNERS } from '../../graphql/queries';
import { strapiQueryCached } from '../../utils/strapiQuery';
import styles from '../../styles/pages/BlogPost.module.scss';
import SITE_URL from '../../utils/siteUrl';

export default function Newsletter({ affiliates }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Newsletter Signup</title>
        <meta
          name="description"
          content="Sign up for the Cocktail Underground newsletter: cocktail recipes, THC drink picks, and home bar finds every two weeks."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${SITE_URL}/newsletter`} />
      </Head>
      <div className={`${styles['blog-post-page']} constrained-content`}>
        <div className={styles['blog-post-content']}>
          <h1 className="text-brand-purple">The Cocktail Underground Newsletter</h1>

          <p>
            Every two weeks I send out a short email with new cocktail recipes, THC drink picks, discount codes, and the
            home bar gear I&apos;m actually using. No spam, and you can unsubscribe any time.
          </p>

          <NewsletterSignup />
        </div>

        <div className={styles['sidebar']}>
          <ThcAffiliateCTAs affiliates={affiliates} campaign="newsletter" />
        </div>
      </div>
    </ContentWrapper>
  );
}

export async function getStaticProps() {
  const affiliatesData = await strapiQueryCached(GET_ALL_AFFILIATE_PARTNERS);

  return {
    props: {
      affiliates: affiliatesData.affiliatePartners,
    },
  };
}
