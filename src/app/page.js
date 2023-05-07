import styles from './page.module.css';
import Layout from '@/components/Layout/Layout';

export default function Home() {
    return (
        <Layout>
            <main className={styles.main}>Home</main>
        </Layout>
    );
}
