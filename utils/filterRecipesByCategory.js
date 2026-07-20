export default function filterRecipesByCategory(spiritsCategory, allRecipes) {
  return allRecipes.filter((recipe) => recipe.spirits.some((spirit) => spirit.spirit === spiritsCategory));
}
