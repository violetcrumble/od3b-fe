import React from 'react';

import { BlogListingCardStyles } from './BlogListingCard.styled';

export default function BlogListingCard(props) {
    
    return (
        <BlogListingCardStyles>
           
           <div className="byline-date">
            <h2>{props.blogPost.attributes.Title}</h2>
            <p>By: {props.blogPost.attributes.blog_authors.data[0].attributes.AuthorName} | {props.blogPost.attributes.Date}</p>
            </div>
           
           {props.blogPost.attributes.ListingCardImage.data && 
            props.blogPost.attributes.ListingCardImage.data.attributes.url ? 
            <img width="500" src={props.blogPost.attributes.ListingCardImage.data.attributes.url} alt={props.blogPost.attributes.ListingCardImage.data.attributes.caption }  /> : 
            
            <div className="no-pic"><img src="/pic-not-available.gif" alt="Image not Available" /></div>}
           
           <div className="text-snippet">
           <p>{props.blogPost.attributes.TextPreviewSnippet} <u>Read More...</u></p>
           </div>
           
        </BlogListingCardStyles>
    );
}
