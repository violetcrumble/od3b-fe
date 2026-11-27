// Glossary posts: a blog post whose body has [[glossary some-handle]] on its
// own line. The marker is replaced by every published term in that Glossary
// (Strapi), A to Z, with a jump list on top.
const MARKER = /^[ \t]*\[\[\s*glossary\s+([a-z0-9-]+)\s*\]\][ \t]*$/im;
const MARKER_ALL = new RegExp(MARKER.source, 'gim');

// The handle of the glossary a post asks for, or null when it has no marker.
export function glossaryHandle(body) {
  return (body || '').match(MARKER)?.[1].toLowerCase() || null;
}

// Splits one markdown chunk at the first glossary marker. Chunks without the
// marker come back unchanged, so this is safe to run on every blog post.
export function splitGlossaryBody(text) {
  const match = (text || '').match(MARKER);
  if (!match) return [{ type: 'markdown', text }];
  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length).replace(MARKER_ALL, '');
  return [{ type: 'markdown', text: before }, { type: 'glossary' }, { type: 'markdown', text: after }].filter(
    (part) => part.type !== 'markdown' || part.text.trim(),
  );
}

// For JSON-LD articleBody: the marker means nothing outside the page.
export function stripGlossaryMarker(body) {
  return (body || '').replace(MARKER_ALL, '').replace(/\n{3,}/g, '\n\n');
}

// Terms in A to Z order, ignoring capitals.
export function sortGlossaryTerms(terms) {
  return [...(terms || [])].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
}

// Markdown down to plain text, for the schema description.
function plainText(markdown) {
  return String(markdown || '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// schema.org DefinedTermSet, so search engines can read the page as a glossary.
export function getGlossaryJsonLd(terms, pageUrl, fallbackName) {
  const name = terms?.[0]?.glossary?.name || fallbackName;
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'DefinedTermSet',
      '@id': `${pageUrl}#glossary`,
      name,
      url: pageUrl,
      hasDefinedTerm: (terms || []).map((term) => ({
        '@type': 'DefinedTerm',
        name: term.term,
        description: plainText(term.definition),
        url: `${pageUrl}#${term.anchor}`,
        inDefinedTermSet: `${pageUrl}#glossary`,
      })),
    }),
  };
}
