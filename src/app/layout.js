import NavbarCustomComponent from '@/components/Layout/Navbar/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang='bg'>
            <body>
                {children}
            </body>
        </html>
    );
}
