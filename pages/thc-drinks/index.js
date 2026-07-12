import Head from 'next/head';
import ContentWrapper from '../../components/ContentWrapper';
import styles from '../../styles/pages/THC.module.scss';

export default function THCMain() {
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
        <h2>THC Recipes</h2>
        <ul>
          <li>THC Mai Tai</li>
          <li>THC Ranch Water</li>
          <li>THC Transfusion</li>
          <li>THC Margarita</li>
          <li>THC Gin and Tonic riff</li>
        </ul>
        <button>View All THC Recipes</button>
        <h2>THC Drink Reviews</h2>
        <ul>
          <li>Crescent 9 review</li>
          <li>Better Than Booze review</li>
          <li>Willie's Remedy review</li>
        </ul>
        <button>View All THC Recipes</button>
        <h2>THC Guides and Answers</h2>
        <ul>
          <li>THC drinks versus alcohol</li>
          <li>Do THC drinks cause hangovers?</li>
          <li>Can you mix THC and alcohol?</li>
          <li>2 mg versus 5 mg versus 10 mg</li>
          <li>Are THC drinks legal?</li>
        </ul>
        <p>
          Safety and legal note: THC products are intended for adults 21 and older. Effects vary by person and product.
          Start with a low dose, allow adequate time before consuming more, and do not drive after use. Laws and
          availability vary by location.
        </p>
      </div>
    </ContentWrapper>
  );
}
