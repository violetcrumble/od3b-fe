import Image from 'next/image';
import styles from './Byline.module.scss';

const formatDate = (value) =>
  new Date(value).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  });

export default function Byline({ authorName, date, updatedDate, showPhoto = true }) {
  const formattedDate = formatDate(date);
  // Compare the formatted strings so a same-day edit doesn't render "July 28 · Updated July 28".
  const formattedUpdated = updatedDate ? formatDate(updatedDate) : null;
  const showUpdated = formattedUpdated && formattedUpdated !== formattedDate;

  return (
    <p className={styles['byline']}>
      {showPhoto && <Image src="/bonnie-mellott-about.jpg" alt={authorName} width={36} height={36} />}
      <span className={styles['author']}>{authorName}</span> | {formattedDate}
      {showUpdated && <span className={styles['updated']}>Updated {formattedUpdated}</span>}
    </p>
  );
}
