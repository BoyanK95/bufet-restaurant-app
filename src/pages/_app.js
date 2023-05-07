import Layout from '@/components/Layout/Layout';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
