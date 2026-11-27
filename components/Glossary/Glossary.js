import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownLinkComponents from '../../utils/markdownLinkComponents';
import { sortGlossaryTerms } from '../../utils/glossary';
import styles from './Glossary.module.scss';

// A term is its definition, then whatever labeled rows it was given in Strapi.
function TermEntry({ term }) {
  const details = (term.details || []).filter((detail) => detail.label?.trim() && detail.text?.trim());

  return (
    <section className={styles.term}>
      <h3 id={term.anchor}>{term.term}</h3>
      <Markdown components={markdownLinkComponents} remarkPlugins={[remarkGfm]}>
        {term.definition}
      </Markdown>
      {details.length > 0 && (
        <dl>
          {details.map((detail) => (
            <div key={detail.label} className={styles.row}>
              <dt>{detail.label}</dt>
              <dd>
                <Markdown components={markdownLinkComponents} remarkPlugins={[remarkGfm]}>
                  {detail.text}
                </Markdown>
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

// Everything a [[glossary handle]] marker stands for: a jump list, then the
// terms, A to Z.
export default function Glossary({ terms }) {
  const sorted = sortGlossaryTerms(terms);
  if (!sorted.length) return null;

  return (
    <div className={styles.glossary}>
      <nav className={styles['jump-list']} aria-labelledby="glossary-jump-title">
        <p id="glossary-jump-title" className={styles['jump-title']}>
          Jump to a term
        </p>
        <ul>
          {sorted.map((term) => (
            <li key={term.anchor}>
              <a href={`#${term.anchor}`}>{term.term}</a>
            </li>
          ))}
        </ul>
      </nav>

      {sorted.map((term) => (
        <TermEntry key={term.anchor} term={term} />
      ))}
    </div>
  );
}
