import React from 'react';
import cls from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={cls.nav}>
                <div className={cls.item}><a href='/Profile'>Profile</a></div>
                <div className={cls.item}><a href='/News'>News</a></div>
                <div className={cls.item}><a href='/Dialogs'>Dialogs</a></div>
                <div className={cls.item}><a href='/Friends'>Friends</a></div>
                <div className={cls.item}><a href='/Music'>Music</a></div>
                <div className={cls.item}><a href='/Settings'>Settings</a></div>
        </nav>
    );
}

export default Navbar;