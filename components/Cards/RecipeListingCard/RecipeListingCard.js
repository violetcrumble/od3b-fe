import Image from 'next/image';
import styles from './RecipeListingCard.module.scss';

export default function RecipeListingCard(props) {
    return (

        <div className={styles['recipe-listing-card']}>

            {props.recipe.attributes.PhotoMain.data[0] &&
                props.recipe.attributes.PhotoMain.data[0].attributes.url ?
                <div className={styles.imageWrapper}>
                <Image
                    src={props.recipe.attributes.PhotoMain.data[0].attributes.url}
                    alt={props.recipe.attributes.title}
                    fill
                />
                </div>
                :
                <div className="no-pic">
                    <Image
                        src="/pic-not-available.gif"
                        alt="Image not Available"
                        fill
                    />
                </div>}

            <div className={styles.recipeInfo}>
                <h6>{props.recipe.attributes.title}</h6>
            </div>
        </div>

    );
}
