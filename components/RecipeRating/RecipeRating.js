import { useEffect, useRef, useState } from 'react';
import styles from './RecipeRating.module.scss';

const GRACE_MS = 8000; // window to change a just-submitted rating (misclick insurance)

export default function RecipeRating({ slug, initialCount, initialTotal }) {
  const [count, setCount] = useState(initialCount || 0);
  const [total, setTotal] = useState(initialTotal || 0);
  const [hovered, setHovered] = useState(0);
  const [myRating, setMyRating] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | loading | grace | locked | already | rated | error
  const graceTimer = useRef(null);

  useEffect(() => () => clearTimeout(graceTimer.current), []);

  // localStorage is only readable after hydration; 'rated' restores a past
  // visit's vote so the widget doesn't pretend the visitor never rated
  useEffect(() => {
    const stored = parseInt(window.localStorage.getItem(`recipe-rating-${slug}`), 10);
    if (stored >= 1 && stored <= 5) {
      setMyRating(stored);
      setStatus('rated');
    }
  }, [slug]);

  const average = count > 0 ? total / count : 0;

  async function rate(value) {
    if (status === 'loading' || status === 'locked') return;
    if (status === 'grace' && value === myRating) return;

    const storageKey = `recipe-rating-${slug}`;
    const isChange = status === 'grace';

    if (!isChange && typeof window !== 'undefined' && window.localStorage.getItem(storageKey)) {
      setStatus('already');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/rate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ slug, rating: value, ...(isChange && { previousRating: myRating }) }),
      });
      if (!res.ok) {
        setStatus(isChange ? 'grace' : 'error');
        return;
      }
      const data = await res.json();
      setCount(data.ratingCount);
      setTotal(data.ratingTotal);
      setMyRating(value);
      window.localStorage.setItem(storageKey, String(value));
      setStatus('grace');
      clearTimeout(graceTimer.current);
      graceTimer.current = setTimeout(() => setStatus('locked'), GRACE_MS);
    } catch {
      setStatus(isChange ? 'grace' : 'error');
    }
  }

  return (
    <div className={styles['recipe-rating']}>
      <div className={styles.stars} role="group" aria-label="Rate this recipe">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            className={`${styles.star} ${
              value <= (hovered || myRating)
                ? styles.filled
                : !hovered && !myRating && value <= Math.round(average)
                  ? styles['filled-average']
                  : ''
            }`}
            onClick={() => rate(value)}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(0)}
            disabled={status === 'loading' || status === 'locked' || status === 'rated'}
            aria-label={`Rate ${value} star${value === 1 ? '' : 's'}`}
          >
            ★
          </button>
        ))}
      </div>

      <span className={styles.summary}>
        {status === 'grace' && 'Thanks for rating! Tap a different star to change it.'}
        {status === 'locked' && 'Thanks for rating!'}
        {status === 'already' && 'You already rated this recipe.'}
        {status === 'rated' && `You rated this recipe ${myRating} star${myRating === 1 ? '' : 's'}.`}
        {status === 'error' && 'Something went wrong. Please try again.'}
        {(status === 'idle' || status === 'loading') &&
          (count > 0
            ? `${average.toFixed(1)} (${count} rating${count === 1 ? '' : 's'}). Tap a star to rate`
            : 'Be the first to rate this recipe')}
      </span>
    </div>
  );
}
