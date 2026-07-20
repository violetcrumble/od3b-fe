export default function getRelatedRecipes(currentRecipe, allRecipes, limit = 3) {
  const currentSpirits = currentRecipe.spirits.map((spirit) => spirit.spirit);

  return allRecipes
    .filter((recipe) => recipe.recipeUrlSlug !== currentRecipe.recipeUrlSlug)
    .filter((recipe) => recipe.spirits.some((spirit) => currentSpirits.includes(spirit.spirit)))
    .slice(0, limit);
}
