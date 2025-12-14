import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';

const URL = process.env.STRAPIBASEURL;

export default function BlogListing({ blogPosts }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Cocktail Blog Posts and Cocktail Articles</title>
        <meta
          name="description"
          content="Cocktail Underground - Visit the best bars and find the best cocktails with Cocktail Underground"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Cocktail Underground - Cocktail Blog Posts and Cocktail Articles" />
        <meta
          property="og:description"
          content="Cocktail Underground - Visit the best bars and find the best cocktails with Cocktail Underground"
        />
      </Head>

      <main className="constrained-content">
        <h1 className="text-brand-purple">Vlogging Equipment</h1>

        <ul>
          <li>
            <a href="https://amzn.to/48Y63xG" target="_blank" rel="noopener noreferrer">
              MOUNTDOG Softbox Lighting Kit, Photography Studio Light
            </a>
          </li>
          <li>
            <a href="https://amzn.to/497ukCB" target="_blank" rel="noopener noreferrer">
              COMICA VM30 Wireless Shotgun Microphone for Camera
            </a>
          </li>
          <li>
            <a href="https://amzn.to/4ahDwW2" target="_blank" rel="noopener noreferrer">
              GLEAM Microphone Stand for Light Microphone (less than 1 LB)
            </a>
          </li>
          <li>
            <a href="https://amzn.to/49bJk2f" target="_blank" rel="noopener noreferrer">
              NEEWER X12 14 inch Aluminum Alloy Teleprompter for iPad/Tablet/Smartphone/DSLR Cameras
            </a>
          </li>
          <li>
            <a href="https://amzn.to/4pW4tUp" target="_blank" rel="noopener noreferrer">
              Satechi Bluetooth Remote Control - R2 (for controlling teleprompter)
            </a>
          </li>
          <li>
            <a href="https://amzn.to/48CaG1o" target="_blank" rel="noopener noreferrer">
              Chuangdi 2 Sets Acrylic Display Risers
            </a>
          </li>
          <li>
            <a href="https://amzn.to/4rVN5jN" target="_blank" rel="noopener noreferrer">
              Sony ZV-E10 Mirrorless Camera
            </a>
          </li>
        </ul>
      </main>
    </ContentWrapper>
  );
}
