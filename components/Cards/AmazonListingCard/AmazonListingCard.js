import React from 'react';
import Image from 'next/image';
import { AmazonListingCardStyles } from './AmazonListingCard.styled';

export default function AmazonListingCard(props) {
  return (
    <AmazonListingCardStyles className="listing-card">
      <div className="product-info">
        <h2>{props.productName}</h2>
        <a href={props.amazonLink} target="_blank" rel="noopener noreferrer">
          Purchase
        </a>
      </div>

      <div className="product-pic">
      {props.amazonPhotoURL && <Image 
          alt={props.productName}
          layout="fill"
          objectFit="contain"
          border="0" 
          src={props.amazonPhotoURL} />}
        
        {/* <img src={`https://ir-na.amazon-adsystem.com/e/ir?t=onedrinkthree-20&language=en_US&l=li2&o=1&a=${props.amazonASIN}`} width="1" height="1" border="0" alt="" /> */}
      </div>
    </AmazonListingCardStyles>
  );
}
