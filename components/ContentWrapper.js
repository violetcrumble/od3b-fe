import Head from 'next/head';
import BanCountdownBar from './BanCountdownBar/BanCountdownBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// thcPage shows the THC ban bar on a page whose URL isn't under /thc-drinks.
export default function ContentWrapper({ children, thcPage = false }) {
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

      <Footer />
    </>
  );
}
