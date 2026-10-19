import { GET_ALL_REVIEW_SLUGS, GET_REVIEW } from '../../graphql/queries';
import { strapiQuery } from '../../utils/strapiQuery';
import ReviewPage from '../../components/Review/ReviewPage/ReviewPage';
import { REVIEW_SECTIONS, reviewsInSection } from '../../utils/reviewSections';

// Bar gear and non-THC drink reviews. THC drink reviews build under
// /thc-drinks/reviews instead.
export default function Review({ review }) {
  return <ReviewPage review={review} section={REVIEW_SECTIONS.general} />;
}

export async function getStaticPaths() {
  const data = await strapiQuery(GET_ALL_REVIEW_SLUGS);

  const paths = reviewsInSection(data.reviews, REVIEW_SECTIONS.general).map((review) => {
    return { params: { reviewUrlSlug: review.reviewUrlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await strapiQuery(GET_REVIEW, { reviewUrlSlug: params.reviewUrlSlug });

  return {
    props: {
      review: data.reviews[0],
    },
  };
}
