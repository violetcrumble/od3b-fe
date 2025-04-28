
import React from 'react';
import Link from 'next/link';
import HeroImage from '../HeroImage/HeroImage';
import RecipeListingCard from '../Cards/RecipeListingCard/RecipeListingCard.js';
import filterRecipesByCategory from '../../utils/filterRecipesByCategory.js';

export default function HomePage({recipes}) {

    return (
        <main>
            
            <HeroImage />
            <div className="bg-brand-secondary pt-8 pb-8">
              <div className="container mx-auto px-4">
                  <h1 className="text-lg text-white font-bold">Tequila Recipes</h1>
                  <p className="text-white pt-2 pb-4">Looking for something beyond a tequila sunrise? Whether you want the combination of tequila, lime juice, and orange liqueur in a margarita or you&apos;re in the mood for a crisp, refreshing ranch water, we&apos;re sure to have a tequila cocktail for you!</p>
                  <div className="md:flex md:flex-row md:justify-between md:gap-x-8">
                    {filterRecipesByCategory("tequila", recipes).slice(0,3).map((recipe, index) => (
                      <Link className="w-full md:w-1/3" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                        <RecipeListingCard recipe={recipe} />
                      </Link>
                  ))}
                  </div>
              </div>
            </div>

            <div className="bg-gray-darker pt-8 pb-8">
              <div className="container mx-auto px-4">
                  <h1 className="text-lg text-white font-bold">Whiskey Recipes</h1>
                  <p className="text-white pt-2 pb-4">From classic bourbon old fashioneds to equal parts bangers like the paper plane, there&apos;s a whiskey cocktai recipe here for you.</p>
                  <div className="flex flex-row justify-between md:gap-x-8">
                    {filterRecipesByCategory("whiskey", recipes).slice(0,3).map((recipe, index) => (
                      <Link className="w-full md:w-1/3" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                        <RecipeListingCard recipe={recipe} />
                      </Link>
                  ))}
                  </div>
              </div>
            </div>

            <div className="bg-brand-secondary pt-8 pb-8">
              <div className="container mx-auto px-4">
                  <h1 className="text-lg text-white font-bold">Rum Recipes</h1>
                  <p className="text-white pt-2 pb-4">From tiki classics to espresso martini riffs, we have some great rum recipes!</p>
                  <div className="flex flex-row justify-between md:gap-x-8">
                    {filterRecipesByCategory("rum", recipes).slice(0,3).map((recipe, index) => (
                      <Link className="w-full md:w-1/3" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                        <RecipeListingCard recipe={recipe} />
                      </Link>
                  ))}
                  </div>
              </div>
            </div>

        </main>
    );
}