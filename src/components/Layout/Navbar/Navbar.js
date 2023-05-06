import Link from 'next/link';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import classes from './Navbar.module.css';
import DarkLogo from '@/components/Logo/DarkLogo';

function NavbarCustomComponent() {
    return (
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/'>
                            <DarkLogo />
                        </Link>
                    </li>
                    <li>
                        <Link href='/menu-of-the-day'>Меню На Деня</Link>
                    </li>
                    <li>
                        <Link href='/menu-of-the-day'>Menu</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavbarCustomComponent;
