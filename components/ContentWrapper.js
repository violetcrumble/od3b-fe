import Head from 'next/head';
import { useRouter } from 'next/router';
import BanCountdownBar, { isThcPath } from './BanCountdownBar/BanCountdownBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RandomCallout from './Callout/RandomCallout';

// thcPage shows the THC ban bar on a page whose URL isn't under /thc-drinks.
// showCallout adds the quote callout above the footer; pages opt in.
// quoteTag picks which quotes it draws from ('alcohol', 'thc', 'na' or 'any');
// left out, THC pages get 'thc' quotes and every other page gets 'alcohol'.
export default function ContentWrapper({ children, thcPage = false, showCallout = false, quoteTag }) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const calloutTag = quoteTag || (thcPage || isThcPath(asPath) ? 'thc' : 'alcohol');

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <BanCountdownBar thcPage={thcPage} />
      <Header />

      <main>{children}</main>

      {showCallout && <RandomCallout tag={calloutTag} path={path} />}
      <Footer />
    </>
  );
}
