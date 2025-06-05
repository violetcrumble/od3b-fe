import Link from 'next/link';
import Image from 'next/image';

import NavMenu from './NavMenu/NavMenu';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <Image src="/logo.svg" layout="responsive" alt="Cocktail Underground" width="200" height="70" />
      </Link>
      <NavMenu />
    </header>
  );
}
