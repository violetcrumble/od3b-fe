import { montserrat } from '../utils/fonts';
import { GoogleTagManager } from '@next/third-parties/google';
import useAffiliateClickTracking from '../utils/trackAffiliateClicks';
import useScrollDepthTracking from '../utils/trackScrollDepth';
import '../styles/globals.scss';
import '../styles/print.scss';

// GA4 is loaded by the GTM container; a direct gtag script on top of it only duplicated 188 KB per page.
const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;
const gtmEnabled = gtmId?.startsWith('GTM-');

function MyApp({ Component, pageProps }) {
  useAffiliateClickTracking();
  useScrollDepthTracking();

  return (
    <>
      <div className={montserrat.className}>
        <Component {...pageProps} />
        {gtmEnabled && <GoogleTagManager gtmId={gtmId} />}
      </div>
    </>
  );
}

export default MyApp;
