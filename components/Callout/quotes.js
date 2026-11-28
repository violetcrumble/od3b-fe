// Quotes for the callout above the footer. Add more as { name, quote, tag }.
// A character's line also takes source: the film or show, shown in italics after the name.
//
// tag says which pages a quote can show on:
//   'alcohol'  cocktail recipes and anything else that isn't a THC page
//   'thc'      THC pages (the pages that get the THC ban bar, plus THC blog posts)
//   'na'       non-alcoholic pages (a page opts in with quoteTag="na" on ContentWrapper)
//
// A page asking for 'any' (the homepage, Friends) draws from alcohol and THC
// quotes together. A page type with no quotes yet shows no callout.
const quotes = [
  {
    // Often credited to George Carlin, but it comes from 1990s chain emails and isn't his.
    name: 'Anonymous',
    quote: 'One tequila, two tequila, three tequila, floor.',
    tag: 'alcohol',
  },
  {
    // The Smart Set, April 1923. Often credited to Hemingway with "more interesting".
    name: 'George Jean Nathan',
    quote: 'I drink to make other people interesting.',
    tag: 'alcohol',
  },
  {
    // The Simpsons, "Homer vs. the Eighteenth Amendment" (season 8).
    name: 'Homer Simpson',
    source: 'The Simpsons',
    quote: 'To alcohol! The cause of, and solution to, all of life’s problems.',
    tag: 'alcohol',
  },
  {
    // Parks and Recreation, "Win, Lose, or Draw" (season 4, 2012).
    name: 'Ron Swanson',
    source: 'Parks and Recreation',
    quote: 'Clear alcohols are for rich women on diets.',
    tag: 'alcohol',
  },
  {
    // Anchorman: The Legend of Ron Burgundy (2004), trimmed from a longer line.
    name: 'Ron Burgundy',
    source: 'Anchorman',
    quote: 'I love scotch. Scotchy, scotch, scotch.',
    tag: 'alcohol',
  },
  {
    // The Big Lebowski (1998), the limo scene.
    name: 'The Dude',
    source: 'The Big Lebowski',
    quote: 'Careful, man, there’s a beverage here!',
    tag: 'alcohol',
  },
  {
    // "Reflections on Ice-Breaking," Hard Lines (1931).
    name: 'Ogden Nash',
    quote: 'Candy is dandy, but liquor is quicker.',
    tag: 'alcohol',
  },
  {
    // Reported secondhand; cited by the International Churchill Society and Oxford Reference.
    name: 'Winston Churchill',
    quote: 'I have taken more out of alcohol than alcohol has taken out of me.',
    tag: 'alcohol',
  },
  {
    // Never Give a Sucker an Even Break (1941).
    name: 'W.C. Fields',
    quote: 'Somebody put too many olives in my martinis last night.',
    tag: 'alcohol',
  },
  {
    // Recorded Library of Congress interview, 1948 (Quote Investigator).
    name: 'H. L. Mencken',
    quote: 'I drink every known alcoholic drink and enjoy ’em all.',
    tag: 'alcohol',
  },
  {
    // Quoted by Bennett Cerf in Try and Stop Me (1944) (Quote Investigator).
    name: 'Dorothy Parker',
    quote: 'One more drink and I’d have been under the host!',
    tag: 'alcohol',
  },
  {
    // CNN interview with Brooke Baldwin, Nov 2014, as reported by The Week.
    name: 'Willie Nelson',
    quote: 'I really believe that the best medicine for stress is pot.',
    tag: 'thc',
  },
  {
    // From the "Dave" sketch on their 1971 debut album.
    name: 'Cheech & Chong',
    quote: 'Dave’s not here.',
    tag: 'thc',
  },
  {
    // GQ, "Willie and the Weed Factory," Aug 2015, on launching Willie's Reserve.
    name: 'Willie Nelson',
    quote: 'I’ve bought a lot of pot in my life, and now I’m selling it back.',
    tag: 'thc',
  },
  {
    // As relayed by Tommy Chong to TIME, Aug 2008.
    name: 'Cheech Marin',
    quote: 'It’s no longer the counterculture. It’s the culture.',
    tag: 'thc',
  },
  {
    // Dazed and Confused (1993), after being told nobody has a joint.
    name: 'Wooderson',
    source: 'Dazed and Confused',
    quote: 'It’d be a lot cooler if you did.',
    tag: 'thc',
  },
  {
    // Dazed and Confused (1993), on George Washington.
    name: 'Slater',
    source: 'Dazed and Confused',
    quote: 'Absolutely George toked weed, are you kiddin’ me, man?',
    tag: 'thc',
  },
  {
    // Fast Times at Ridgemont High (1982).
    name: 'Jeff Spicoli',
    source: 'Fast Times at Ridgemont High',
    quote: 'All I need are some tasty waves, a cool buzz, and I’m fine.',
    tag: 'thc',
  },
  {
    // To Andy Cohen at the 92nd Street Y, June 2013.
    name: 'Martha Stewart',
    quote: 'Of course I know how to roll a joint!',
    tag: 'thc',
  },
  {
    // British GQ interview with Piers Morgan, Dec 2007 issue.
    name: 'Arnold Schwarzenegger',
    quote: 'That is not a drug. It’s a leaf.',
    tag: 'thc',
  },
];

// A number from the page's path, mixed into the random pick so pages differ
// from each other within one visit.
export function pathNumber(path = '') {
  let sum = 0;
  for (let i = 0; i < path.length; i++) {
    sum += path.charCodeAt(i);
  }
  return sum;
}

export function quotesForTag(tag = 'alcohol') {
  if (tag === 'any') return quotes.filter((quote) => quote.tag === 'alcohol' || quote.tag === 'thc');
  return quotes.filter((quote) => quote.tag === tag);
}

// Blog posts have no THC field, so a post counts as THC when its slug says so.
// Left undefined, ContentWrapper decides (the ban bar's posts are THC, the rest alcohol).
export function blogQuoteTag(slug = '') {
  return /thc|hemp|cannabis|willies-remedy/.test(slug) ? 'thc' : undefined;
}

export default quotes;
