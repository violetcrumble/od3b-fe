import Image from 'next/image';
import ReviewRatingBadge from '../../ReviewRatingBadge/ReviewRatingBadge';
import styles from './ReviewListingCard.module.scss';

export default function ReviewListingCard(props) {
  const formattedDate = new Date(props.review.attributes.reviewDate).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <div className={styles['review-listing-card']}>
      <div className="byline-date">
        <h3>{props.review.attributes.title}</h3>
        <p className="text-black">
          {props.review.attributes.review_authors_connection.data[0]?.attributes.AuthorName} | {formattedDate}
        </p>
      </div>

      <ReviewRatingBadge rating={props.review.attributes.rating} />

      {props.review.attributes.listingCardImage?.data &&
      props.review.attributes.listingCardImage?.data.attributes.url ? (
        <div className="imageWrapper">
          <div className="imageWrapper">
            <Image
              src={props.review.attributes.listingCardImage?.data.attributes.url}
              alt={props.review.attributes.listingCardImage?.data.attributes.caption || props.review.attributes.title}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 48vw, 29vw"
            />
          </div>
        </div>
      ) : (
        <div className="imageWrapper">
          <Image
            src="/pic-not-available.gif"
            alt="Image not Available"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 48vw, 29vw"
          />
        </div>
      )}

      <div className="text-snippet">
        <p className="text-black">
          {props.review.attributes.previewSnippet} <u className="text-brand-teal">Read More...</u>
        </p>
      </div>
    </div>
  );
}
