// Roundup posts: a blog post with Picks filled in Strapi. The body places them
// with markers on their own line: [[pick 1]], [[pick 2]], and optionally
// [[quick picks]] for the summary box (it goes at the top when there's no marker).
const MARKER = /^[ \t]*\[\[\s*(pick\s+(\d+)|quick\s+picks)\s*\]\][ \t]*$/gim;

export function pickAnchor(number) {
  return `pick-${number}`;
}

// Splits the body into markdown chunks and pick slots, in reading order.
// Picks the body never places are added after the last chunk so nothing goes missing.
export function splitRoundupBody(body, picks) {
  const text = body || '';
  if (!picks?.length) return [{ type: 'markdown', text }];

  const parts = [];
  const placed = new Set();
  let hasQuickPicks = false;
  let last = 0;

  for (const match of text.matchAll(MARKER)) {
    parts.push({ type: 'markdown', text: text.slice(last, match.index) });
    if (match[2]) {
      const number = Number(match[2]);
      if (picks[number - 1] && !placed.has(number)) {
        parts.push({ type: 'pick', number, pick: picks[number - 1] });
        placed.add(number);
      }
    } else if (!hasQuickPicks) {
      parts.push({ type: 'quickPicks' });
      hasQuickPicks = true;
    }
    last = match.index + match[0].length;
  }
  parts.push({ type: 'markdown', text: text.slice(last) });

  picks.forEach((pick, i) => {
    if (!placed.has(i + 1)) parts.push({ type: 'pick', number: i + 1, pick });
  });
  if (!hasQuickPicks) parts.unshift({ type: 'quickPicks' });

  return parts.filter((part) => part.type !== 'markdown' || part.text.trim());
}

// For JSON-LD articleBody: the markers mean nothing outside the page.
export function stripRoundupMarkers(body) {
  return (body || '').replace(MARKER, '').replace(/\n{3,}/g, '\n\n');
}
