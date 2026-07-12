import Head from 'next/head';
import ContentWrapper from '../../../components/ContentWrapper';
import styles from '../../../styles/pages/THC.module.scss';

export default function THCMain() {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks - Reviews</title>
        <meta name="description" content="THC Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <h1 className="text-brand-purple">THC Reviews</h1>

        <p>reviews placeholder</p>
      </div>
    </ContentWrapper>
  );
}
