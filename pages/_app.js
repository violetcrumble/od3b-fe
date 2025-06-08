import { montserrat } from '../utils/fonts';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </div>
    </>
  );
}

export default MyApp;
