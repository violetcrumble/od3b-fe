import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import BlogListingCard from '../../components/Cards/BlogListingCard/BlogListingCard';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import { GET_ALL_THC_RECIPES, GET_ALL_BLOG_POSTS } from '../../graphql/queries';
import THC_GUIDE_SLUGS from '../../utils/thcGuideSlugs';
import THC_REVIEW_SLUGS from '../../utils/thcReviewSlugs';
import styles from '../../styles/pages/THC.module.scss';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = (query) => ({
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const [recipesRes, blogRes] = await Promise.all([
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_THC_RECIPES)),
    fetch(`${URL}/graphql`, fetchParams(GET_ALL_BLOG_POSTS)),
  ]);
  const data = await recipesRes.json();
  const blogData = await blogRes.json();

  const guides = blogData.data.blogPosts.data.filter((post) => THC_GUIDE_SLUGS.includes(post.attributes.urlSlug));
  const reviews = blogData.data.blogPosts.data.filter((post) => THC_REVIEW_SLUGS.includes(post.attributes.urlSlug));

  return {
    props: {
      recipes: data.data.recipes.data.slice(0, 3),
      guides,
      reviews,
    },
  };
}

export default function THCMain({ recipes, guides, reviews }) {
  return (
    <ContentWrapper>
      <Head>
        <title>Cocktail Underground - THC Drinks</title>
        <meta name="description" content="THC Drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles['thc-page']} constrained-content`}>
        <h1 className="text-brand-purple">THC Drinks, Recipes and Reviews</h1>
        <p>
          Curious about THC drinks but not sure where to begin? Explore tested THC cocktail recipes, honest canned-drink
          reviews, dosage guides, and practical answers about hemp-derived THC beverages.
        </p>

        <h2 className="text-brand-teal">THC Recipes</h2>
        <div className="listings-3-col">
          {recipes.map((recipe, index) => (
            <Link
              className="listing-card"
              key={recipe.attributes.recipeUrlSlug}
              href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`}
              rel="canonical"
            >
              <RecipeListingCard recipe={recipe} priority={index === 0} />
            </Link>
          ))}
        </div>
        <Link href="/thc-drinks/recipes">
          <button>View All THC Recipes</button>
        </Link>

        <hr></hr>

        <h2 className="text-brand-teal">THC Drink Reviews</h2>
        <div className="listings-3-col">
          {reviews.map((review) => (
            <Link
              className="listing-card"
              key={review.attributes.urlSlug}
              href={`/blog/${review.attributes.urlSlug}`}
              rel="canonical"
            >
              <BlogListingCard blogPost={review} />
            </Link>
          ))}
          <div className="listing-card"></div>
        </div>
        <Link href="/thc-drinks/reviews">
          <button>View All THC Reviews</button>
        </Link>

        <hr></hr>

        {/* Renders only once guide posts are published in Strapi */}
        {guides.length > 0 && (
          <>
            <h2 className="text-brand-teal">THC Guides and Answers</h2>
            <div className="listings-3-col">
              {guides.map((guide) => (
                <Link
                  className="listing-card"
                  key={guide.attributes.urlSlug}
                  href={`/blog/${guide.attributes.urlSlug}`}
                  rel="canonical"
                >
                  <BlogListingCard blogPost={guide} />
                </Link>
              ))}
            </div>
            <Link href="/thc-drinks/guides">
              <button>View All THC Guides</button>
            </Link>
          </>
        )}

        <NewsletterSignup />

        <p className={styles['legal-note']}>
          Safety and legal note: THC products are intended for adults 21 and older. Effects vary by person and product.
          Start with a low dose, allow adequate time before consuming more, and do not drive after use. Laws and
          availability vary by location.
        </p>
      </div>
    </ContentWrapper>
  );
}
