import Link from "next/link";

function Navbar({children}) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/menu-of-the-day'>Меню На Деня</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}

export default Navbar;
