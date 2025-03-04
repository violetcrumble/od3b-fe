
import { CategoryNavPillsStyles } from "./CategoryNavPills.styled";

export default function CategoryNavPills(props) {

    return <CategoryNavPillsStyles>
        <li className={props.cocktailCategory === "mezcal" && "active"}
            onClick={() => {
                props.setFilteredRecipes(props.filterRecipesByCategory("mezcal", props.recipes));
                props.setCocktailCategory("mezcal");
            }
            }>Mezcal Cocktails</li>

        <li className={props.cocktailCategory === "tequila" && "active"}
            onClick={() => {
                props.setFilteredRecipes(props.filterRecipesByCategory("tequila", props.recipes));
                props.setCocktailCategory("tequila");
            }
            }>Tequila Cocktails</li>

        <li className={props.cocktailCategory === "whiskey" && "active"}
            onClick={() => {
                props.setFilteredRecipes(props.filterRecipesByCategory("whiskey", props.recipes));
                props.setCocktailCategory("whiskey");
            }
            }>Whiskey Cocktails</li>

        <li className={props.cocktailCategory === "rum" && "active"}
            onClick={() => {
                props.setFilteredRecipes(props.filterRecipesByCategory("rum", props.recipes));
                props.setCocktailCategory("rum");
            }
            }>Rum Cocktails</li>

        <li className={props.cocktailCategory === "cachaça" && "active"}
            onClick={() => {
                props.setFilteredRecipes(props.filterRecipesByCategory("cachaça", props.recipes));
                props.setCocktailCategory("cachaça");
            }
            }>Cachaça Cocktails</li>

        <li className={props.cocktailCategory === "gin" && "active"}
            onClick={() => {
                props.setFilteredRecipes(props.filterRecipesByCategory("gin", props.recipes));
                props.setCocktailCategory("gin");
            }
            }>Gin Cocktails</li>

        <li className={props.cocktailCategory === "vodka" && "active"}
            onClick={() => {
                props.setFilteredRecipes(props.filterRecipesByCategory("vodka", props.recipes));
                props.setCocktailCategory("vodka");
            }
            }>Vodka Cocktails</li>


    </CategoryNavPillsStyles>;
}
