import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';

export default function Home() {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          At One Drink Three Bars, we're dedicated to empowering people to create excellent craft cocktails at home, and
          to discover the best bars. Our goal is to bridge the gap between ordinary and extraordinary beverages, all
          while fostering an inclusive and unpretentious approach. We believe that everyone can appreciate the art of
          crafting great cocktails. Join us on this journey to raise your cocktail game!
        </p>

        <h3>Full Episodes</h3>
        <p>We visit 3 bars and order the same drink. Results may vary!</p>

        <h3>OD3Bs Shorts</h3>
        <p>Just need to know how to make a drink? Have the attention span of a gnat? Check out our YouTube shorts!</p>

        <h3>Cocktail Recipe Videos</h3>
        <p>Want to learn how to make awesome cocktails at home? Check out our recipe videos!</p>
      </main>
    </ContentWrapper>
  );
}
