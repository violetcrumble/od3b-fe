import Head from 'next/head';
import Link from 'next/link';
import ContentWrapper from '../../components/ContentWrapper';
import RecipeListingCard from '../../components/Cards/RecipeListingCard/RecipeListingCard';
import { GET_ALL_THC_RECIPES } from '../../graphql/queries';
import styles from '../../styles/pages/THC.module.scss';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_ALL_THC_RECIPES,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: {
      recipes: data.data.recipes.data.slice(0, 3),
    },
  };
}

export default function THCMain({ recipes }) {
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

        <h2 className="text-brand-teal">THC Drink Reviews</h2>
        <ul>
          <li>
            <Link href="/blog/crescent-9-thc-seltzer">Crescent 9 THC Seltzer Review</Link>
          </li>
          <li>
            <Link href="/blog/is-willies-remedy-legal-thc-drinks-explained">Is Willie&apos;s Remedy Legal?</Link>
          </li>
        </ul>
        <Link href="/thc-drinks/reviews">
          <button>View All THC Reviews</button>
        </Link>

        {/* Guides and Answers section - revisit later
        <h2 className="text-brand-teal">THC Guides and Answers</h2>
        <ul>
          <li>THC drinks versus alcohol</li>
          <li>Do THC drinks cause hangovers?</li>
          <li>Can you mix THC and alcohol?</li>
          <li>2 mg versus 5 mg versus 10 mg</li>
          <li>Are THC drinks legal?</li>
        </ul>
        <Link href="/thc-drinks/guides">
          <button>View All THC Guides</button>
        </Link>
        */}

        <p className={styles['legal-note']}>
          Safety and legal note: THC products are intended for adults 21 and older. Effects vary by person and product.
          Start with a low dose, allow adequate time before consuming more, and do not drive after use. Laws and
          availability vary by location.
        </p>
      </div>
    </ContentWrapper>
  );
}
