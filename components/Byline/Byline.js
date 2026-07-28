import Image from 'next/image';
import styles from './Byline.module.scss';

export default function Byline({ authorName, date, showPhoto = true }) {
  const formattedDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <p className={styles['byline']}>
      {showPhoto && <Image src="/bonnie-mellott-about.jpg" alt={authorName} width={36} height={36} />}
      <span className={styles['author']}>{authorName}</span> | {formattedDate}
    </p>
  );
}
