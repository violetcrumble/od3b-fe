import { montserrat } from '../utils/fonts';
import { GoogleAnalytics } from '@next/third-parties/google';
import '../styles/globals.scss';
import '../styles/print.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      </div>
    </>
  );
}

export default MyApp;
