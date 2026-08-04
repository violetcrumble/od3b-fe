// State-by-state legality of hemp-derived THC drinks (delta-9 seltzers, tonics,
// and spirits sold outside marijuana dispensaries). Reviewed state by state
// against the sources listed on each entry; statuses reflect where things stood
// on the lastReviewed date. This area of law is moving fast, so when a ban bill
// passes or a court ruling lands, update the entry and its lastReviewed date.
//
// status values:
//   legal      - you can buy real THC drinks at ordinary retail (caps may apply)
//   restricted - only dispensaries/licensed channels, or caps so low that
//                mainstream drinks do not qualify
//   banned     - no legal retail path for hemp THC drinks
//   unclear    - no clear framework; enforcement climate makes it a gray area

export const FEDERAL_BAN = {
  effectiveDate: 'November 12, 2026',
  summary:
    'A federal law signed in November 2025 (P.L. 119-37, Section 781) redefines hemp to cap finished products at 0.4 milligrams of total THC per container, effective November 12, 2026. Almost every THC drink on the market is above that line, so unless Congress passes a carve-out, hemp THC drinks lose their federal legal basis on that date no matter what your state says. Dispensary drinks sold under state marijuana laws are not affected.',
  postUrl: '/blog/thc-drink-ban-november-2026',
};

