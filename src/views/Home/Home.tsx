import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

import { PrimaryBtn } from '../../components/Buttons/';
import Cocktail from '../../features/cocktail/Cocktail'

export default function Home() {
    const navigate = useNavigate();

    const goToSearch = (): void => navigate('/search');

    return <div className={styles.home}>
        <h2 className={styles.title}>
            Cocktail helper
        </h2>
        <p className={styles.description}>This awsame project can help you create amazing cocktails!</p>
        <div className={styles.details}>
            <p className={styles.details__text}>You can click 'search' and find somthing what you like</p>
            <PrimaryBtn text={'Search'} action={goToSearch}></PrimaryBtn>
            <p className={styles.details__text}>or try this cocktail</p>
            <Cocktail></Cocktail>
        </div>
    </div>;
}
