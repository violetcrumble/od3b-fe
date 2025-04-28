import React from 'react';
import Image from 'next/image';

export default function RecipeListingCard(props) {
    return (

        <div className="rounded-lg shadow-xl bg-white">

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

            <div className="p-5">
                <h3 className="text-brand-primary font-bold">{props.recipe.attributes.title}</h3>
            </div>
        </div>

    );
}
