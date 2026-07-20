import Image from 'next/image';
import styles from './RecipeListingCard.module.scss';

export default function RecipeListingCard(props) {
  const sizes = props.sizes || '(max-width: 600px) 100vw, (max-width: 900px) 48vw, 29vw';

  return (
    <div className={styles['recipe-listing-card']}>
      {props.recipe.PhotoMain?.[0]?.url ? (
        <div className="imageWrapper">
          <Image
            src={props.recipe.PhotoMain[0].url}
            alt={`${props.recipe.title} Cocktail Recipe`}
            fill
            sizes={sizes}
            priority={props.priority}
          />
        </div>
      ) : (
        <div className="no-pic">
          <Image src="/pic-not-available.gif" alt="Image not Available" fill sizes={sizes} />
        </div>
      )}

      <div className={styles.recipeInfo}>
        <h3>{props.recipe.title}</h3>
      </div>
    </div>
  );
}
