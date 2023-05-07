import './globals.css';
import Header from '@/components/Layout/Header/Header';

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
