import React from 'react';
import classes from './Header.module.css';
import Image from 'next/image';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <div>
                    <Image
                        src='/assets/logo/bufet-logo-transperant.png'
                        width={200}
                        height={200}
                        alt='Logo'
                    />
                </div>
            </header>
            <div className={classes['main-image']}></div>
        </>
    );
};

export default Header;
