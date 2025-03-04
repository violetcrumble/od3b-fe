
import { CategoryNavPillsStyles } from "./CategoryNavPills.styled";

export default function CategoryNavPills(props) {

    return <CategoryNavPillsStyles>
        <li className={!props.cocktailCategory && "active"}
            onClick={() => {
                props.setCocktailCategory();
            }
            }>All Cocktails</li>
        
        <li className={props.cocktailCategory === "mezcal" && "active"}
            onClick={() => {
                props.setCocktailCategory("mezcal");
            }
            }>Mezcal Cocktails</li>

        <li className={props.cocktailCategory === "tequila" && "active"}
            onClick={() => {
                props.setCocktailCategory("tequila");
            }
            }>Tequila Cocktails</li>

        <li className={props.cocktailCategory === "whiskey" && "active"}
            onClick={() => {
                props.setCocktailCategory("whiskey");
            }
            }>Whiskey Cocktails</li>

        <li className={props.cocktailCategory === "rum" && "active"}
            onClick={() => {
                props.setCocktailCategory("rum");
            }
            }>Rum Cocktails</li>

        <li className={props.cocktailCategory === "cachaça" && "active"}
            onClick={() => {
                props.setCocktailCategory("cachaça");
            }
            }>Cachaça Cocktails</li>

        <li className={props.cocktailCategory === "gin" && "active"}
            onClick={() => {
                props.setCocktailCategory("gin");
            }
            }>Gin Cocktails</li>

        <li className={props.cocktailCategory === "vodka" && "active"}
            onClick={() => {
                props.setCocktailCategory("vodka");
            }
            }>Vodka Cocktails</li>


    </CategoryNavPillsStyles>;
}
