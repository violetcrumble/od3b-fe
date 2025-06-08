import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './NavMenu/NavMenu';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo-skull-only.svg" alt="" width="72" height="95" className={styles.logo} />
        <div className={styles['logo-text']}>Cocktail Underground</div>
      </Link>
      <NavMenu />
    </header>
  );
}
