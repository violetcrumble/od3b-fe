import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroStyles } from './HeroImage.styled';
import heroBanner from '../../public/hero4.jpg';

export default function HeroImage() {
  return (
    <HeroStyles>
      <div className="imageWrapper">
        <Image
          priority
          src={heroBanner}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className="heroContent">
      <h1>Cocktail Recipes, Tips & Tricks</h1>
      <p>
          At One Drink Three Bars, we&apos;re dedicated to empowering people to create excellent craft cocktails at home, and
          to discover the best bars. Our goal is to bridge the gap between ordinary and extraordinary beverages, all
          while fostering an inclusive and unpretentious approach.</p>

          <Link href="https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ" target="_blank" className="youtube-button">Watch Our YouTube Videos</Link>

          
      </div>
    </HeroStyles>
  );
}




