import styles from './ReviewRatingBadge.module.scss';

export default function ReviewRatingBadge({ rating }) {
  const filled = Math.round(rating);
  const displayRating = rating % 1 === 0 ? rating : rating.toFixed(1);

  return (
    <div className={styles['rating-badge']} role="img" aria-label={`Rated ${displayRating} out of 5`}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span key={value} className={`${styles.star} ${value <= filled ? styles.filled : ''}`}>
            ★
          </span>
        ))}
      </div>
      <span className={styles.score}>{displayRating} / 5</span>
    </div>
  );
}
