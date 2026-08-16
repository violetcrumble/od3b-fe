import { montserrat } from '../utils/fonts';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import useAffiliateClickTracking from '../utils/trackAffiliateClicks';
import useScrollDepthTracking from '../utils/trackScrollDepth';
import '../styles/globals.scss';
import '../styles/print.scss';

const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;
const gtmEnabled = gtmId?.startsWith('GTM-');

function MyApp({ Component, pageProps }) {
  useAffiliateClickTracking();
  useScrollDepthTracking();

  return (
    <>
      <div className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        {gtmEnabled && <GoogleTagManager gtmId={gtmId} />}
      </div>
    </>
  );
}

export default MyApp;
