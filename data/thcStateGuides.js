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
];

export default THC_STATE_GUIDES;
