import Link from 'next/link';
import DarkLogo from '@/components/Logo/DarkLogo';
import classes from './Navbar.module.css';

function NavbarCustomComponent() {
    return (
        <>
            <nav className={classes.nav}>
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
                </ul>
            </nav>
        </>
    );
}

export default NavbarCustomComponent;
