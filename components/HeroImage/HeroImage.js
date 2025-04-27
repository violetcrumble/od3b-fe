import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroBanner from '../../public/hero5.jpg';

export default function HeroImage() {
  return (
    <div className="relative w-100% h-150">
      <div className="z--1">
        <Image
          priority
          src={heroBanner}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className="relative m-0 20px">
        
        <h3 className="text-white text-3xl text-shadow-lg/20 p-50 0 0 0">
          Empowering you to create craft cocktails at home</h3>
        <Link href="https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ" target="_blank" 
          className="text-white bg-brand-tertiary no-underline p-5 font-bold text-shadow-lg/20 rounded-md">Watch Our YouTube Videos</Link>

      </div>
    </div>
  );
}