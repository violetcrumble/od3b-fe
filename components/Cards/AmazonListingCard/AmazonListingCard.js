import Image from 'next/image';
import styles from './AmazonListingCard.module.scss';

export default function AmazonListingCard(props) {
  return (
    <div className={`${styles['amazon-listing-card']} listing-card`}>
      <div>
        <h6 className={`${styles['product-name']} text-brand-teal`}>{props.productName}</h6>
      </div>

      <div className={`${styles['product-pic']}`}>
        {props.amazonPhotoURL && (
          <Image alt={props.productName} border="0" width="100" height="100" src={props.amazonPhotoURL} />
        )}
        {/* <img src={`https://ir-na.amazon-adsystem.com/e/ir?t=onedrinkthree-20&language=en_US&l=li2&o=1&a=${props.amazonASIN}`} width="1" height="1" border="0" alt="" /> */}
      </div>

      <a href={props.amazonLink} target="_blank" rel="noopener noreferrer">
        Purchase
      </a>
    </div>
  );
}
