export default function getRelatedRecipes(currentRecipe, allRecipes, limit = 3) {
  const currentSpirits = currentRecipe.spirits_connection.data.map((spirit) => spirit.attributes.spirit);

  return allRecipes
    .filter((recipe) => recipe.attributes.recipeUrlSlug !== currentRecipe.recipeUrlSlug)
    .filter((recipe) =>
      recipe.attributes.spirits_connection.data.some((spirit) => currentSpirits.includes(spirit.attributes.spirit)),
    )
    .slice(0, limit);
}
