import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Navbar.module.css';

function NavbarCustomComponent({ children }) {
    return (
        <>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/'>
                            <Image src='/assets/logo/bufet-logo-transperant.png' width={150} height={150} alt='Logo' />
                        </Link>
                    </li>
                    <li>
                        <Link href='/menu-of-the-day'>Меню На Деня</Link>
                    </li>
                    <li>
                        <Link href='/menu-of-the-day'></Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}

export default NavbarCustomComponent;
