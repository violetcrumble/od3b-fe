// A Glossary in Strapi shows up two ways. It has its own page at
// /glossary/its-handle (pages/glossary/[handle].js), and a blog post can show
// it too: [[glossary some-handle]] on its own line in the body is replaced by
// every published term in that glossary, A to Z, with a jump list on top.
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

// From the GET_GLOSSARY_HANDLES result: one entry per glossary that has a
// published term, with the date its newest term changed (for the sitemap).
export function glossaryPages(glossaryTerms) {
  const newest = new Map();
  (glossaryTerms || []).forEach((term) => {
    const handle = term.glossary?.handle;
    if (!handle) return;
    if (!newest.has(handle) || term.updatedAt > newest.get(handle)) newest.set(handle, term.updatedAt);
  });
  return [...newest].map(([handle, updatedAt]) => ({ handle, updatedAt }));
}

// schema.org Article for a glossary page: who wrote it and when it last
// changed. The dates are typed in by hand in Strapi, like a blog post's.
export function getGlossaryArticleJsonLd(glossary, pageUrl) {
  const published = glossary.datePublished || undefined;
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'Article',
      headline: glossary.title || glossary.name,
      description: glossary.seoDescription || undefined,
      url: pageUrl,
      datePublished: published,
      dateModified: glossary.lastUpdated || published,
      author: glossary.author ? { '@type': 'Person', name: glossary.author.AuthorName } : undefined,
      about: { '@id': `${pageUrl}#glossary` },
    }),
  };
}
