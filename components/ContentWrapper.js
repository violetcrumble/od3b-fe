import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function ContentWrapper({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
