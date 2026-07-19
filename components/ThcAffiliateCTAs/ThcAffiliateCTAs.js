import Image from 'next/image';
import affiliateLink from '../../utils/affiliateLink';
import styles from './ThcAffiliateCTAs.module.scss';

export default function ThcAffiliateCTAs({ affiliates, campaign }) {
  if (!affiliates?.length) return null;

  return (
    <div className={styles['thc-ctas']}>
      {affiliates.map((affiliate) => (
        <div key={affiliate.name} className={styles['thc-cta-box']}>
          <div className={styles['thc-cta-top']}>
            <div className={styles['thc-cta-text']}>
              <h3 className="text-brand-teal">{affiliate.name}</h3>
              <p>{affiliate.blurb}</p>
            </div>
            {affiliate.photoUrl && (
              <div className={styles['thc-cta-photo']}>
                <Image src={affiliate.photoUrl} alt={affiliate.name} fill sizes="104px" />
              </div>
            )}
          </div>
          <a
            href={affiliateLink(affiliate.baseUrl, {
              medium: 'blog_sidebar_cta',
              campaign,
              content: affiliate.name.toLowerCase().replace(/\s+/g, '_'),
            })}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            {affiliate.cta}
          </a>
        </div>
      ))}
    </div>
  );
}
