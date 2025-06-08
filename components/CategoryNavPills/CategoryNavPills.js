import Link from 'next/link';
import styles from './CategoryNavPills.module.scss';

export default function CategoryNavPills(props) {
    return (
        <div className={styles['category-nav-pills']}>
            
            <Link href="/cocktail-recipes">All Cocktails</Link>
            <Link
                href="/cocktail-recipes?category=mezcal"
                className={props.cocktailCategory === "mezcal" ? styles.active : undefined}
            >Mezcal Cocktails</Link>
            <Link
                href="/cocktail-recipes?category=tequila"
                className={props.cocktailCategory === "tequila" ? styles.active : undefined}
            >Tequila Cocktails</Link>
            <Link
                href="/cocktail-recipes?category=whiskey"
                className={props.cocktailCategory === "whiskey" ? styles.active : undefined}
            >Whiskey Cocktails</Link>
            <Link
                href="/cocktail-recipes?category=rum"
                className={props.cocktailCategory === "rum" ? styles.active : undefined}
            >Rum Cocktails</Link>
            <Link
                href="/cocktail-recipes?category=cachaça"
                className={props.cocktailCategory === "cachaça" ? styles.active : undefined}
            >Cachaça Cocktails</Link>
            <Link
                href="/cocktail-recipes?category=gin"
                className={props.cocktailCategory === "gin" ? styles.active : undefined}
            >Gin Cocktails</Link>
            <Link
                href="/cocktail-recipes?category=vodka"
                className={props.cocktailCategory === "vodka" ? styles.active : undefined}
            >Vodka Cocktails</Link>
        </div>
    );
}