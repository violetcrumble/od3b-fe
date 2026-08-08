// Dedicated deep-dive guides for individual states, rendered at
// /thc-drinks/legal-states/[slug]. The 50-state page keeps the short answer;
// these pages carry the full story for states worth owning in search.
// Body fields are markdown (blank line between paragraphs). Keep the shared
// factual explainers here and let the main page entry stay short, so the two
// pages never read as duplicates of each other.

const THC_STATE_GUIDES = [
  {
    slug: 'arizona',
    code: 'AZ',
    seoTitle: 'Are THC Drinks Legal in Arizona?',
    metaDescription:
      'THC drinks are legal to possess in Arizona but sold only through dispensaries. What the law says, where to buy, and whether anyone ships here.',
    heading: 'Are THC Drinks Legal in Arizona?',
    updated: '2026-08-08',
    quickAnswer:
      'Yes to drinking them, no to buying them at the corner store. Arizona treats every intoxicating THC product as marijuana, so THC drinks are legal for adults 21 and up but only sold through licensed dispensaries. No hemp brand has a legal way to ship here, though some do it anyway.',
    sections: [
      {
        heading: 'What Arizona law actually says',
        body: 'Recreational marijuana has been legal in Arizona since voters passed Prop 207 in 2020, so the state already had a licensed system for selling THC. The hemp loophole closed on March 24, 2025, when Attorney General Kris Mayes sent letters declaring that selling THC-infused products outside licensed marijuana establishments is illegal, whether the THC comes from cannabis or hemp, and directed law enforcement to start enforcing that position on April 24, 2025.\n\nThat is why the hemp seltzers you might have seen at smoke shops and bottle shops disappeared. The products themselves are not banned; the unlicensed sales channel is.',
      },
      {
        heading: 'Where you can buy THC drinks in Arizona',
        body: 'Dispensaries. Arizona has one of the more built-out dispensary networks in the country, especially around Phoenix and Tucson, and most carry a beverage section. The drinks on those shelves are marijuana-derived rather than hemp-derived, which makes no practical difference in the glass: delta-9 THC is the same molecule either way, and doses run the familiar 5mg to 10mg range.\n\nIf you are new to THC drinks, our [dosage guide](/blog/thc-drink-dosage-guide) covers what those numbers feel like before you buy a 12-pack of anything.',
      },
      {
        heading: 'Will anyone ship THC drinks to Arizona?',
        body: 'Officially, no. There is no legal channel for shipping THC drinks to an Arizona address, and dispensaries cannot mail product either.\n\nIn practice, some national hemp brands ship to Arizona anyway. If you are wondering whether you are the one breaking the law by ordering, the risk sits almost entirely with the seller: the AG letters target unlicensed sales, and adults 21 and up can legally possess far more THC under Prop 207 than any seltzer contains. Every brand maintains its own ship-to list, so the checkout page of [a brand we have vetted](/thc-drinks/discounts) is the final word for your address.',
      },
      {
        heading: 'The November 2026 federal ban',
        body: 'The federal hemp redefinition lands November 12, 2026, capping hemp products at 0.4mg of total THC per container. That ends the hemp mail-order era nationally unless Congress passes a carve-out. Arizona dispensary drinks are unaffected, since they are sold under state marijuana law, not hemp law. We cover the whole picture in our [federal THC drink ban explainer](/blog/thc-drink-ban-november-2026).',
      },
    ],
    faqs: [
      {
        question: 'Are THC drinks legal in Arizona?',
        answer:
          'Legal to possess and drink for adults 21 and up, but only sold through licensed dispensaries. Selling them at grocery stores, smoke shops, or liquor stores is illegal in Arizona.',
      },
      {
        question: 'Can you order THC drinks online in Arizona?',
        answer:
          'There is no legal sales channel for shipping THC drinks into Arizona. Some national hemp brands ship here anyway; that compliance risk sits with the seller, and each brand’s checkout page is the final word for your address.',
      },
      {
        question: 'Why did THC seltzers disappear from Arizona stores?',
        answer:
          'On March 24, 2025, Arizona’s Attorney General declared THC-infused product sales by non-licensed retailers illegal and directed enforcement to begin April 24, 2025. The drinks moved behind dispensary counters rather than leaving the state.',
      },
      {
        question: 'Does the November 2026 federal ban affect Arizona dispensary drinks?',
        answer:
          'No. The federal ban rewrites hemp law. Arizona dispensary beverages are sold under state marijuana law and are not affected.',
      },
    ],
    sources: [
      {
        label: 'Fennemore on the Arizona AG enforcement letters',
        url: 'https://www.fennemorelaw.com/arizona-attorney-general-warns-sale-of-the-thc-infused-products-by-non-licensed-entities-is-illegal/',
      },
      {
        label: 'Phoenix New Times on the federal ban and Arizona hemp',
        url: 'https://www.phoenixnewtimes.com/news/arizona-hemp-industry-has-year-to-save-itself-federal-ban-40622269/',
      },
    ],
  },
  {
    slug: 'ohio',
    code: 'OH',
    seoTitle: 'Can You Still Buy THC Drinks in Ohio? The 2026 Ban Explained',
    metaDescription:
      'Ohio banned retail THC drink sales on March 20, 2026. What SB 56 changed, why dispensaries cannot stock hemp brands, and whether anyone still ships here.',
    heading: 'Can You Still Buy THC Drinks in Ohio?',
    updated: '2026-08-08',
    quickAnswer:
      'Not at the store. Since March 20, 2026, Ohio treats anything over 0.4mg of total THC per container as marijuana, which ended retail sales of hemp THC drinks statewide. Dispensaries cannot pick up the hemp brands either, so the drinks you used to grab at the bottle shop are off legal shelves entirely. Possession is still legal for adults 21 and up, and some national brands still ship here despite the ban.',
    sections: [
      {
        heading: 'What Senate Bill 56 changed',
        body: 'Governor DeWine signed SB 56 on December 19, 2025, and it took effect March 20, 2026. The law reclassifies any product with more than 0.4mg of total THC per container as marijuana, which sweeps in essentially every real THC drink. The governor vetoed a carve-out that would have spared beverages, and a repeal effort failed to make the ballot, so this is the law for the foreseeable future.\n\nThe immediate effect: gas stations, smoke shops, grocery stores, and bottle shops had to pull delta-8 products, THCA flower, and THC beverages entirely.',
      },
      {
        heading: 'Why your dispensary does not carry the hemp brands',
        body: 'The natural assumption is that the hemp seltzers just moved behind dispensary counters. They did not. Ohio dispensaries may only sell marijuana products from Ohio-licensed cultivators and processors, and the state’s Division of Cannabis Control has said plainly that hemp products cannot migrate over. What you will find in an Ohio dispensary is marijuana-derived beverages made in-state, not the national brands you knew.\n\nThe drink in the can is the same idea either way: delta-9 THC at familiar 5mg and 10mg doses. If you are switching from a hemp brand to a dispensary equivalent, our [dosage guide](/blog/thc-drink-dosage-guide) translates the numbers.',
      },
      {
        heading: 'Will anyone ship THC drinks to Ohio?',
        body: 'Officially, no. Since March 20, 2026, selling THC beverages to Ohio consumers outside dispensaries is illegal, and that covers mail order.\n\nIn practice, some national brands are still shipping to Ohio addresses months into the ban. The legal exposure there belongs to the seller, not to you: the ban regulates sales, and adults 21 and up can legally possess THC in Ohio under the 2023 legalization vote. Ship-to lists change without notice, so the checkout page of [a brand we have vetted](/thc-drinks/discounts) is the final word for your address.',
      },
      {
        heading: 'The federal ban makes Ohio the preview',
        body: 'Ohio’s 0.4mg line is the same threshold the federal government adopted. The national version lands November 12, 2026, and unless Congress passes a carve-out, every state gets Ohio’s rules: hemp THC drinks gone from retail and mail order, dispensary drinks unaffected. Ohio just got there eight months early. The full picture is in our [federal THC drink ban explainer](/blog/thc-drink-ban-november-2026).',
      },
    ],
    faqs: [
      {
        question: 'Can you still buy THC drinks in Ohio?',
        answer:
          'Not at retail. Since March 20, 2026, any drink over 0.4mg of total THC per container is classified as marijuana and cannot be sold outside licensed dispensaries, and dispensaries can only sell Ohio-licensed marijuana products, not hemp brands.',
      },
      {
        question: 'Is it illegal to have THC drinks in Ohio?',
        answer:
          'No. Adults 21 and up can legally possess THC in Ohio under the 2023 legalization vote. SB 56 regulates who can sell, not what an adult can hold in their fridge.',
      },
      {
        question: 'Do any brands still ship THC drinks to Ohio?',
        answer:
          'Officially there is no legal channel, but in practice some national brands still ship to Ohio addresses. That compliance risk belongs to the seller, and each brand’s checkout page is the final word for your address.',
      },
      {
        question: 'Will the Ohio THC drink ban be repealed?',
        answer:
          'Unlikely soon. A repeal effort failed to make the ballot, and the federal ban arriving November 12, 2026 uses the same 0.4mg threshold, which locks the policy in nationally.',
      },
    ],
    sources: [
      {
        label: 'Ohio Division of Cannabis Control on the hemp ban',
        url: 'https://com.ohio.gov/about-us/media-center/news/intoxicating-hemp-ban-in-effect',
      },
      {
        label: 'Ohio Senate on SB 56',
        url: 'https://www.ohiosenate.gov/news/on-the-record/update-governor-signs-senate-bill-56-reforming-ohios-marijuana-and-intoxicating-hemp-laws',
      },
    ],
  },
  {
    slug: 'florida',
    code: 'FL',
    seoTitle: 'Are THC Drinks Legal in Florida?',
    metaDescription:
      'Yes. Hemp THC drinks are legal at retail in Florida for adults 21 and up, and most brands ship here. What the law says and how long the window stays open.',
    heading: 'Are THC Drinks Legal in Florida?',
    updated: '2026-08-08',
    quickAnswer:
      'Yes. Florida sells hemp-derived THC drinks at ordinary retail to adults 21 and up, and it is one of the easiest states in the country to have them shipped to. The legislature keeps trying to tighten the rules and keeps failing, so for now the market runs wide open. The real deadline is federal: November 12, 2026.',
    sections: [
      {
        heading: 'What Florida law actually says',
        body: 'Florida follows the federal hemp definition: drinks under 0.3% delta-9 THC by weight are hemp, not marijuana, and the state hemp program allows their sale to adults 21 and up. That percentage threshold is why a full-strength 5mg or 10mg seltzer is perfectly legal here; against the weight of a whole can, the THC content is a rounding error.\n\nThere is no beverage-specific framework on top of that. No serving caps, no special licensing, no limit on where they can be sold. Liquor stores, smoke shops, and grocery chains all carry them.',
      },
      {
        heading: 'Florida keeps trying to regulate, and keeps failing',
        body: 'Lawmakers have run at this repeatedly. A 2024 bill that would have capped drink potency drew a veto from Governor DeSantis, and the sessions since have ended the same way: the 2026 session opened with bills to license THC beverages through the state alcohol regulator and closed with every one of them dead.\n\nFor drinkers, the practical meaning is that the status quo holds. For anyone tracking the category, it means Florida still has not decided what it wants these drinks to be before the federal government decides for everyone.',
      },
      {
        heading: 'Do brands ship THC drinks to Florida?',
        body: 'Yes, freely. Florida is a standard ship-to state for essentially every national brand, and ordering online is as routine here as ordering wine. Ship-to lists do change without notice, so the checkout page of [a brand we have vetted](/thc-drinks/discounts) is the final word for your address.',
      },
      {
        heading: 'How long does this last? The November 2026 federal ban',
        body: 'The federal hemp redefinition lands November 12, 2026, capping hemp products at 0.4mg of total THC per container. Unless Congress passes a carve-out, that ends retail and mail-order hemp THC drinks in Florida along with everywhere else, and Florida has no recreational marijuana system to absorb them; the state remains medical-only. If these drinks are part of your routine, we cover what the deadline means in our [federal THC drink ban explainer](/blog/thc-drink-ban-november-2026).',
      },
    ],
    faqs: [
      {
        question: 'Are THC drinks legal in Florida?',
        answer:
          'Yes. Hemp-derived THC drinks under 0.3% delta-9 THC by weight are legal at ordinary retail in Florida for adults 21 and up, with no beverage-specific state restrictions on top of the hemp program.',
      },
      {
        question: 'Is Willie’s Remedy legal in Florida?',
        answer:
          'Yes. Willie’s Remedy drinks are hemp-derived delta-9 products under the 0.3% threshold, which makes them legal to buy and ship in Florida, the same as other compliant hemp THC drinks.',
      },
      {
        question: 'Do brands ship THC drinks to Florida?',
        answer:
          'Yes. Florida is one of the easiest states to order into, and most national brands ship here. Each brand’s checkout page is the final word for your address.',
      },
      {
        question: 'Will THC drinks stay legal in Florida?',
        answer:
          'The state keeps failing to pass new restrictions, so state law is stable. The real deadline is the federal ban on November 12, 2026, which caps hemp products at 0.4mg of total THC per container unless Congress passes a carve-out.',
      },
    ],
    sources: [
      {
        label: 'Greenspoon Marder Florida 2026 outlook',
        url: 'https://www.gmlaw.com/news/florida-marijuana-and-hemp-outlook-for-2026-key-legal-and-market-developments/',
      },
      {
        label: 'CSG South hemp beverage overview',
        url: 'https://csgsouth.org/policies/hemp-beverages-high-risk-or-high-reward/',
      },
    ],
  },
  {
    slug: 'indiana',
    code: 'IN',
    seoTitle: 'Are THC Drinks Legal in Indiana?',
    metaDescription:
      'Yes. Delta-9 hemp drinks are legal in Indiana under the federal default and brands ship here. What the delta-8 legal fog means and what changes in November 2026.',
    heading: 'Are THC Drinks Legal in Indiana?',
    updated: '2026-08-08',
    quickAnswer:
      'Yes. Indiana has no beverage-specific law, so hemp-derived delta-9 drinks under the federal 0.3% threshold are sold openly and shipped in freely. The legal fog you may have heard about is a delta-8 fight, not a delta-9 one, and it does not touch the seltzers on the shelf. The date that does: November 12, 2026.',
    sections: [
      {
        heading: 'What Indiana law actually says',
        body: 'Indiana never wrote a THC beverage law, so the federal hemp definition is the whole rulebook: a drink under 0.3% delta-9 THC by weight is hemp, and hemp is legal to sell. That threshold comfortably covers real 5mg and 10mg drinks, which is why you will find them at liquor stores and wellness shops across the state without any dispensary involved. Indiana has no dispensaries to involve; the state has no medical or recreational marijuana program at all.',
      },
      {
        heading: 'The delta-8 fog, and why your seltzer is fine',
        body: 'Indiana’s hemp reputation for legal murkiness is real, but it is about a different molecule. In 2023 Attorney General Todd Rokita issued an opinion calling delta-8 THC a Schedule I controlled substance, and the legislature has fought over synthetic cannabinoids ever since; a 2026 bill to ban them outright failed to pass.\n\nDelta-9 drinks sit outside that fight. They use the exact cannabinoid the federal hemp definition names, at the compliance threshold it sets, with no conversion chemistry for an attorney general to attack. It is the cleanest legal lane hemp THC has in Indiana.',
      },
      {
        heading: 'Do brands ship THC drinks to Indiana?',
        body: 'Yes. Brands ship to Indiana under the same federal default that covers in-store sales, and it is a routine ship-to state for the national names. Ship-to lists change without notice, so the checkout page of [a brand we have vetted](/thc-drinks/discounts) is the final word for your address.',
      },
      {
        heading: 'The November 2026 federal ban',
        body: 'The federal hemp redefinition lands November 12, 2026, capping hemp products at 0.4mg of total THC per container. Because Indiana leans entirely on the federal definition and has no marijuana program as a fallback, the ban would hit harder here than almost anywhere: no retail, no shipping, no dispensary alternative. Unless Congress passes a carve-out, Indiana goes from one of the easiest states to one of the hardest overnight. The full picture is in our [federal THC drink ban explainer](/blog/thc-drink-ban-november-2026).',
      },
    ],
    faqs: [
      {
        question: 'Are THC drinks legal in Indiana?',
        answer:
          'Yes. Indiana has no beverage-specific law, so hemp-derived drinks under 0.3% delta-9 THC by weight are legal to sell and buy under the federal hemp definition.',
      },
      {
        question: 'Is Willie’s Remedy legal in Indiana?',
        answer:
          'Yes. Willie’s Remedy drinks are hemp-derived delta-9 products under the 0.3% threshold, which makes them legal to buy and ship in Indiana, the same as other compliant hemp THC drinks.',
      },
      {
        question: 'Is delta-8 legal in Indiana?',
        answer:
          'Contested. The state attorney general called delta-8 a Schedule I controlled substance in a 2023 opinion, while sellers point to hemp law; a 2026 ban bill failed. THC drinks avoid the fight entirely because they use delta-9 under the federal threshold.',
      },
      {
        question: 'Do brands ship THC drinks to Indiana?',
        answer:
          'Yes. Indiana is a routine ship-to state for national brands under the federal default. Each brand’s checkout page is the final word for your address.',
      },
    ],
    sources: [
      {
        label: 'McNeely Law on delta-8 in Indiana',
        url: 'https://www.mcneelylaw.com/delta-8-thc-legal-status-and-risks-in-indiana/',
      },
      {
        label: 'US Hemp Roundtable state policy update',
        url: 'https://hempsupporter.com/news/state-hemp-policy-update-alabama-florida-hawaii-illinois-indiana-massachusetts-mississippi-missouri-nebraska-new-hampshire-new-jersey-north-carolina-oklahoma-south-carolina-south-dakota/',
      },
    ],
  },
];

export default THC_STATE_GUIDES;
