import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroImage.module.scss';
import heroBanner from '../../public/hero5.jpg';

export default function HeroImage() {
  return (
    <div className={styles.hero}>
      <Image priority src={heroBanner} fill sizes="100vw" className={styles.heroImg} alt="Ranch Water Cocktail" />

      <div className={styles.heroContent}>
        <h3>Empowering you to create craft cocktails at home</h3>
        <Link
          href="https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ"
          target="_blank"
          className={styles['youtube-button']}
        >
          Watch Our YouTube Videos
        </Link>
      </div>
    </div>
  );
}
