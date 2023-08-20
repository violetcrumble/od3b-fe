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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cocktail-recipes">Cocktail Recipes</Link>
        </li>
        <li>
          <Link href="/home-bar-supplies">Home Bar Supplies</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
