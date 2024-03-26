export default function filterRecipesByCategory(spiritsCategory, allRecipes) {
    let filteredByCategory = [];
    for (let i = 0; i < allRecipes.length; i++) {
        for (let j = 0; j < allRecipes[i].attributes.spirits.data.length; j++ ) {
            if (allRecipes[i].attributes.spirits.data[j].attributes.spirit === spiritsCategory) {
                filteredByCategory.push(allRecipes[i]);
            }
        }
      }
      return filteredByCategory;
  }