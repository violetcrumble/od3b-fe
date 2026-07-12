import Head from 'next/head';
import ContentWrapper from '../../../components/ContentWrapper';
import styles from '../../../styles/pages/THC.module.scss';

export default function THCMain() {
  return (
    <ContentWrapper>
      <Head>
        <title>THC Drink Recipes and Cannabis Cocktails | Cocktail Underground</title>
        <meta name="description" content="THC Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <h1 className="text-brand-purple">THC Drink Recipes</h1>

        <p>
          These THC drink recipes use hemp-derived seltzers and beverages to recreate the flavor and ritual of cocktails
          without relying on traditional spirits. Each recipe includes the THC dose per serving, flavor notes, and
          guidance for keeping the final drink balanced rather than merely pouring juice on top of a canned seltzer and
          hoping for enlightenment.
        </p>
      </div>
    </ContentWrapper>
  );
}
