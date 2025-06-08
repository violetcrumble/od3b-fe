import Image from 'next/image';
import styles from './BlogListingCard.module.scss';

export default function BlogListingCard(props) {
  const formattedDate = new Date(props.blogPost.attributes.Date).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });

  return (
    <div className={styles['blog-listing-card']}>
      <div className="byline-date">
        <h5>{props.blogPost.attributes.Title}</h5>
        <p className="text-black">
          {props.blogPost.attributes.blog_authors.data[0].attributes.AuthorName} | {formattedDate}
        </p>
      </div>

      {props.blogPost.attributes.ListingCardImage.data &&
      props.blogPost.attributes.ListingCardImage.data.attributes.url ? (
        <div className={styles.imageWrapper}>
          <Image
            src={props.blogPost.attributes.ListingCardImage.data.attributes.url}
            alt={props.blogPost.attributes.ListingCardImage.data.attributes.caption}
            fill
          />
        </div>
      ) : (
        <div className={styles.imageWrapper}>
          <Image src="/pic-not-available.gif" alt="Image not Available" fill />
        </div>
      )}

      <div className="text-snippet">
        <p className="text-black">
          {props.blogPost.attributes.TextPreviewSnippet} <u className="text-brand-teal">Read More...</u>
        </p>
      </div>
    </div>
  );
}
