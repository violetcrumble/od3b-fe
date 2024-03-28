import { CategoryNavPillsStyles } from "./CategoryNavPills.styled";
// TODO: make this much more generic for reuse!
export default function CategoryNavPills(props) {
    return <CategoryNavPillsStyles>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipesByCategory("tequila", props.recipes))}>Tequila Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipesByCategory("mezcal", props.recipes))}>Mezcal Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipesByCategory("whiskey", props.recipes))}>Whiskey Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipesByCategory("rum", props.recipes))}>Rum Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipesByCategory("cachaça", props.recipes))}>Cachaça Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipesByCategory("gin", props.recipes))}>Gin Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipesByCategory("vodka", props.recipes))}>Vodka Cocktails</li>
        
    </CategoryNavPillsStyles>;
}
