function hashSlug(slug) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < slug.length; i += 1) {
    hash ^= slug.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

export default function getRelatedRecipes(currentRecipe, allRecipes, limit = 3) {
  const currentSpirits = currentRecipe.spirits.map((spirit) => spirit.spirit);

  const matches = allRecipes
    .filter((recipe) => recipe.recipeUrlSlug !== currentRecipe.recipeUrlSlug)
    .filter((recipe) => recipe.spirits.some((spirit) => currentSpirits.includes(spirit.spirit)));

  if (matches.length <= limit) return matches;

  const offset = hashSlug(currentRecipe.recipeUrlSlug) % matches.length;
  return Array.from({ length: limit }, (_, i) => matches[(offset + i) % matches.length]);
}
