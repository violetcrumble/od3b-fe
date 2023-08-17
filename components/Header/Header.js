import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { HeaderStyles } from "./Header.styled";

export default function Header() {
  return (
    
    <HeaderStyles>
      <Logo />
      <Link href="/">
        Home
      </Link>
      <Link href="/cocktail-recipes">
        Cocktail Recipes
      </Link>
      <Link href="/products">
        Products
      </Link>
      <Link href="/blog">
        Blog
      </Link>
    </HeaderStyles>
  );
}
