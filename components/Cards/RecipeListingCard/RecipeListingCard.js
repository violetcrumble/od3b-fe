import React from 'react';

import { RecipeListingCardStyles } from './RecipeListingCard.styled';

export default function RecipeListingCard(props) {
    return (
        
        <RecipeListingCardStyles>
            
            {props.recipe.attributes.PhotoMain.data && 
            props.recipe.attributes.PhotoMain.data.attributes.url ? 
            <img width="500" src={props.recipe.attributes.PhotoMain.data.attributes.url} alt={props.recipe.attributes.title}  /> : 
            <div className="no-pic"><img src="/pic-not-available.gif" alt="Image not Available" /></div>}
            
            <div className="recipe-info">
                <h3>{props.recipe.attributes.title}</h3>
            </div>
        </RecipeListingCardStyles>
        
    );
}
