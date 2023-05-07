import NavbarCustomComponent from '@/components/Layout/Navbar/Navbar';
import './globals.css';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';

export default function RootLayout({ children }) {
    return (
        <html lang='bg'>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
