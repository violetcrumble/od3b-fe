import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { HeaderStyles } from './Header.styled';
import NavMenu from './NavMenu/NavMenu';

export default function Header() {
  return (
    <HeaderStyles className="header">
      <Link href="/" className="logo">
        <Image src="/logo.svg" layout="responsive" alt="One Drink Three Bars" width="200" height="70" />
      </Link>
      <NavMenu />
    </HeaderStyles>
  );
}
