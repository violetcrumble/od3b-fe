import React from 'react';

import { RecipeListingCardStyles } from './RecipeListingCard.styled';

export default function RecipeListingCard(props) {
    return (
        
        <RecipeListingCardStyles>
            {props.recipe.attributes.PhotoMain.data && 
            props.recipe.attributes.PhotoMain.data.attributes.url ? 
            <img width="500" src={props.recipe.attributes.PhotoMain.data.attributes.url} alt={props.recipe.attributes.PhotoMain.data.attributes.caption }  /> : <div className="no-pic">picture not available</div>}
            
            <div className="recipe-info">
                <h2>{props.recipe.attributes.title}</h2>
            </div>
        </RecipeListingCardStyles>
        
    );
}
