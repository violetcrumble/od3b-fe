import { pickAnchor } from '../../utils/roundup';
import styles from './Roundup.module.scss';

// The summary box for a roundup post: one row per pick, each jumping down to its card.
export default function QuickPicks({ picks }) {
  return (
    <nav className={styles['quick-picks']} aria-labelledby="quick-picks-title">
      <p id="quick-picks-title" className={styles['quick-picks-title']}>
        Quick picks
      </p>
      <ol>
        {picks.map((pick, i) => (
          <li key={pickAnchor(i + 1)}>
            <a href={`#${pickAnchor(i + 1)}`}>{pick.name}</a>
            {(pick.label || pick.priceNote) && (
              <span className={styles['quick-picks-note']}>
                : {[pick.label, pick.priceNote].filter(Boolean).join(', ')}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
