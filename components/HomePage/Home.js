
import React from 'react';
import Link from 'next/link';
import { HomeStyles } from './Home.styled.js';
import HeroImage from '../HeroImage/HeroImage';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import RecipeListingCard from '../Cards/RecipeListingCard/RecipeListingCard.js';
import { Listing3ColStyles } from '../Listings3Col.styled.js';

export default function HomePage({recipes}) {
    
    function filterRecipes(spiritsCategory) {
        let filteredByCategory = [];
        for (let i = 0; i < recipes.length; i++) {
            for (let j = 0; j < recipes[i].attributes.spirits.data.length; j++ ) {
                if (recipes[i].attributes.spirits.data[j].attributes.spirit === spiritsCategory) {
                    filteredByCategory.push(recipes[i]);
                }
            }
          }
          return filteredByCategory;
    }

    return (
        <HomeStyles>
            <div className="hero-wrapper">
                <HeroImage />
            </div>

            <div className="tequila-recipes-section recipes-section">
                <ContentWrapperConstrainedStyles>
                <h2>Tequila Recipes</h2>
                <p>Looking for something beyond a tequila sunrise? Whether you want the combination of tequila, lime juice, and orange liqueur in a margarita or you're in the mood for a crisp, refreshing ranch water, we're sure to have a tequila cocktail for you!</p>
                <Listing3ColStyles>
                {filterRecipes("tequila").slice(0,3).map((recipe, index) => (
              <Link className="listing-card" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                <RecipeListingCard  recipe={recipe} />
              </Link>
            ))}
                </Listing3ColStyles>
                </ContentWrapperConstrainedStyles>
            </div>

            <div className="whiskey-recipes-section recipes-section">
                <ContentWrapperConstrainedStyles>
                <h2>Whiskey Recipes</h2>
                <p>From classic bourbon old fashioneds to equal parts bangers like the paper plane, there's a whiskey cocktai recipe here for you.</p>
                <Listing3ColStyles>
                {filterRecipes("whiskey").slice(0,3).map((recipe, index) => (
              <Link className="listing-card" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                <RecipeListingCard  recipe={recipe} />
              </Link>
            ))}
                </Listing3ColStyles>
                </ContentWrapperConstrainedStyles>
            </div>
        </HomeStyles>
    );
}