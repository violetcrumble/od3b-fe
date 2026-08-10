import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ContentWrapper from '../components/ContentWrapper';
import styles from '../styles/pages/NotFound.module.scss';

export default function NotFound() {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className={`${styles['not-found']} constrained-content`}>
        <span className={styles['skull-badge']}>
          <Image src="/logo-skull-only.svg" alt="Cocktail Underground skull logo" width="82" height="107" />
        </span>
        <h1>404: This page got 86&apos;d</h1>
        <p>Whatever you were after is off the menu. Maybe it moved, maybe the link had one too many.</p>
        <p>Either way, the bar is still open.</p>
        <div className={styles.links}>
          <Link href="/cocktail-recipes">Cocktail Recipes</Link>
          <Link href="/thc-drinks">THC Drinks</Link>
          <Link href="/">Homepage</Link>
        </div>
      </div>
    </ContentWrapper>
  );
}
