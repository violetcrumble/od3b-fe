import { useState } from 'react';
import { SALE_CODE, saleHref, useSaleStage } from '../../utils/crescentSale';
import styles from './CrescentSaleBox.module.scss';

// Shows on pages that use Ellora or Crescent 9 while Crescent Canna's buy one
// get one runs, and renders nothing the rest of the time. The dates live in
// utils/crescentSale.js and are checked in the browser, so the box appears and
// disappears without a rebuild.
// slug names the page in the Awin clickref (salebox_<slug>). note replaces the
// one-line description on pages that aren't about a Crescent product.
export default function CrescentSaleBox({ slug, note }) {
  const stage = useSaleStage();
  const [copied, setCopied] = useState(false);

  if (!stage) return null;

  const lastDay = stage === 'last_day';

  // Says "Copied!" only once the browser has really copied it. If it refuses,
  // the code is still on screen to select by hand.
  function copyCode() {
    navigator.clipboard
      .writeText(SALE_CODE)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  }

  return (
    <aside className={styles['sale-box']} aria-label="Crescent Canna sale">
      <div className={styles.text}>
        <p className={styles.headline}>
          {lastDay ? 'Ends tonight: buy one, get one free' : 'Buy one, get one free through Monday, Nov 30'}
        </p>
        <p>
          {note || 'Crescent Canna\u2019s sale covers Ellora and the Crescent 9 seltzers. Use this code at checkout.'}
        </p>
      </div>
      <div className={styles.actions}>
        <div className={styles['code-row']}>
          <span className={styles.code}>{SALE_CODE}</span>
          <button type="button" className={styles['copy-btn']} onClick={copyCode}>
            {copied ? 'Copied!' : 'Copy code'}
          </button>
        </div>
        {/* rel="sponsored" hands the click to utils/trackAffiliateClicks.js. */}
        <a
          className={styles['cta-link']}
          href={saleHref('salebox', slug)}
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          Shop the sale
        </a>
      </div>
    </aside>
  );
}
