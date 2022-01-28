import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { searchCocktailsByName, fetchFilterList, Filter, searchCocktailsByFilter } from '../../app/store/cocktails/cocktails.slice';
import { Icocktail } from '../../app/interfaces/Icocktails';

import { Input, Select } from '../../components/Inputs';
import Cocktail from '../../features/cocktail/Cocktail';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [serchValue, setSerchValue] = useState('');
    const cocktails: Icocktail[] = useAppSelector(state => state.cocktails.cocktails);
    const categories: string[] = useAppSelector(state => state.cocktails.categoryList);
    const alcoholic: string[] = useAppSelector(state => state.cocktails.alcoholicList);
    const glasses: string[] = useAppSelector(state => state.cocktails.glassesList);
    const ingredients: string[] = useAppSelector(state => state.cocktails.ingredientsList);

    useEffect(() => {
        dispatch(fetchFilterList(Filter.categories));
        dispatch(fetchFilterList(Filter.alcoholic));
        dispatch(fetchFilterList(Filter.glasses));
        dispatch(fetchFilterList(Filter.ingredients));
    }, []);


    const searchByName = () => dispatch(searchCocktailsByName(serchValue));
    const searchByFilter = (id: Filter, val: string) => dispatch(searchCocktailsByFilter({ id, val }));
    const openCocktailView = (id: string) => navigate(`/cocktail/${id}`);

    return <div className={styles.search}>
        <div className={styles.search__actions}>
            <Input value={serchValue} onChange={(val: string): void => setSerchValue(val)} onSubmit={searchByName}></Input>
            <div className={styles.search__filters}>
                <Select selectList={categories} onSelect={(val: string) => searchByFilter(Filter.categories, val)} ></Select>
                <Select selectList={alcoholic} onSelect={(val: string) => searchByFilter(Filter.alcoholic, val)} ></Select>
                <Select selectList={glasses} onSelect={(val: string) => searchByFilter(Filter.glasses, val)} ></Select>
                <Select selectList={ingredients} onSelect={(val: string) => searchByFilter(Filter.ingredients, val)} ></Select>
            </div>
        </div>

        <div className={styles.cocktails}>
            {cocktails.map((cocktail: Icocktail) => <Cocktail key={cocktail.idDrink} onClick={() => openCocktailView(cocktail.idDrink)} cocktailData={cocktail}></Cocktail>)}
        </div>
    </div>;
}
