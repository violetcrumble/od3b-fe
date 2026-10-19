import { GET_ALL_REVIEW_SLUGS, GET_REVIEW, GET_ALL_AFFILIATE_PARTNERS } from '../../../graphql/queries';
import { strapiQuery, strapiQueryCached } from '../../../utils/strapiQuery';
import ReviewPage from '../../../components/Review/ReviewPage/ReviewPage';
import { REVIEW_SECTIONS, reviewsInSection } from '../../../utils/reviewSections';

// THC drink reviews. Non-THC reviews build under /reviews instead.
export default function Review({ review, affiliates }) {
  return <ReviewPage review={review} section={REVIEW_SECTIONS.thc} affiliates={affiliates} />;
}

export async function getStaticPaths() {
  const data = await strapiQuery(GET_ALL_REVIEW_SLUGS);

  const paths = reviewsInSection(data.reviews, REVIEW_SECTIONS.thc).map((review) => {
    return { params: { reviewUrlSlug: review.reviewUrlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [data, affiliatesData] = await Promise.all([
    strapiQuery(GET_REVIEW, { reviewUrlSlug: params.reviewUrlSlug }),
    strapiQueryCached(GET_ALL_AFFILIATE_PARTNERS),
  ]);

  const attrs = data.reviews[0];
  const affiliates = affiliatesData.affiliatePartners;

  return {
    props: {
      review: attrs,
      affiliates,
    },
  };
}
