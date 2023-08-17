import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";

export default function Home() {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>At One Drink Three Bars, we're dedicated to empowering people to create excellent craft cocktails at home, and to discover the best bars. Our goal is to bridge the gap between ordinary and extraordinary beverages, all while fostering an inclusive and unpretentious approach. We believe that everyone can appreciate the art of crafting great cocktails. Join us on this journey to raise your cocktail game!</p>
        
      </main>
    </ContentWrapper>
  );
}
