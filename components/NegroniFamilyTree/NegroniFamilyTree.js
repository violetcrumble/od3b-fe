import styles from './NegroniFamilyTree.module.scss';

// Static PNG of the same tree; served to anyone whose Markdown renderer skips the component.
export const NEGRONI_FAMILY_TREE_SRC_PATTERN = /negroni_family_tree/;

const W = 260;
const COLS = [50, 330, 610, 890];
const centers = COLS.map((x) => x + W / 2);

const NODES = [
  {
    id: 'americano',
    kind: 'classic',
    x: 380,
    y: 110,
    w: 440,
    h: 124,
    year: 'MILAN, 1860s',
    names: ['Americano'],
    sub: 'Campari, sweet vermouth, soda',
    nf: 34,
    sf: 22,
  },
  {
    id: 'phony',
    kind: 'classic',
    x: 20,
    y: 300,
    w: 340,
    h: 116,
    year: 'BOTTLED, ZERO PROOF',
    names: ['Phony Negroni'],
    sub: 'St. Agrestis, no alcohol at all',
    href: 'https://youtube.com/shorts/FlOGI5c6UbA',
    external: true,
  },
  {
    id: 'negroni',
    kind: 'classic',
    x: 380,
    y: 300,
    w: 440,
    h: 124,
    year: 'FLORENCE, 1919',
    names: ['Negroni'],
    sub: 'gin in for the soda',
    nf: 34,
    sf: 22,
    href: '/cocktail-recipes/negroni-cocktail-recipe',
  },
  {
    id: 'old-pal',
    kind: 'classic',
    x: COLS[0],
    y: 530,
    w: W,
    h: 124,
    year: 'PARIS, 1927',
    names: ['Old Pal'],
    sub: 'rye, dry vermouth',
    href: '/cocktail-recipes/old-pal-cocktail-recipe',
  },
  {
    id: 'coffee',
    kind: 'mine',
    x: COLS[1],
    y: 530,
    w: W,
    h: 124,
    year: 'THE BASEMENT',
    names: ['Coffee Negroni'],
    sub: 'Mr Black for vermouth',
    href: '/cocktail-recipes/coffee-negroni',
  },
  {
    id: 'sbagliato',
    kind: 'classic',
    x: COLS[2],
    y: 530,
    w: W,
    h: 124,
    year: 'MILAN, 1972',
    names: ['Sbagliato'],
    sub: 'prosecco for gin',
  },
  {
    id: 'white',
    kind: 'classic',
    x: COLS[3],
    y: 530,
    w: W,
    h: 124,
    year: 'BORDEAUX, 2001',
    names: ['White Negroni'],
    sub: 'Suze + Lillet',
  },
  {
    id: 'thc-sbagliato',
    kind: 'mine',
    x: COLS[2],
    y: 720,
    w: W,
    h: 124,
    year: 'THE BASEMENT',
    names: ['THC Sbagliato'],
    sub: 'Artet for Campari',
    href: '/cocktail-recipes/thc-negroni-sbagliato',
  },
  {
    id: 'purple',
    kind: 'mine',
    x: COLS[3],
    y: 700,
    w: W,
    h: 116,
    year: 'THE BASEMENT',
    names: ['Purple Negroni'],
    sub: 'Empress, Bitter Bianco',
    href: '/cocktail-recipes/purple-negroni',
  },
  {
    id: 'fasterossa',
    kind: 'mine',
    x: COLS[3],
    y: 836,
    w: W,
    h: 140,
    year: 'THE BASEMENT',
    names: ['Lamborgotti', 'Fasterossa'],
    sub: '+ orange soda',
    nf: 26,
    href: '/cocktail-recipes/bitter-bianco-negroni-spritz',
  },
  {
    id: 'cereal',
    kind: 'mine',
    x: COLS[3],
    y: 996,
    w: W,
    h: 116,
    year: 'THE BASEMENT',
    names: ['Cereal Negroni'],
    sub: 'Bam Bam vodka, no gin',
    href: '/cocktail-recipes/cereal-negroni',
  },
];

const LINES = [
  [600, 234, 600, 300],
  [600, 424, 600, 480],
  [centers[0], 480, centers[3], 480],
  ...centers.map((c) => [c, 480, c, 530]),
  [centers[2], 654, centers[2], 720],
  [centers[3], 654, centers[3], 700],
  [centers[3], 816, centers[3], 836],
  [centers[3], 976, centers[3], 996],
];

const DASHED = ['M380 362 H360'];

function Node({ node }) {
  const { x, y, w, h, year, names, sub, nf = 30, sf = 20, kind, href, external } = node;
  const cx = x + w / 2;
  const firstNameY = y + 34 + nf + 4;
  const subY = firstNameY + names.length * (nf + 4) + 2;
  const group = (
    <g className={`${styles.node} ${styles[kind]}`}>
      <rect x={x} y={y} width={w} height={h} rx={18} />
      <text className={styles.year} x={cx} y={y + 34} textAnchor="middle">
        {year}
      </text>
      {names.map((name, i) => (
        <text
          key={name}
          className={styles.name}
          style={{ fontSize: nf }}
          x={cx}
          y={firstNameY + i * (nf + 4)}
          textAnchor="middle"
        >
          {name}
        </text>
      ))}
      <text className={styles.sub} style={{ fontSize: sf }} x={cx} y={subY} textAnchor="middle">
        {sub}
      </text>
    </g>
  );
  if (!href) return group;
  return (
    <a
      href={href}
      className={styles.link}
      aria-label={`${names.join(' ')} recipe`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {group}
    </a>
  );
}

export default function NegroniFamilyTree({ fallbackSrc, alt }) {
  return (
    <span className={styles.tree}>
      <svg className={styles.svg} viewBox="0 0 1200 1130" role="img" aria-labelledby="negroni-family-tree-title">
        <title id="negroni-family-tree-title">{alt || 'The Negroni family tree'}</title>
        <text className={styles.title} x={600} y={70} textAnchor="middle">
          The Negroni family tree
        </text>
        {LINES.map(([x1, y1, x2, y2], i) => (
          <line key={i} className={styles.line} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
        {DASHED.map((d) => (
          <path key={d} className={`${styles.line} ${styles.dash}`} d={d} />
        ))}
        {NODES.map((node) => (
          <Node key={node.id} node={node} />
        ))}
        <g className={styles.legend}>
          <rect className={styles['legend-classic']} x={8} y={1000} width={34} height={34} rx={6} />
          <text x={55} y={1026}>
            classic
          </text>
          <rect className={styles['legend-mine']} x={180} y={1000} width={34} height={34} rx={6} />
          <text x={227} y={1026}>
            one of mine
          </text>
          <line className={`${styles.line} ${styles.dash}`} x1={390} y1={1017} x2={460} y2={1017} />
          <text x={475} y={1026}>
            a cousin, not a child
          </text>
          <text x={8} y={1110}>
            Tap a drink to open its recipe.
          </text>
        </g>
      </svg>
      {fallbackSrc && <img className={styles.fallback} src={fallbackSrc} alt={alt} />}
    </span>
  );
}