const THC_STATE_LEGALITY = [
  {
    code: 'AL',
    name: 'Alabama',
    status: 'legal',
    summary: 'Legal at retail with some of the South’s clearest rules.',
    details:
      'HB 445 (2025) built a real framework: 21+, caps of 10mg per serving and 40mg per package, lab testing, and licensing through the ABC Board. Drinks that follow the rules are sold openly.',
    shipping:
      'No. HB 445 banned online, mail-order, and direct-delivery hemp sales effective January 1, 2026. Buy in person at licensed retailers.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'AK',
    name: 'Alaska',
    status: 'restricted',
    summary: 'Dispensary only. Hemp THC drinks are off the table.',
    details:
      'Alaska bars any detectable delta-9 THC in consumable hemp products, so hemp seltzers cannot be sold at ordinary retail. THC drinks exist, but only through licensed cannabis stores.',
    shipping:
      'No. THC products here move through licensed cannabis stores, and dispensaries cannot mail THC. Reputable hemp brands will not ship to Alaska.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'Floral state law guide (Alaska)', url: 'https://tryfloral.com/pages/thc-laws-alaska' }],
  },
  {
    code: 'AZ',
    name: 'Arizona',
    status: 'restricted',
    summary: 'Dispensary only.',
    details:
      'Arizona pushed intoxicating hemp products into its licensed cannabis system. You can buy THC drinks, just not at grocery or liquor stores.',
    shipping: 'No. Hemp THC lives in the licensed cannabis system, so reputable brands will not ship here.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'BudPop 50-state guide', url: 'https://budpop.com/are-thc-drinks-legal-in-my-state/' }],
  },
  {
    code: 'AR',
    name: 'Arkansas',
    status: 'banned',
    summary: 'Banned, with active enforcement.',
    details:
      'Act 629 (2023) banned intoxicating hemp products outside medical dispensaries, and Act 934 (2025) expanded the ban after court challenges. The state has seized thousands of products from retailers.',
    shipping:
      'No. The ban covers mail order, and the state actively enforces it. Some out-of-state sites may still take your order; we do not recommend testing that.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'CA',
    name: 'California',
    status: 'restricted',
    summary: 'Dispensary only. No intoxicating hemp outside the cannabis market.',
    details:
      'California’s AB 45 rules and the emergency regulations that followed ban intoxicating hemp products outside the licensed cannabis market. THC drinks are on dispensary shelves, not at the corner store.',
    shipping:
      "No. California is on major brands' no-ship lists, including Crescent Canna's. Dispensary shelves are the route here.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Gilmore Law on AB 8 and the federal ban',
        url: 'https://shaygilmorelaw.com/new-federal-ban-set-to-meet-californias-ab-8-in-regulatory-squeeze-hemp-industry/',
      },
    ],
  },
  {
    code: 'CO',
    name: 'Colorado',
    status: 'restricted',
    summary: 'Dispensary only.',
    details:
      'Colorado routes intoxicating hemp products through its licensed cannabis system. THC drinks are available, but only from dispensaries and state-regulated retailers.',
    shipping: 'No. Same dispensary-only logic as retail: reputable hemp brands will not ship into Colorado.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'BudPop 50-state guide', url: 'https://budpop.com/are-thc-drinks-legal-in-my-state/' }],
  },
  {
    code: 'CT',
    name: 'Connecticut',
    status: 'restricted',
    summary: 'Licensed channels only, at low doses.',
    details:
      'Connecticut treats hemp products with meaningful THC as cannabis, so sales run through licensed retailers. Low-dose drinks around 3mg per serving have launched through that system, including at breweries and package stores.',
    shipping:
      "Not really. Sales run through Connecticut's licensed system, so out-of-state mail order is off the table.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'DE',
    name: 'Delaware',
    status: 'restricted',
    summary: 'Cannabis program only.',
    details:
      'Delaware has effectively banned intoxicating hemp THC products outside its cannabis program. Psychoactive products are regulated through marijuana laws, not hemp rules.',
    shipping: 'No. With intoxicating hemp folded into the cannabis program, reputable brands skip Delaware shipping.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'FL',
    name: 'Florida',
    status: 'legal',
    summary: 'Legal at retail. Tried to regulate, has not managed it yet.',
    details:
      'Hemp drinks under 0.3% delta-9 THC are sold to adults 21+ under the state hemp program. Lawmakers have tried repeatedly to pass a beverage framework, and the 2026 session ended with every hemp beverage bill dead.',
    shipping: 'Yes. Florida is one of the easiest states to order into, and most national brands ship here.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'GA',
    name: 'Georgia',
    status: 'legal',
    summary: 'Legal at retail with a 10mg serving cap.',
    details:
      'Georgia regulates hemp beverages through the Department of Agriculture: 21+, 10mg per serving, testing and warning labels required. SB 33 (2026) would tighten the rules further, so watch this one.',
    shipping: "Yes. Most national brands ship to Georgia, and compliant products carry the state's 10mg serving cap.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'HI',
    name: 'Hawaii',
    status: 'banned',
    summary: 'Banned. No retail path.',
    details:
      'Hawaii applies a total-THC standard and bars intoxicating hemp products, leaving no legal retail path for hemp THC drinks.',
    shipping: 'No. No retail path means no mail-order path either.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'BudPop 50-state guide', url: 'https://budpop.com/are-thc-drinks-legal-in-my-state/' }],
  },
  {
    code: 'ID',
    name: 'Idaho',
    status: 'banned',
    summary: 'Banned. Zero tolerance for any THC.',
    details: 'Idaho prohibits any amount of THC, full stop. There is no legal hemp THC product of any kind here.',
    shipping: 'No. Zero-tolerance means zero shipping. Any vendor offering to ship THC to Idaho is one to avoid.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'BudPop 50-state guide', url: 'https://budpop.com/are-thc-drinks-legal-in-my-state/' }],
  },
  {
    code: 'IL',
    name: 'Illinois',
    status: 'legal',
    summary: 'Legal at retail today; a new law is waiting for a signature.',
    details:
      'Illinois has been one of the friendlier states for hemp drinks. SB 3222, passed in 2026 and awaiting the governor’s signature, would align state law with the new federal definition and push stronger products into the licensed cannabis system.',
    shipping: 'Yes. National brands ship to Illinois freely, at least until the pending state law changes land.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG Midwest hemp products overview',
        url: 'https://csgmidwest.org/2026/06/04/farm-bill-loophole-has-led-to-a-booming-industry-for-hemp-derived-products-and-a-mix-of-state-laws-a-new-federal-framework-is-coming-soon/',
      },
    ],
  },
  {
    code: 'IN',
    name: 'Indiana',
    status: 'legal',
    summary: 'Legal at retail, with some legal fog around the edges.',
    details:
      'Hemp drinks are widely sold under the federal farm bill definition and there is no beverage-specific state law. The attorney general has taken a hostile view of delta-8 products, so the broader hemp market has some legal fog, but delta-9 drinks under 0.3% are on shelves.',
    shipping: 'Yes. Brands ship to Indiana under the federal default, same as in-store sales.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'IA',
    name: 'Iowa',
    status: 'legal',
    summary: 'Legal at retail, but only truly low-dose drinks qualify.',
    details:
      'Iowa’s 2024 consumable hemp law allows drinks up to 4mg THC per serving and 10mg per container, 21+. That keeps the lightest seltzers legal and pushes anything stronger off the shelf.',
    shipping:
      "Only low-dose products. Iowa's 4mg per serving and 10mg per container caps apply to anything sold into the state, which rules out most standard 5mg and 10mg drinks.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG Midwest hemp products overview',
        url: 'https://csgmidwest.org/2026/06/04/farm-bill-loophole-has-led-to-a-booming-industry-for-hemp-derived-products-and-a-mix-of-state-laws-a-new-federal-framework-is-coming-soon/',
      },
    ],
  },
  {
    code: 'KS',
    name: 'Kansas',
    status: 'unclear',
    summary: 'Gray area. No framework, and officials read the law strictly.',
    details:
      'Kansas has no licensing program and no beverage law. Authorities interpret the hemp limit as covering all forms of THC, which puts most intoxicating products on shaky ground even though enforcement is uneven.',
    shipping:
      "Gray, like everything else here. Many national brands do ship to Kansas, but the state's strict reading of THC limits applies to mail order too.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'KY',
    name: 'Kentucky',
    status: 'legal',
    summary: 'Legal at retail with a 5mg serving cap.',
    details:
      'Kentucky regulates hemp beverages through Alcoholic Beverage Control: 21+, 5mg of intoxicating cannabinoids per 12oz serving, with testing and labeling requirements.',
    shipping: "Yes, within Kentucky's 5mg serving cap. Compliant brands ship here.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'LA',
    name: 'Louisiana',
    status: 'legal',
    summary: 'Legal at retail with a 5mg serving cap.',
    details:
      'Louisiana allows consumable hemp products at up to 5mg THC per serving, 21+, with testing and labeling enforced through the Office of Alcohol and Tobacco Control.',
    shipping:
      'Yes, but only drinks with 5mg or less per serving. [Crescent Canna](https://www.crescentcanna.com/?sld=cocktailunderground&utm_source=cocktailunderground&utm_medium=legal_states_inline&utm_campaign=legal-states&utm_content=louisiana), for example, ships its 5mg products into Louisiana but not its stronger cans.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'ME',
    name: 'Maine',
    status: 'legal',
    summary: 'Legal at retail under state oversight.',
    details:
      'Maine’s Office of Cannabis Policy oversees intoxicating hemp products with testing standards and THC limits, and drinks are sold under that framework.',
    shipping:
      "Mostly no. Maine's rules keep most national brands from shipping here; Crescent Canna lists it as a no-ship state. Buy through Maine's own licensed retail.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'MD',
    name: 'Maryland',
    status: 'restricted',
    summary: 'Dispensary only since 2023.',
    details:
      'Maryland requires intoxicating hemp products to be sold through licensed cannabis dispensaries. The rule survived court challenges and keeps hemp drinks out of ordinary retail.',
    shipping: 'No. Dispensary-only at retail means reputable brands will not mail products in either.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'MA',
    name: 'Massachusetts',
    status: 'restricted',
    summary: 'Not allowed outside dispensaries, and regulators mean it.',
    details:
      'A 2024 joint advisory from state agencies says hemp-derived THC and CBD cannot be added to food or drinks sold in the state, and the liquor commission has warned licensees they could lose licenses over it. Dispensary products are the only sanctioned route.',
    shipping: 'No. Regulators have warned licensees directly, and reputable brands will not ship to Massachusetts.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Boston Globe on the hemp crackdown',
        url: 'https://www.bostonglobe.com/2026/04/05/business/intoxicating-hemp-ban-farm-bill/',
      },
    ],
  },
  {
    code: 'MI',
    name: 'Michigan',
    status: 'restricted',
    summary: 'Regulated like cannabis, sold through dispensaries.',
    details:
      'Michigan set potency caps for hemp drinks back in 2021 (10mg per serving, 100mg per container) but routes sales through licensed marijuana retailers rather than ordinary stores.',
    shipping:
      'No. Hemp drinks route through licensed marijuana retailers, which cannot mail THC. Out-of-state brands skip Michigan.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG Midwest hemp products overview',
        url: 'https://csgmidwest.org/2026/06/04/farm-bill-loophole-has-led-to-a-booming-industry-for-hemp-derived-products-and-a-mix-of-state-laws-a-new-federal-framework-is-coming-soon/',
      },
    ],
  },
  {
    code: 'MN',
    name: 'Minnesota',
    status: 'legal',
    summary: 'The model state. THC seltzers at Target.',
    details:
      'Minnesota built the country’s most visible hemp drink market: 5mg per serving, licensed and lab-tested, sold in liquor stores, taprooms, and big retail. It is the template everyone else argues about.',
    shipping:
      "Yes. Minnesota's licensed market includes compliant direct shipping, and its homegrown brands ship within the rules.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG Midwest hemp products overview',
        url: 'https://csgmidwest.org/2026/06/04/farm-bill-loophole-has-led-to-a-booming-industry-for-hemp-derived-products-and-a-mix-of-state-laws-a-new-federal-framework-is-coming-soon/',
      },
    ],
  },
  {
    code: 'MS',
    name: 'Mississippi',
    status: 'banned',
    summary: 'Effectively banned.',
    details:
      'There is no legal framework for hemp THC products, and a June 2025 attorney general opinion tightened the screws. A categorical beverage ban bill has also been in play. Do not count on finding drinks here.',
    shipping: 'No. Effectively banned at retail and by mail alike.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'MO',
    name: 'Missouri',
    status: 'legal',
    summary: 'Legal at retail today, banned November 12, 2026.',
    details:
      'Missouri drinks are legal right now, but HB 2641 (signed April 2026) adopts the federal 0.4mg total THC cap on the same November 12, 2026 date as the federal change. Products must be off ordinary retail shelves by then.',
    shipping: "Yes, until November 12, 2026, when the state's new 0.4mg cap ends ordinary sales, shipped or otherwise.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'MT',
    name: 'Montana',
    status: 'restricted',
    summary: 'Caps so low the market is effectively gone.',
    details:
      'HB 49 (2025) capped hemp products at 0.5mg THC per serving and 2mg per package. Mainstream drinks run 2.5 to 10mg per serving, so roughly the whole beverage market fell out of compliance overnight.',
    shipping:
      'No. The 0.5mg serving cap applies regardless of how the product arrives, so mainstream drinks cannot legally be shipped in.',
    lastReviewed: '2026-08-03',
    sources: [
      { label: 'US Hemp Roundtable on HB 49', url: 'https://hempsupporter.com/bill/protect-hemp-products-in-montana/' },
    ],
  },
  {
    code: 'NE',
    name: 'Nebraska',
    status: 'unclear',
    summary: 'Gray area. Permissive law, hostile enforcement climate.',
    details:
      'Nebraska law mirrors the federal farm bill with no beverage-specific rules, and drinks are sold in practice. But the attorney general has aggressively pursued hemp retailers, so treat this one as unsettled.',
    shipping:
      'Gray. Many brands ship to Nebraska under the permissive statute, but the enforcement climate makes it unsettled, mail order included.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'NV',
    name: 'Nevada',
    status: 'restricted',
    summary: 'Dispensary only.',
    details:
      'Nevada’s Cannabis Compliance Board decided that anything containing THC that can get you high is a cannabis product, which means licensed dispensaries only. No hemp seltzers at the mini-mart, even in Vegas.',
    shipping:
      'No. The Cannabis Compliance Board treats anything intoxicating as a cannabis product, so no legitimate mail order.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'NH',
    name: 'New Hampshire',
    status: 'unclear',
    summary: 'Gray area. Sold in practice, frowned on by authorities.',
    details:
      'New Hampshire has no formal ban, and hemp drinks show up at retail. State authorities have signaled that intoxicating hemp cannabinoids are not legal under state law, though, so the ground here is soft.',
    shipping:
      "Gray. Brands generally ship to New Hampshire, but the state's position on intoxicating hemp makes it less settled than it looks.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'NJ',
    name: 'New Jersey',
    status: 'legal',
    summary: 'Legal in liquor stores at 5mg, with a hard stop coming in November.',
    details:
      'New Jersey’s 2026 laws let licensed liquor retailers and cannabis stores sell hemp drinks capped at 5mg per serving and 10mg per container. On November 13, 2026, anything over the new federal 0.4mg line becomes cannabis and moves to dispensaries only.',
    shipping:
      "No. New Jersey's 2026 law bans online sales of intoxicating hemp products outright. Licensed liquor stores and dispensaries are the only legal route.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'NJ Cannabis Regulatory Commission FAQ',
        url: 'https://www.nj.gov/cannabis/resources/faqs/intoxicating-hemp/index.shtml',
      },
    ],
  },
  {
    code: 'NM',
    name: 'New Mexico',
    status: 'restricted',
    summary: 'Semi-synthetic hemp THC banned; dispensaries carry drinks.',
    details:
      'Regulators adopted emergency rules in 2025 banning semi-synthetic THC cannabinoids in hemp products, which sweeps up most hemp-derived drinks. THC beverages are available through the state’s licensed cannabis dispensaries.',
    shipping:
      'No. The semi-synthetic THC ban covers most hemp drinks however they arrive. Dispensaries carry drinks locally.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'NY',
    name: 'New York',
    status: 'restricted',
    summary: 'Technically legal, capped at 1mg per serving.',
    details:
      'New York’s hemp rules allow drinks at no more than 1mg THC per serving and 10mg per package with a required 15:1 CBD-to-THC ratio, sold under a state license. Mainstream 5mg seltzers do not qualify, so the real product selection is thin.',
    shipping:
      'Not meaningfully. Products above 1mg per serving cannot legally be sold to New Yorkers, online or off, so mainstream drinks are out either way.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'NY OCM Part 114 regulations',
        url: 'https://regulations.justia.com/states/new-york/title-9/subtitle-b/chapter-ii/part-114/section-114-8',
      },
    ],
  },
  {
    code: 'NC',
    name: 'North Carolina',
    status: 'legal',
    summary: 'Legal at retail with minimal state rules.',
    details:
      'North Carolina follows the federal 0.3% delta-9 standard with little extra regulation, and hemp drinks are widely available. Lawmakers keep debating tighter rules, so this could change.',
    shipping: 'Yes. North Carolina is an easy ship-to state for national brands.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'ND',
    name: 'North Dakota',
    status: 'banned',
    summary: 'Banned.',
    details:
      'North Dakota adopted a strict total-THC hemp definition in 2023 and treats converted cannabinoids like delta-8 as controlled substances. There is no retail path for THC drinks.',
    shipping: 'No. Banned at retail and by mail alike.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG Midwest hemp products overview',
        url: 'https://csgmidwest.org/2026/06/04/farm-bill-loophole-has-led-to-a-booming-industry-for-hemp-derived-products-and-a-mix-of-state-laws-a-new-federal-framework-is-coming-soon/',
      },
    ],
  },
  {
    code: 'OH',
    name: 'Ohio',
    status: 'banned',
    summary: 'Banned as of March 20, 2026.',
    details:
      'Senate Bill 56 reclassified anything over 0.4mg total THC per container as marijuana, and the governor vetoed a carve-out that would have spared drinks. Since March 20, 2026, THC beverages can only be sold through licensed dispensaries. A repeal effort failed to make the ballot.',
    shipping:
      'No. Since March 20, 2026, THC beverages cannot be sold or shipped to Ohio consumers outside dispensaries.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Ohio Capital Journal on SB 56',
        url: 'https://ohiocapitaljournal.com/2026/03/20/new-ohio-law-banning-intoxicating-hemp-products-thc-and-cbd-beverages-takes-effect/',
      },
    ],
  },
  {
    code: 'OK',
    name: 'Oklahoma',
    status: 'unclear',
    summary: 'Gray area, trending restrictive.',
    details:
      'Oklahoma applies a total-THC reading of the hemp limit, and January 2026 agency guidance points toward the federal 0.4mg per container standard. Legislation to codify restrictions has been pending. Products are still around, but the direction of travel is clear.',
    shipping:
      'Gray and tightening. Some brands still ship to Oklahoma, but agency guidance pointing at a 0.4mg cap makes that a shrinking window.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'OR',
    name: 'Oregon',
    status: 'restricted',
    summary: 'Dispensary only.',
    details:
      'Oregon banned intoxicating hemp products outside its regulated cannabis market. THC drinks are easy to find, but only in dispensaries.',
    shipping: 'No. Dispensary-only, and dispensaries cannot mail THC. Reputable hemp brands skip Oregon.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'BudPop 50-state guide', url: 'https://budpop.com/are-thc-drinks-legal-in-my-state/' }],
  },
  {
    code: 'PA',
    name: 'Pennsylvania',
    status: 'legal',
    summary: 'Legal at retail under the federal default.',
    details:
      'Pennsylvania has no state law specifically restricting hemp-derived THC drinks, so farm bill compliant products are sold to adults through ordinary retail.',
    shipping: 'Yes. Pennsylvania is a standard ship-to state for national brands.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'RI',
    name: 'Rhode Island',
    status: 'legal',
    summary: 'Legal through licensed retailers, including liquor stores.',
    details:
      'Rhode Island has allowed licensed retailers, including bars, restaurants, and liquor stores, to sell hemp THC drinks since August 2024, with the Cannabis Control Commission working on permanent rules.',
    shipping:
      'Sort of. The licensed system is built around in-person retail; some national brands ship here anyway, but the store route is the clearly sanctioned one.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'RI legislature S 3215 (2026)',
        url: 'https://webserver.rilegislature.gov/BillText26/SenateText26/S3215.pdf',
      },
    ],
  },
  {
    code: 'SC',
    name: 'South Carolina',
    status: 'legal',
    summary: 'Legal at retail today; a restrictive bill is in conference.',
    details:
      'Hemp drinks are sold with little state regulation, but H.3924 (in conference committee as of spring 2026) would impose the 0.4mg total THC cap and could wipe out the current market. Enjoy it while it lasts.',
    shipping:
      'Yes, for now. Brands ship to South Carolina freely, though the pending bill would end that along with retail.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'SD',
    name: 'South Dakota',
    status: 'banned',
    summary: 'Banned.',
    details:
      'South Dakota banned chemically converted cannabinoids from hemp in 2024 and tightened its hemp definitions again in 2026. There is no meaningful retail path for THC drinks.',
    shipping: 'No. Banned at retail and by mail alike.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG Midwest hemp products overview',
        url: 'https://csgmidwest.org/2026/06/04/farm-bill-loophole-has-led-to-a-booming-industry-for-hemp-derived-products-and-a-mix-of-state-laws-a-new-federal-framework-is-coming-soon/',
      },
    ],
  },
  {
    code: 'TN',
    name: 'Tennessee',
    status: 'legal',
    summary: 'Legal at retail with the most generous caps around.',
    details:
      'Since January 2026 the Alcoholic Beverage Commission regulates hemp drinks: 21+, up to 15mg per serving and two servings per container, with full-panel testing and QR-coded labels. Yes, that cap is higher than Minnesota’s.',
    shipping:
      'No. Tennessee banned online sales and direct-to-consumer delivery of hemp products effective January 1, 2026. In-person licensed retail only.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'TX',
    name: 'Texas',
    status: 'legal',
    summary: 'Legal at retail, and the fight is not over.',
    details:
      'Low-dose delta-9 drinks remain legal under TABC oversight, and the July 31, 2026 synthetic THC crackdown left compliant beverages alone. That covers the brands people ask us about by name: yes, Crescent 9 is legal in Texas, and so is Willie’s Remedy. The 2025 ban bill was vetoed, courts have been busy, and the situation stays volatile. Check back.',
    shipping:
      'Yes. Texas remains a major direct-to-consumer market, and compliant low-dose delta-9 drinks ship here under TABC-era rules. [Crescent Canna](https://www.crescentcanna.com/?sld=cocktailunderground&utm_source=cocktailunderground&utm_medium=legal_states_inline&utm_campaign=legal-states&utm_content=texas) ships Crescent 9 to Texas addresses (21+, no medical card needed), and the cans are on store shelves around the state too.',
    lastReviewed: '2026-08-04',
    sources: [
      {
        label: 'Texas Tribune on the 2026 rules',
        url: 'https://www.texastribune.org/2026/07/30/texas-thc-cannabis-ban-delta-9-8-marijuana/',
      },
      {
        label: 'Crescent Canna Texas ordering guide',
        url: 'https://www.crescentcanna.com/how-to-order-thc-in-texas/',
      },
      {
        label: 'WFAA explainer on the July 31 changes',
        url: 'https://www.wfaa.com/article/money/business/texas-thc-ban-2026/287-0f2ac920-0541-4bf3-9455-030be36c927b',
      },
    ],
  },
  {
    code: 'UT',
    name: 'Utah',
    status: 'banned',
    summary: 'Banned.',
    details:
      'Utah treats intoxicating hemp cannabinoids as controlled substances and forbids products with meaningful THC. There is no retail path for THC drinks.',
    shipping: 'No. Banned at retail and by mail alike.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
  {
    code: 'VT',
    name: 'Vermont',
    status: 'banned',
    summary: 'Banned outside the cannabis market.',
    details:
      'Vermont bans intoxicating hemp products outside its regulated cannabis system, so hemp THC drinks have no retail path.',
    shipping: 'No. Banned outside the cannabis market, shipping included.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'BudPop 50-state guide', url: 'https://budpop.com/are-thc-drinks-legal-in-my-state/' }],
  },
  {
    code: 'VA',
    name: 'Virginia',
    status: 'restricted',
    summary: 'A 2mg package cap keeps real drinks out.',
    details:
      'Virginia caps hemp products at 2mg total THC per package unless they carry a 25:1 CBD-to-THC ratio, one of the strictest limits in the South. Mainstream THC drinks do not qualify.',
    shipping: 'No. The 2mg package cap makes mainstream drinks illegal to sell into Virginia by any channel.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'WA',
    name: 'Washington',
    status: 'restricted',
    summary: 'Dispensary only since 2023.',
    details:
      'Washington was an early mover, banning intoxicating hemp products outside the regulated cannabis market in 2023. THC drinks are dispensary-only.',
    shipping: 'No. Dispensary-only since 2023; reputable brands will not ship here.',
    lastReviewed: '2026-08-03',
    sources: [{ label: 'BudPop 50-state guide', url: 'https://budpop.com/are-thc-drinks-legal-in-my-state/' }],
  },
  {
    code: 'WV',
    name: 'West Virginia',
    status: 'legal',
    summary: 'Legal at retail, registered and taxed.',
    details:
      'West Virginia regulates hemp drinks with product registration, testing, labeling, and an 11% excise tax, with enforcement help from the alcohol authority. Compliant drinks are sold openly.',
    shipping: 'Yes. Registered, compliant products ship to West Virginia.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    code: 'WI',
    name: 'Wisconsin',
    status: 'legal',
    summary: 'Legal at retail, essentially unregulated.',
    details:
      'Wisconsin has no specific law restricting hemp-derived THC products, so farm bill compliant drinks are sold freely. Bills to change that have been introduced but not passed.',
    shipping: 'Yes. Wisconsin is a standard ship-to state for national brands.',
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'CSG Midwest hemp products overview',
        url: 'https://csgmidwest.org/2026/06/04/farm-bill-loophole-has-led-to-a-booming-industry-for-hemp-derived-products-and-a-mix-of-state-laws-a-new-federal-framework-is-coming-soon/',
      },
    ],
  },
  {
    code: 'WY',
    name: 'Wyoming',
    status: 'unclear',
    summary: 'Gray area. Converted THC is a controlled substance here.',
    details:
      'Wyoming allows hemp at or below 0.3% delta-9 but treats isomerized or converted THC as controlled substances, which covers how most hemp drink THC is actually made. Between that and a strict enforcement climate, this is not a state to assume anything in.',
    shipping:
      "Gray. Some brands ship here, but Wyoming's treatment of converted THC puts most hemp drink formulations on the wrong side of the line. Order cautiously if at all.",
    lastReviewed: '2026-08-03',
    sources: [
      {
        label: 'Marijuana Herald 50-state status',
        url: 'https://themarijuanaherald.com/2025/11/legal-status-of-hemp-derived-thc-products-in-all-50-states-november-2025/',
      },
    ],
  },
];

export default THC_STATE_LEGALITY;
