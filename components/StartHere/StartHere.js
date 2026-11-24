import Image from 'next/image';
import styles from './StartHere.module.scss';

// The "Start Here" callout on /home-bar-supplies: a compact list of the
// products that have a FeaturedOrder number in Strapi, plus a link to the
// same picks as an Amazon idea list.
export default function StartHere({ products, listUrl }) {
  if (!products?.length) return null;

  return (
    <section id="start-here" className={styles['start-here']}>
      <h2 className="text-brand-purple">Start Here</h2>
      <p>New to making cocktails at home? These are the tools I'd buy first.</p>

      <ul>
        {products.map((product) => (
          <li key={product.documentId}>
            <a href={product.AmazonLink} target="_blank" rel="sponsored noopener noreferrer">
              <span className={styles.thumb}>
                {product.AmazonPhotoURL && <Image alt="" fill sizes="56px" src={product.AmazonPhotoURL} />}
              </span>
              <span>
                {/* Hidden so the link text matches the product cards: "Purchase <name>" in GA4 and for screen readers. */}
                <span className={styles['hidden-label']}>Purchase </span>
                {product.ProductName}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {listUrl && (
        <p className={styles['list-link']}>
          <a href={listUrl} target="_blank" rel="sponsored noopener noreferrer">
            See my Home Bar Essentials list on Amazon
            {/* Arrow-out-of-a-box icon: the usual sign that a link leaves the site. */}
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </p>
      )}
    </section>
  );
}
