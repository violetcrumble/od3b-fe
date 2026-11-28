import styles from './Callout.module.scss';

export const CALLOUT_VARIANTS = ['orange', 'purple', 'seafoam', 'night'];

// source is the film or show a character's line comes from; it shows in italics after the name.
export default function Callout({ name, source, quote, variant = 'orange' }) {
  if (!quote) return null;

  const variantClass = styles[variant] || styles.orange;

  return (
    <aside className={`${styles.callout} ${variantClass}`} aria-label="Quote">
      <span className={styles.skull} aria-hidden="true" />
      <figure className={styles.content}>
        <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
        {name && (
          <figcaption className={styles.name}>
            <span aria-hidden="true">&mdash;</span>
            {name}
            {source && (
              <>
                , <cite className={styles.source}>{source}</cite>
              </>
            )}
          </figcaption>
        )}
      </figure>
    </aside>
  );
}
