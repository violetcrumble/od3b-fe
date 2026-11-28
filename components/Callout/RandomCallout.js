import { useSyncExternalStore } from 'react';
import Callout, { CALLOUT_VARIANTS } from './Callout';
import { pathNumber, quotesForTag } from './quotes';
import styles from './Callout.module.scss';

// One random number per page load, made in the browser only. The server and
// the first browser pass both see null and render an empty band of the same
// height, so the built page and the browser agree and nothing jumps when the
// quote fills in.
let seed = null;
const subscribe = () => () => {};
const getSeed = () => {
  if (seed === null) seed = Math.floor(Math.random() * 1000000);
  return seed;
};
const getServerSeed = () => null;

// Shows a random quote with the given tag, in a random color version.
export default function RandomCallout({ tag, path }) {
  const loadSeed = useSyncExternalStore(subscribe, getSeed, getServerSeed);
  const matches = quotesForTag(tag);

  if (matches.length === 0) return null;
  if (loadSeed === null) return <div className={styles.placeholder} aria-hidden="true" />;

  const pick = loadSeed + pathNumber(path);
  const { name, source, quote } = matches[pick % matches.length];
  // Divided first so the color doesn't move in step with the quote.
  const variant = CALLOUT_VARIANTS[Math.floor(pick / matches.length) % CALLOUT_VARIANTS.length];

  return <Callout name={name} source={source} quote={quote} variant={variant} />;
}
