import Image from 'next/image';
import affiliateLink from '../../utils/affiliateLink';
import { SALE_CODE, isCrescentPartner, saleHref, useSaleStage } from '../../utils/crescentSale';
import styles from './ThcAffiliateCTAs.module.scss';

export default function ThcAffiliateCTAs({ affiliates, campaign }) {
  // Crescent Canna's buy one get one: while it runs, the Crescent card carries
  // the sale line and code, and its button goes to the campaign link.
  const saleStage = useSaleStage();

  if (!affiliates?.length) return null;

  return (
    <div className={styles['thc-ctas']}>
      {affiliates.map((affiliate) => {
        const onSale = Boolean(saleStage) && isCrescentPartner(affiliate);
        return (
          <div key={affiliate.name} className={styles['thc-cta-box']}>
            <div className={styles['thc-cta-top']}>
              <div className={styles['thc-cta-text']}>
                <h3 className="text-brand-teal">{affiliate.name}</h3>
                <p>{affiliate.blurb}</p>
                {onSale && (
                  <p className={styles.sale}>
                    {saleStage === 'last_day'
                      ? 'Ends tonight: buy one, get one free.'
                      : 'Buy one, get one free through Nov 30.'}{' '}
                    Code <span className={styles.code}>{SALE_CODE}</span>
                  </p>
                )}
              </div>
              {affiliate.photoUrl && (
                <div className={styles['thc-cta-photo']}>
                  <Image src={affiliate.photoUrl} alt={affiliate.name} fill sizes="104px" />
                </div>
              )}
            </div>
            <a
              href={
                onSale
                  ? saleHref('sidebar_bogo', campaign)
                  : affiliateLink(affiliate.baseUrl, {
                      medium: 'blog_sidebar_cta',
                      campaign,
                      content: affiliate.name.toLowerCase().replace(/\s+/g, '_'),
                    })
              }
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              {onSale ? 'Shop the sale' : affiliate.cta}
            </a>
          </div>
        );
      })}
    </div>
  );
}
