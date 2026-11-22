import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownLinkComponents from '../../utils/markdownLinkComponents';
import cloudinaryOptimize from '../../utils/cloudinaryOptimize';
import { AFFILIATE_LINK_PATTERN } from '../../utils/affiliateLink';
import { reviewHref } from '../../utils/reviewSections';
import { pickAnchor } from '../../utils/roundup';
import styles from './Roundup.module.scss';

export default function PickCard({ number, pick }) {
  const photoSrc = cloudinaryOptimize(pick.photo?.url, 500) || pick.photoUrl;
  const isAffiliate = AFFILIATE_LINK_PATTERN.test(pick.link || '');

  return (
    <section id={pickAnchor(number)} className={styles['pick-card']}>
      {photoSrc && (
        <div className={styles['pick-photo']}>
          <img
            src={photoSrc}
            alt={pick.photoAlt || pick.photo?.alternativeText || pick.name}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className={styles['pick-body']}>
        {pick.label && <p className={styles['pick-label']}>{pick.label}</p>}
        <h2>
          {number}. {pick.name}
        </h2>
        {pick.priceNote && <p className={styles['pick-price']}>{pick.priceNote}</p>}
        {pick.writeUp && (
          <Markdown components={markdownLinkComponents} remarkPlugins={[remarkGfm]}>
            {pick.writeUp}
          </Markdown>
        )}
        <div className={styles['pick-buttons']}>
          <a
            className={styles['pick-buy']}
            href={pick.link}
            target="_blank"
            rel={isAffiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
          >
            Purchase <span className={styles['hidden-name']}>{pick.name}</span>
          </a>
          {pick.review?.reviewUrlSlug && (
            <Link className={styles['pick-review']} href={reviewHref(pick.review)}>
              Read my review
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
