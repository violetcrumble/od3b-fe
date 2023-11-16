import React from 'react';

import { HeaderStyles } from './Header.styled';
import NavMenu from './NavMenu/NavMenu';

export default function Header() {
  return (
    <HeaderStyles className="header">
      <a href="/" className="logo">
        <img src="/logo.svg" width="200" height="70" alt="One Drink Three Bars" />
      </a>
      <NavMenu />
    </HeaderStyles>
  );
}
