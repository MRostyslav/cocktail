import React from 'react';
import styles from './Cocktail.module.scss'

import { Icocktail } from '../../app/interfaces/Icocktails';

import { IngridientChips } from '../../components/Chips';

export default function Cocktail({ cocktailData }: { cocktailData: Icocktail }) {
    return (
        <div className={styles.cocktail} style={{ backgroundImage: `url(${cocktailData?.strDrinkThumb})` }}>
            <div className={styles.cocktail__header}>
                <h4 className={styles.header__title}>{cocktailData?.strDrink}</h4>
                <h3 className={styles.header__subtitle}>{cocktailData?.strDrinkAlternate}</h3>
            </div>
            <div className={styles.cocktail__chips}>
                {cocktailData?.strIngredient1 && <IngridientChips title={cocktailData.strIngredient1}></IngridientChips>}
                {cocktailData?.strIngredient2 && <IngridientChips title={cocktailData.strIngredient2}></IngridientChips>}
                {cocktailData?.strIngredient3 && <IngridientChips title={cocktailData.strIngredient3}></IngridientChips>}
                {cocktailData?.strIngredient4 && <IngridientChips title={cocktailData.strIngredient4}></IngridientChips>}
                {cocktailData?.strIngredient5 && <IngridientChips title={cocktailData.strIngredient5}></IngridientChips>}
                {cocktailData?.strIngredient6 && <IngridientChips title={cocktailData.strIngredient6}></IngridientChips>}
                {cocktailData?.strIngredient7 && <IngridientChips title='and more..'></IngridientChips>}
            </div>
        </div >
    );
}
