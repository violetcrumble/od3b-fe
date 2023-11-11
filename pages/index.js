import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';
import HeroImage from '../components/HeroImage/HeroImage';
import HomePage from '../components/HomePage/Home';



export default function Home() {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
      
      
    </ContentWrapper>
  );
}
