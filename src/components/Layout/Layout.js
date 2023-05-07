import Header from './Header/Header';
import classes from './Layout.module.css';

function Layout({ children }) {
    return (
        <div className={classes.header}>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
