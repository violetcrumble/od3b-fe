import Image from 'next/image';
import styles from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <div className={styles['about-card']}>
      <Image src="/bonnie-mellott-about.jpg" alt="Bonnie Mellott" width={90} height={90} className={styles.photo} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>The lady in the basement</p>
        <h2 className={styles.heading}>Hi, I&apos;m Bonnie</h2>
        <p>
          Since 2021, I&apos;ve been testing cocktail recipes and THC drinks from my home bar,{' '}
          <a href="https://www.youtube.com/@CocktailUnderground" target="_blank" rel="noopener noreferrer">
            camera rolling the whole time
          </a>{' '}
          — everything here is something I&apos;ve actually made and tried myself.
        </p>
      </div>
    </div>
  );
}
