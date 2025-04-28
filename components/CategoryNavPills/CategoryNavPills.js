
import { CategoryNavPillsStyles } from "./CategoryNavPills.styled";
import Link from 'next/link';

export default function CategoryNavPills(props) {

    return <CategoryNavPillsStyles>
        <Link href="/cocktail-recipes?category=mezcal">All Cocktails</Link>
        <Link href="/cocktail-recipes?category=mezcal" className={props.cocktailCategory === "mezcal" && "active"}>Mezcal Cocktails</Link>
        <Link href="/cocktail-recipes?category=tequila" className={props.cocktailCategory === "tequila" && "active"}>Tequila Cocktails</Link>
        <Link href="/cocktail-recipes?category=whiskey" className={props.cocktailCategory === "whiskey" && "active"}>Whiskey Cocktails</Link>
        <Link href="/cocktail-recipes?category=rum" className={props.cocktailCategory === "rum" && "active"}>Rum Cocktails</Link>
        <Link href="/cocktail-recipes?category=cachaça" className={props.cocktailCategory === "cachaça" && "active"}>Cachaça Cocktails</Link>
        <Link href="/cocktail-recipes?category=gin" className={props.cocktailCategory === "gin" && "active"}>Gin Cocktails</Link>
        <Link href="/cocktail-recipes?category=vodka" className={props.cocktailCategory === "vodka" && "active"}>Vodka Cocktails</Link>

    </CategoryNavPillsStyles>;
}