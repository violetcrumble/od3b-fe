import Image from 'next/image';
import affiliateLink from '../../utils/affiliateLink';
import styles from './ReviewProductPanel.module.scss';

export default function ReviewProductPanel({
  productName,
  price,
  priceLabel,
  buyUrl,
  buyLabel,
  whereToBuy,
  photoUrl,
  campaign,
}) {
  return (
    <div className={styles['product-panel']}>
      {photoUrl && (
        <div className={styles.photo}>
          <Image src={photoUrl} alt={productName} fill sizes="200px" />
        </div>
      )}
      <h3 className="text-brand-teal">{productName}</h3>
      {(priceLabel || price) && <p className={styles.price}>{priceLabel || `$${price}`}</p>}
      {whereToBuy && <p className={styles['where-to-buy']}>Available at {whereToBuy}</p>}
      <a
        href={affiliateLink(buyUrl, {
          medium: 'review_product_panel',
          campaign,
          content: 'buy_cta',
        })}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buyLabel || 'Buy Now'}
      </a>
    </div>
  );
}
