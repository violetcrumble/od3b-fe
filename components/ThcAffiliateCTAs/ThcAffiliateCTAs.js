import AffiliateCard from '../AffiliateCard/AffiliateCard';
import styles from './ThcAffiliateCTAs.module.scss';

const AFFILIATES = [
  {
    name: 'Grind with Gratitude',
    blurb: 'THC-infused citrus spirit — zero proof, zero hangover.',
    baseUrl: 'https://grindwithgratitude.com/collections?ref=cocktailunderground',
    cta: 'Shop Grind with Gratitude',
    photoUrl:
      'https://res.cloudinary.com/onedrinkthreebars/image/upload/w_150,q_auto,f_auto/v1784118526/grind_bottle_tight_crop_v2_b19d064f1d.jpg',
  },
  {
    name: 'Crescent Canna',
    blurb: 'The Ellora THC spirit and Crescent 9 THC seltzers.',
    baseUrl: 'https://www.crescentcanna.com/?sld=cocktailunderground',
    cta: 'Shop Crescent Canna',
    photoUrl:
      'https://res.cloudinary.com/onedrinkthreebars/image/upload/w_150,q_auto,f_auto/v1784118527/ellora_bottle_tight_crop_v2_dc99494846.png',
  },
];

export default function ThcAffiliateCTAs({ campaign }) {
  return (
    <div className={styles['thc-ctas']}>
      {AFFILIATES.map((affiliate) => (
        <AffiliateCard
          key={affiliate.name}
          name={affiliate.name}
          photoUrl={affiliate.photoUrl}
          buyUrl={affiliate.baseUrl}
          buyLabel={affiliate.cta}
          medium="blog_sidebar_cta"
          campaign={campaign}
          content={affiliate.name.toLowerCase().replace(/\s+/g, '_')}
        >
          <p className={styles.blurb}>{affiliate.blurb}</p>
        </AffiliateCard>
      ))}
    </div>
  );
}
