import React, { useState } from 'react';
import styles from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { searchCocktailsByName, fetchFilterList, Filter } from '../../app/store/cocktails/cocktails.slice';
import { Icocktail } from '../../app/interfaces/Icocktails';

import { Input } from '../../components/Inputs';
import Cocktail from '../../features/cocktail/Cocktail';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [serchValue, setSerchValue] = useState('');
    const cocktails: Icocktail[] = useAppSelector(state => state.cocktails.cocktails);
    // const categories: useA

    const searchByName = () => dispatch(searchCocktailsByName(serchValue));
    const openCocktailView = (id: string) => navigate(`/cocktail/${id}`);

    return <div>
        <Input value={serchValue} onChange={(val: string): void => setSerchValue(val)} onSubmit={searchByName}></Input>
        <div className={styles.cocktails}>
            {cocktails.map((cocktail: Icocktail) => <Cocktail key={cocktail.idDrink} onClick={() => openCocktailView(cocktail.idDrink)} cocktailData={cocktail}></Cocktail>)}
        </div>
        {/* <button onClick={() => dispatch(fetchFilterList(Filter.categories))}>Choose category</button> */}
    </div>;
}
