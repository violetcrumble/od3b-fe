import React from 'react';
import Link from 'next/link';
import { NavMenuStyles } from './NavMenu.styled';

export default function NavMenu() {
  return (
    <NavMenuStyles>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li className="top-level-menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="top-level-menu-item cocktail-recipes-top-menu">
          <Link href="/cocktail-recipes">Cocktail Recipes</Link>
          {/* <ul className="sub-menu">
            <li><Link href="/cocktail-recipes?spirit=tequila">Tequila Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?spirit=whiskey">Whiskey Cocktail Recipes</Link></li>
            <li><Link href="/cocktail-recipes?spirit=rum">Rum Cocktail Recipes</Link></li>
          </ul> */}
        </li>
        <li className="top-level-menu-item">
          <Link href="/blog">Articles</Link>
        </li>
        <li className="top-level-menu-item">
          <Link href="/home-bar-supplies">Home Bar Supplies</Link>
        </li>
        <li className="top-level-menu-item">
          <Link href="/friends">Our Friends</Link>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
