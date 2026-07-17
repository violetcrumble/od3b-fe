import Image from 'next/image';
import ReviewRatingBadge from '../../Review/ReviewRatingBadge/ReviewRatingBadge';
import styles from './ListingCard.module.scss';

const DEFAULT_SIZES = '(max-width: 600px) 100vw, (max-width: 900px) 48vw, 29vw';

export default function ListingCard({ title, authorName, date, imageUrl, imageCaption, snippet, rating, sizes }) {
  const formattedDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <div className={styles['listing-card']}>
      <div className="byline-date">
        <h3>{title}</h3>
        <p className="text-black">
          {authorName} | {formattedDate}
        </p>
      </div>

      {rating != null && <ReviewRatingBadge rating={rating} />}

      {imageUrl ? (
        <div className="imageWrapper">
          <div className="imageWrapper">
            <Image src={imageUrl} alt={imageCaption || title} fill sizes={sizes || DEFAULT_SIZES} />
          </div>
        </div>
      ) : (
        <div className="imageWrapper">
          <Image src="/pic-not-available.gif" alt="Image not Available" fill sizes={sizes || DEFAULT_SIZES} />
        </div>
      )}

      <div className="text-snippet">
        <p className="text-black">
          {snippet} <u className="text-brand-teal">Read More...</u>
        </p>
      </div>
    </div>
  );
}
