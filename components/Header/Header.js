import React from 'react';

import Logo from '../Logo/Logo';
import { HeaderStyles } from './Header.styled';
import NavMenu from './NavMenu/NavMenu';

export default function Header() {
  return (
    <HeaderStyles className="header">
      <a href="" className="logo">
        <Logo />
      </a>

      <NavMenu />
    </HeaderStyles>
  );
}
