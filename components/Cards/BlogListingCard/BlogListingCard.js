import React from 'react';

import { BlogListingCardStyles } from './BlogListingCard.styled';

export default function BlogListingCard(props) {
    
    return (
        <BlogListingCardStyles>
           <h2>{props.blogPost.attributes.Title}</h2>
           <p>By: {props.blogPost.attributes.blog_authors.data[0].attributes.AuthorName} | {props.blogPost.attributes.Date}</p>
           <p>Blog Image</p>
           <p>TextPreviewSnippet</p>
        </BlogListingCardStyles>
    );
}
