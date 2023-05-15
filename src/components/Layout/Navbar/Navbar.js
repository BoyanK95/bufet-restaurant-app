import Link from 'next/link';
import DarkLogo from '@/components/Logo/DarkLogo';
import styles from './Navbar.module.css';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

function NavbarCustomComponent() {
    return (
        <>
            <nav className={styles.nav}>
                <Link href='/'>
                    <DarkLogo />
                </Link>
                <ul>
                    <li>
                        <Link href='/menu-of-the-day'>Меню на Деня</Link>
                    </li>
                    <li>
                        <Link href='/menu'>Меню</Link>
                    </li>
                    <li>
                        <Link href='/about'>За нас</Link>
                    </li>
                </ul>
                <HeaderCartButton />
            </nav>
        </>
    );
}

export default NavbarCustomComponent;
