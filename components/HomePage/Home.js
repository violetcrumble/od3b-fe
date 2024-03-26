
import React from 'react';
import Link from 'next/link';
import { HomeStyles } from './Home.styled.js';
import HeroImage from '../HeroImage/HeroImage';
import { ContentWrapperConstrainedStyles } from '../../components/ContentWrapperConstrained.styled';
import RecipeListingCard from '../Cards/RecipeListingCard/RecipeListingCard.js';
import { Listing3ColStyles } from '../Listings3Col.styled.js';
import filterRecipesByCategory from '../../utils/filterRecipesByCategory.js';

export default function HomePage({recipes}) {

    return (
        <HomeStyles>
            <div className="hero-wrapper">
                <HeroImage />
            </div>

            <div className="tequila-recipes-section recipes-section">
                <ContentWrapperConstrainedStyles>
                <h1>Tequila Recipes</h1>
                <p>Looking for something beyond a tequila sunrise? Whether you want the combination of tequila, lime juice, and orange liqueur in a margarita or you&apos;re in the mood for a crisp, refreshing ranch water, we&apos;re sure to have a tequila cocktail for you!</p>
                <Listing3ColStyles>
                {filterRecipesByCategory("tequila", recipes).slice(0,3).map((recipe, index) => (
              <Link className="listing-card" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                <RecipeListingCard  recipe={recipe} />
              </Link>
            ))}
                </Listing3ColStyles>
                </ContentWrapperConstrainedStyles>
            </div>

            <div className="whiskey-recipes-section recipes-section">
                <ContentWrapperConstrainedStyles>
                <h1>Whiskey Recipes</h1>
                <p>From classic bourbon old fashioneds to equal parts bangers like the paper plane, there&apos;s a whiskey cocktai recipe here for you.</p>
                <Listing3ColStyles>
                {filterRecipesByCategory("whiskey", recipes).slice(0,3).map((recipe, index) => (
              <Link className="listing-card" key={index} href={`/cocktail-recipes/${recipe.attributes.recipeUrlSlug}`} rel="canonical">
                <RecipeListingCard  recipe={recipe} />
              </Link>
            ))}
                </Listing3ColStyles>
                </ContentWrapperConstrainedStyles>
            </div>

            <div className="rum-recipes-section recipes-section">
                <ContentWrapperConstrainedStyles>
                <h1>Rum Cocktail Recipes</h1>
                <p>From tiki classics to espresso martini riffs, we have some great rum recipes!</p>
                <Listing3ColStyles>
                {filterRecipesByCategory("rum", recipes).slice(0,3).map((recipe, index) => (
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