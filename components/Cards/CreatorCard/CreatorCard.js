import React from 'react';

import { CreatorCardStyles } from './CreatorCard.styled';
import Markdown from 'react-markdown';

export default function CreatorCard(props) {
    return (
        <CreatorCardStyles>
            <h2>{props.name}</h2>
            
            <div className="creator-info">
            
                
                
                <div>
                    <p><a href={props.youTubeURL} target="_blank" rel="noopener noreferrer">YouTube</a> | <a href={props.instagramURL} target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    <Markdown>{props.bio}</Markdown>
                </div>

                <div className="creator-image-container"><img src={props.creatorImage.src} alt={props.name} /></div>
            
            </div>
        </CreatorCardStyles>
    );
}
