import { montserrat } from '../utils/fonts';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import useAffiliateClickTracking from '../utils/trackAffiliateClicks';
import useScrollDepthTracking from '../utils/trackScrollDepth';
import '../styles/globals.scss';
import '../styles/print.scss';

// The GTM container only forwards dataLayer events; page views come from this direct GA4 tag. Do not remove it.
const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;
const gtmEnabled = gtmId?.startsWith('GTM-');

function MyApp({ Component, pageProps }) {
  useAffiliateClickTracking();
  useScrollDepthTracking();

  return (
    <>
      <div className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-DG1D4YR0Y6" />
        {gtmEnabled && <GoogleTagManager gtmId={gtmId} />}
      </div>
    </>
  );
}

export default MyApp;
