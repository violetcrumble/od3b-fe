import styles from './ReviewRatingBadge.module.scss';

export default function ReviewRatingBadge({ rating }) {
  const filled = Math.round(rating);

  return (
    <div className={styles['rating-badge']} role="img" aria-label={`Rated ${rating.toFixed(1)} out of 5`}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span key={value} className={`${styles.star} ${value <= filled ? styles.filled : ''}`}>
            ★
          </span>
        ))}
      </div>
      <span className={styles.score}>{rating.toFixed(1)} / 5</span>
    </div>
  );
}
