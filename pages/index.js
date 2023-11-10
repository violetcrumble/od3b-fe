import Head from 'next/head';
import ContentWrapper from '../components/ContentWrapper';
import HeroImage from '../components/HeroImage/HeroImage';
import { HomeStyles } from './index.styled';
import { ContentWrapperConstrainedStyles } from '../components/ContentWrapperConstrained.styled';
import Link from 'next/link';

export default function Home() {
  return (
    <ContentWrapper>
      <Head>
        <title>One Drink Three Bars</title>
        <meta name="description" content="One Drink Three Bars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeStyles>

        <div className="hero-wrapper">
        <HeroImage />
          </div>
          

        <ContentWrapperConstrainedStyles>
        <div className="offerings">

          <div><h3>Full Episodes</h3>
            <p>We visit 3 bars and order the same drink. Results may vary!</p>
            <Link href="https://www.youtube.com/watch?v=D-GbyFvaabc&list=PLJxZHY_2ov3frKlUISWNKzvW85xtdhxvH" target="_blank">Watch Full Episodes</Link>
            </div>

            <div><h3>Cocktail Recipe Videos</h3>
            <p>Want to learn how to make awesome cocktails at home? Check out our recipe videos!</p>
            <Link href="https://www.youtube.com/@OneDrinkThreeBars/videos" target="_blank">View Cocktail Recipe Videos</Link>
            </div>

          <div><h3>OD3Bs Shorts</h3>
            <p>Just need to know how to make a drink? Have the attention span of a gnat? Check out our YouTube shorts!</p>
            <Link href="https://www.youtube.com/@OneDrinkThreeBars/shorts" target="_blank">Cocktail Recipe Shorts</Link>
            </div>

          
        </div>
        </ContentWrapperConstrainedStyles>

      </HomeStyles>
    </ContentWrapper>
  );
}
