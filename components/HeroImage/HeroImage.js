import { getImageProps } from 'next/image';
import Link from 'next/link';
import trackEvent from '../../utils/analytics';
import styles from './HeroImage.module.scss';
import cloudinaryImageLoader from '../../image-loader';

const heroes = {
  default: {
    image:
      'https://res.cloudinary.com/onedrinkthreebars/image/upload/v1789734081/homepage_hero_ranch_water_14b5b993b5.jpg',
    alt: 'Ranch Water Cocktail',
    heading: 'Empowering you to create craft cocktails at home',
    cta: {
      key: 'youtube',
      label: 'Watch Our YouTube Videos',
      href: 'https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ',
      external: true,
    },
  },
  halloween: {
    image:
      'https://res.cloudinary.com/onedrinkthreebars/image/upload/v1789920286/homepage_hero_halloween_01a9bc1af5.jpg',
    alt: 'Halloween rum cocktail in a skull glass',
    heading: 'Halloween cocktails from the basement',
    cta: { key: 'halloween', label: 'Halloween Cocktails', href: '/blog/halloween-cocktails' },
  },
};

// Switch back to 'default' after Halloween.
const activeHero = 'halloween';
const hero = heroes[activeHero];
const heroBanner = hero.image;

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
    <div className={`${styles.hero} ${styles[activeHero] || ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...heroProps}
        fetchpriority="high"
        srcSet={`${heroProps.srcSet}, ${heroFull} 1600w`}
        src={heroFull}
        alt={hero.alt}
      />

      <div className={styles.heroContent}>
        <h1>{hero.heading}</h1>
        <div className={styles['hero-buttons']}>
          <Link
            href="/thc-drinks/discounts"
            className={styles['thc-button']}
            onClick={() => trackEvent('hero_cta_click', { cta: 'thc_discounts' })}
          >
            THC Discount Codes
          </Link>
          <Link
            href={hero.cta.href}
            {...(hero.cta.external && { target: '_blank', rel: 'noopener noreferrer' })}
            className={styles['youtube-button']}
            onClick={() => trackEvent('hero_cta_click', { cta: hero.cta.key })}
          >
            {hero.cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
