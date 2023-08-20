import React from 'react';
import { AmazonListingCardStyles } from './AmazonListingCard.styled';

export default function AmazonListingCard(props) {
  return (
    <AmazonListingCardStyles>
      <h2>{props.productName}</h2>
      <p>Category: {props.productCategory}</p>
      <a href={props.amazonLink} target="_blank" rel="noopener noreferrer">
        Amazon Link
      </a>
    </AmazonListingCardStyles>
  );
}
