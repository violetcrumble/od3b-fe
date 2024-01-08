import React from 'react';
import Link from 'next/link';

import { HeaderStyles } from './Header.styled';
import NavMenu from './NavMenu/NavMenu';

export default function Header() {
  return (
    <HeaderStyles className="header">
      <Link href="/" className="logo">
        <img src="/logo.svg" alt="One Drink Three Bars" />
      </Link>
      <NavMenu />
    </HeaderStyles>
  );
}
