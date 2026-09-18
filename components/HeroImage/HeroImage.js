import { getImageProps } from 'next/image';
import Link from 'next/link';
import trackEvent from '../../utils/analytics';
import styles from './HeroImage.module.scss';
import cloudinaryImageLoader from '../../image-loader';

const heroBanner =
  'https://res.cloudinary.com/onedrinkthreebars/image/upload/v1789734081/homepage_hero_ranch_water_14b5b993b5.jpg';

// deviceSizes stops at 1200; the hero is the one image that needs its full 1600.
const heroFull = cloudinaryImageLoader({ src: heroBanner, width: 1600 });

export default function HeroImage() {
  const { props: heroProps } = getImageProps({
    src: heroBanner,
    alt: '',
    fill: true,
    loading: 'eager',
    sizes: '100vw',
    className: styles.heroImg,
  });

  return (
    <div className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...heroProps}
        fetchpriority="high"
        srcSet={`${heroProps.srcSet}, ${heroFull} 1600w`}
        src={heroFull}
        alt="Ranch Water Cocktail"
      />

      <div className={styles.heroContent}>
        <h1>Empowering you to create craft cocktails at home</h1>
        <div className={styles['hero-buttons']}>
          <Link
            href="/thc-drinks/discounts"
            className={styles['thc-button']}
            onClick={() => trackEvent('hero_cta_click', { cta: 'thc_discounts' })}
          >
            THC Discount Codes
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ"
            target="_blank"
            className={styles['youtube-button']}
            onClick={() => trackEvent('hero_cta_click', { cta: 'youtube' })}
          >
            Watch Our YouTube Videos
          </Link>
        </div>
      </div>
    </div>
  );
}
