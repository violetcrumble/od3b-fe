import React from 'react';
import { SocialLinkStyles } from './SocialLinks.styled';
import Image from 'next/image';
import facebookIcon from '../../public/facebook.svg';
import youtubeIcon from '../../public/youtube.svg';
import instagramIcon from '../../public/instagram.svg';
import tiktokIcon from '../../public/tiktok.svg';

export default function SocialLinks() {
    return <SocialLinkStyles>
        <li><a href="https://www.youtube.com/@OneDrinkThreeBars" target="_blank" rel="noopener noreferrer"><Image
            priority
            src={youtubeIcon}
            alt="Subscribe on YouTube"
            height={32}
      width={32}
        /></a></li>
        <li><a href="https://www.facebook.com/onedrinkthreebars/" target="_blank" rel="noopener noreferrer"><Image
            priority
            src={facebookIcon}
            alt="Follow me on Facebook"
            height={32}
      width={32}
        /></a></li>
        <li><a href="https://www.instagram.com/onedrinkthreebars/" target="_blank" rel="noopener noreferrer"><Image
            priority
            src={instagramIcon}
            alt="Follow me on Instagram"
            height={32}
      width={32}
        /></a></li>
        <li><a href="https://www.tiktok.com/@onedrinkthreebars" target="_blank" rel="noopener noreferrer"><Image
            priority
            src={tiktokIcon}
            alt="Follow me on TikTok"
            height={32}
      width={32}
        /></a></li>
    </SocialLinkStyles>;
}
