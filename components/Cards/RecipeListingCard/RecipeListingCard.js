import React from 'react';
import Image from 'next/image';

import { RecipeListingCardStyles } from './RecipeListingCard.styled';

export default function RecipeListingCard(props) {
    return (
        
        <RecipeListingCardStyles>
            {props.recipe.attributes.PhotoMain.data && 
            props.recipe.attributes.PhotoMain.data.attributes.url ? 
            <Image
                  alt={props.recipe.attributes.PhotoMain.data.attributes.caption }
                  border="0"
                  width="500"
                  height="500"
                  src={props.recipe.attributes.PhotoMain.data.attributes.url} />
             : <div className="no-pic">picture not available</div>}
            
            <div className="recipe-info">
                <h2>{props.recipe.attributes.title}</h2>
            </div>
        </RecipeListingCardStyles>
        
    );
}
