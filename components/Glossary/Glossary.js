import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownLinkComponents from '../../utils/markdownLinkComponents';
import { sortGlossaryTerms } from '../../utils/glossary';
import styles from './Glossary.module.scss';

// The small line under a term: when it was last checked and where its facts
// come from. Same wording as the state entries on the legal states page.
function SourceLine({ sources, lastReviewed }) {
  if (!sources.length && !lastReviewed) return null;

  return (
    <p className={styles['source-line']}>
      {lastReviewed && `Last reviewed ${lastReviewed}.`}
      {sources.length > 0 && (
        <>
          {lastReviewed && ' '}
          Source{sources.length > 1 ? 's' : ''}:{' '}
          {sources.map((source, index) => (
            <span key={source.url}>
              {index > 0 && ', '}
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </span>
          ))}
        </>
      )}
    </p>
  );
}

// A term is its definition, then whatever labeled rows it was given in Strapi,
// then its sources.
function TermEntry({ term, Heading }) {
  const details = (term.details || []).filter((detail) => detail.label?.trim() && detail.text?.trim());
  const sources = (term.sources || []).filter((source) => source.label?.trim() && source.url?.trim());

  return (
    <section className={styles.term}>
      <Heading id={term.anchor} className={styles['term-heading']}>
        {term.term}
      </Heading>
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
      <SourceLine sources={sources} lastReviewed={term.lastReviewed} />
    </section>
  );
}

// A glossary's terms: a jump list, then the terms, A to Z. Inside a blog post
// the terms are h3s, since they sit under the post's own h2s. On a glossary
// page nothing sits above them, so that page asks for h2s.
export default function Glossary({ terms, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
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
        <TermEntry key={term.anchor} term={term} Heading={Heading} />
      ))}
    </div>
  );
}
