import { CategoryNavPillsStyles } from "./CategoryNavPills.styled";

// TODO: make this much more generic for reuse!
export default function CategoryNavPills(props) {
    return <CategoryNavPillsStyles>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipes("tequila", props.recipes))}>Tequila Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipes("mezcal", props.recipes))}>Mezcal Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipes("whiskey", props.recipes))}>Whiskey Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipes("rum", props.recipes))}>Rum Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipes("gin", props.recipes))}>Gin Cocktails</li>
        <li onClick={() => props.setFilteredRecipes(props.filterRecipes("vodka", props.recipes))}>Vodka Cocktails</li>
    </CategoryNavPillsStyles>;
}
