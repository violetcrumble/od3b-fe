import Image from 'next/image';
import styles from './RecipeListingCard.module.scss';

export default function RecipeListingCard(props) {
  return (
    <div className={styles['recipe-listing-card']}>
      {props.recipe.attributes.PhotoMain.data[0] && props.recipe.attributes.PhotoMain.data[0].attributes.url ? (
        <div className="imageWrapper">
          <Image
            src={props.recipe.attributes.PhotoMain.data[0].attributes.url}
            alt={`${props.recipe.attributes.title} Cocktail Recipe`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 48vw, 29vw"
            priority={props.priority}
          />
        </div>
      ) : (
        <div className="no-pic">
          <Image
            src="/pic-not-available.gif"
            alt="Image not Available"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 48vw, 29vw"
          />
        </div>
      )}

      <div className={styles.recipeInfo}>
        <h3>{props.recipe.attributes.title}</h3>
      </div>
    </div>
  );
}
