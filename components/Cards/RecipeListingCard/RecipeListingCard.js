import React from 'react';
import Image from 'next/image';

export default function RecipeListingCard(props) {
    return (

        <div className="rounded-lg">

            {props.recipe.attributes.PhotoMain.data[0] &&
                props.recipe.attributes.PhotoMain.data[0].attributes.url ?
                <Image
                    src={props.recipe.attributes.PhotoMain.data[0].attributes.url}
                    alt={props.recipe.attributes.title}
                    layout="responsive"
                    width="500"
                    height="500"
                    className="rounded-lg"
                />
                :
                <div className="no-pic">
                    <Image
                        src="/pic-not-available.gif"
                        alt="Image not Available"
                        layout="responsive"
                        width="500"
                        height="500"
                        className="rounded-lg"
                    />
                </div>}

            <div className="recipe-info">
                <h3>{props.recipe.attributes.title}</h3>
            </div>
        </div>

    );
}
