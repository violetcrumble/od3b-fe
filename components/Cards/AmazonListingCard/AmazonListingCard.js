import React from 'react';
import Image from 'next/image';

export default function AmazonListingCard(props) {
  return (
    <div className="bg-white flex">
      <div className="p-10 w-1/2">
        <h2>{props.productName}</h2>
        <a className="bg-brand-primary text-white" href={props.amazonLink} target="_blank" rel="noopener noreferrer">
          Purchase
        </a>
      </div>

      <div className="relative m-15 min-height-160 w-1/2 text-center">
      {props.amazonPhotoURL && <Image 
          
          alt={props.productName}
          layout="fill"
          objectFit="contain"
          border="0" 
          src={props.amazonPhotoURL} />}
        
        {/* <img src={`https://ir-na.amazon-adsystem.com/e/ir?t=onedrinkthree-20&language=en_US&l=li2&o=1&a=${props.amazonASIN}`} width="1" height="1" border="0" alt="" /> */}
      </div>
    </div>
  );
}
