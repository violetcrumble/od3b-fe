// One entry per Amazon product category. slug is the URL segment
// (/home-bar-supplies/<slug>), dbValue matches Strapi's ProductCategory field.
const PRODUCT_CATEGORIES = [
  {
    slug: 'bar-tools',
    dbValues: ['bar_tools'],
    name: 'Bar Tools',
    metaDescription:
      'The shakers, jiggers, strainers, and mixing glasses I actually use on camera. Tested bar tools for building a home cocktail setup that lasts.',
    intro:
      'A good shaker and an accurate jigger will do more for your cocktails than any exotic bottle. These are the tools I reach for in every video.',
  },
  {
    slug: 'glassware',
    dbValues: ['glassware'],
    name: 'Glassware',
    metaDescription:
      'Coupes, rocks glasses, and highballs that make home cocktails feel like bar cocktails. The glassware you see in Cocktail Underground videos.',
    intro:
      'The right glass changes how a drink feels in your hand. These are the coupes, rocks glasses, and highballs you see in my videos.',
  },
  {
    slug: 'ice-molds',
    dbValues: ['ice_molds'],
    name: 'Ice Molds',
    metaDescription:
      'Large cube and sphere ice molds for slow-melting, bar-quality cocktail ice at home. The molds I use for old fashioneds and stirred drinks.',
    intro:
      'Big, slow-melting ice is the cheapest upgrade a home bar can make. These molds turn out the cubes and spheres in my stirred drinks.',
  },
  {
    slug: 'bitters',
    dbValues: ['bitters'],
    name: 'Bitters',
    metaDescription:
      'Cocktail bitters worth owning, from the essentials to the fun stuff. What I keep in rotation for old fashioneds, Manhattans, and experiments.',
    intro:
      'Bitters are the spice rack of the bar. Start with the classics, then branch out. This is what stays in my rotation.',
  },
  {
    slug: 'syrups',
    dbValues: ['syrups'],
    name: 'Syrups',
    metaDescription:
      'Ready-made cocktail syrups that taste like you made them yourself: orgeat, demerara, and more. My picks for when there is no time to simmer.',
    intro: 'I make syrups when I can, but the store-bought ones here have earned a place on my shelf for busy nights.',
  },
  {
    slug: 'garnishes',
    dbValues: ['garnishes'],
    name: 'Garnishes',
    metaDescription:
      'Cocktail cherries, dehydrated citrus, and other garnishes that finish a drink properly. The jars I keep stocked for home bartending.',
    intro: 'A garnish is the first thing you taste with your eyes. These are the cherries and citrus I keep stocked.',
  },
  {
    slug: 'appliances',
    dbValues: ['appliances'],
    name: 'Appliances',
    metaDescription:
      'The juicers, ice makers, and small appliances that earn their counter space in a home bar. Gear I use for cocktail prep, tested honestly.',
    intro:
      'Counter space is precious, so an appliance has to earn its spot. These are the ones that pull their weight in my prep.',
  },
  {
    slug: 'cocktail-books',
    dbValues: ['cocktail_books'],
    name: 'Cocktail Books',
    metaDescription:
      'The cocktail books I actually cook from: recipes, technique, and history worth shelf space. Where my own drink ideas get their start.',
    intro:
      'Most of what I know about drinks started in one of these books. Recipes, technique, and enough history to argue about.',
  },
  {
    // Combined bucket: covers both the juices and teas values in Strapi.
    slug: 'mixers',
    dbValues: ['juices', 'teas'],
    name: 'Mixers',
    metaDescription:
      'Juices, teas, and other mixers that hold up in cocktails when fresh is not an option. What I keep on hand between grocery runs.',
    intro:
      'The non-boozy half of the drink matters just as much. Juices that hold up when the fruit bowl is empty, and teas for hot cocktails, syrups, and infusions.',
  },
];

export default PRODUCT_CATEGORIES;
