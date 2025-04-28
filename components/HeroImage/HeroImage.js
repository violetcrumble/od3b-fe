import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroBanner from '../../public/hero5.jpg';

export default function HeroImage() {
  return (
    <div className="relative w-100% h-50 md:h-75 lg:h-150">
      <div className="z--1 center">
        <Image
          priority
          src={heroBanner}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className="relative text-center m-0 20px">
        
        <h3 className="font-bold text-center text-white text-shadow-lg/20 pb-10 pt-10 text-2xl md:text-4xl md:pt-20 lg:text-6xl lg:pt-45">
          Empowering you to create craft cocktails at home</h3>
        <Link href="https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ" target="_blank" 
          className="text-white bg-brand-tertiary no-underline p-4 font-bold text-shadow-lg/20 rounded-md">Watch Our YouTube Videos</Link>

      </div>
    </div>
  );
}