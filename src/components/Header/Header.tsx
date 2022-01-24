import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="" />
            </Link>
            <nav className={styles.nav}>
                <Link to="/" className={styles.nav__link}>Home</Link>
                <Link to="/my-cocktails" className={styles.nav__link}>My cocktails</Link>
                <Link to="/search" className={styles.nav__link}>Search</Link>
            </nav>
        </header>
    );
}

export default Header;
