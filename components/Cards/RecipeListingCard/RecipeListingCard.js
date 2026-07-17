import Image from 'next/image';
import styles from './RecipeListingCard.module.scss';

export default function RecipeListingCard(props) {
  const sizes = props.sizes || '(max-width: 600px) 100vw, (max-width: 900px) 48vw, 29vw';

  return (
    <div className={styles['recipe-listing-card']}>
      {props.recipe.attributes.PhotoMain_connection.data[0] &&
      props.recipe.attributes.PhotoMain_connection.data[0].attributes.url ? (
        <div className="imageWrapper">
          <Image
            src={props.recipe.attributes.PhotoMain_connection.data[0].attributes.url}
            alt={`${props.recipe.attributes.title} Cocktail Recipe`}
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
        <h3>{props.recipe.attributes.title}</h3>
      </div>
    </div>
  );
}
