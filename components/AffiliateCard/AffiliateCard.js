import Image from 'next/image';
import affiliateLink from '../../utils/affiliateLink';
import styles from './AffiliateCard.module.scss';

export default function AffiliateCard({ name, photoUrl, buyUrl, buyLabel, medium, campaign, content, children }) {
  return (
    <div className={styles['affiliate-card']}>
      <div className={styles['affiliate-card-top']}>
        <div className={styles['affiliate-card-text']}>
          <h3 className="text-brand-teal">{name}</h3>
          {children}
        </div>
        {photoUrl && (
          <div className={styles.photo}>
            <Image src={photoUrl} alt={name} fill sizes="90px" />
          </div>
        )}
      </div>
      <a href={affiliateLink(buyUrl, { medium, campaign, content })} target="_blank" rel="noopener noreferrer">
        {buyLabel}
      </a>
    </div>
  );
}
