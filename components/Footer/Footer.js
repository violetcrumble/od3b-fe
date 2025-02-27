import React from 'react';
import { FooterStyles } from './Footer.styled';
import SocialLinks from '../SocialLinks/SocialLinks';
import Link from 'next/link';
import Image from 'next/image';

var currentTime = new Date();

export default function Footer() {
  return <FooterStyles>

    <div className="footer-grid-main">
      
      <div className="footer-logo">
        <Link href="/" className="logo">
          <Image src="/logo.svg" layout="responsive" alt="Cocktail Underground" width="200" height="70" />
        </Link>
      </div>

      <div className="footer-main-nav footer-nav">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/cocktail-recipes">Cocktail Recipes</Link></li>
          <li><Link href="/blog">Articles</Link></li>
          <li><Link href="/home-bar-supplies">Home Bar Supplies</Link></li>
          <li><Link href="/friends">Our Friends</Link></li>
        </ul>
      </div>

      {/* <div className="footer-recipe-nav footer-nav">
        <ul>
          <li>Tequila Cocktail Recipes</li>
          <li>Mezcal Cocktail Recipes</li>
          <li>Whiskey Cocktail Recipes</li>
          <li>Rum Cocktail Recipes</li>
          <li>Cachaca Cocktail Recipes</li>
          <li>Gin Cocktail Recipes</li>
          <li>Vodka Cocktail Recipes</li>
        </ul>
      </div> */}

    </div>

    <div className="footer-social-copy">
      <SocialLinks />
      <p>Copyright &copy; {currentTime.getFullYear()} Cocktail Underground</p>
    </div>

    
  </FooterStyles>;
}
