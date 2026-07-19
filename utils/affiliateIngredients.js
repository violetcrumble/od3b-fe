import affiliateLink from './affiliateLink';

// Maps partner names to the brand words that identify their products in recipe
// text. Partners not listed here match on their own (lowercased) name.
// NOTE: this keyword matching is a stopgap — the longer-term plan is a proper
// recipe ↔ affiliate-partner relation in Strapi, at which point this file goes
// away and the relation drives both the sidebar CTAs and ingredient links.
const BRAND_KEYWORDS = {
  'Crescent Canna': ['crescent', 'ellora'],
};

function partnerKeywords(partner) {
  return BRAND_KEYWORDS[partner.name] || [partner.name.toLowerCase()];
}

// Picks which partners a recipe page should feature: only the partner(s) whose
// product the recipe actually uses, or every partner when none match (e.g. a
// Willie's Remedy recipe, where we have no affiliate program yet).
export function selectRecipeAffiliates(recipeAttrs, allPartners) {
  const recipeText = `${recipeAttrs.title} ${recipeAttrs.ingredients}`.toLowerCase();
  const matched = allPartners.filter((partner) =>
    partnerKeywords(partner).some((keyword) => recipeText.includes(keyword)),
  );
  return matched.length ? matched : allPartners;
}

// Turns a bare brand mention in an ingredient line into an affiliate link,
// e.g. "2 oz / 60 ml Artet Cannabis Aperitif" links from "Artet" to line end.
// Lines that already contain a manually-authored link are left alone.
export function linkifyAffiliateIngredients(ingredients, affiliates, campaign) {
  return ingredients
    .split('\n')
    .map((line) => {
      if (line.includes('](')) return line;
      for (const partner of affiliates) {
        for (const keyword of partnerKeywords(partner)) {
          const start = line.toLowerCase().indexOf(keyword);
          if (start === -1) continue;
          const parenStart = line.indexOf(' (', start);
          const end = parenStart === -1 ? line.length : parenStart;
          const linkText = line.slice(start, end).trim();
          const url = affiliateLink(partner.baseUrl, {
            medium: 'recipe_inline_link',
            campaign,
            content: partner.name.toLowerCase().replace(/\s+/g, '_'),
          });
          return `${line.slice(0, start)}[${linkText}](${url})${line.slice(start + linkText.length)}`;
        }
      }
      return line;
    })
    .join('\n');
}
