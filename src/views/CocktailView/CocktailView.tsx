import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Icocktail } from '../../app/interfaces/Icocktails';
import { fetchCocktail } from '../../app/store/cocktails/cocktails.slice';
import styles from './CocktailView.module.scss';

export default function CocktailView() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const cocktailData: Icocktail = useAppSelector(state => state.cocktails.cocktailView!);

    useEffect(() => {
        dispatch(fetchCocktail(id!));
    }, [id]);

    return cocktailData ?
        <div className={styles.view}>
            <div className={styles.view__head}>
                <h2 className={styles.title}>{cocktailData.strDrink}</h2>
                <label className={styles.updated}>Last update: {cocktailData.dateModified}</label>
            </div>
            <div className={styles.view__body}>
                <div className={styles.left}>
                    <div className={styles.thumb}>
                        <img src={cocktailData.strDrinkThumb}></img>
                    </div>
                    <p>Category: {cocktailData.strCategory}</p>
                    <p>CreativeCommonsConfirmed: {cocktailData.strCreativeCommonsConfirmed}</p>
                    <p>DrinkAlternate: {cocktailData.strDrinkAlternate}</p>
                    <p>Glass: {cocktailData.strGlass}</p>
                    <p>IBA: {cocktailData.strIBA}</p>
                    <p>ImageAttribution: {cocktailData.strImageAttribution}</p>
                </div>
                <div className={styles.right}>
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{cocktailData.strIngredient1}</td>
                                <td>{cocktailData.strMeasure1}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient2}</td>
                                <td>{cocktailData.strMeasure2}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient3}</td>
                                <td>{cocktailData.strMeasure3}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient4}</td>
                                <td>{cocktailData.strMeasure4}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient5}</td>
                                <td>{cocktailData.strMeasure5}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient6}</td>
                                <td>{cocktailData.strMeasure6}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient7}</td>
                                <td>{cocktailData.strMeasure7}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient8}</td>
                                <td>{cocktailData.strMeasure8}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient9}</td>
                                <td>{cocktailData.strMeasure9}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient10}</td>
                                <td>{cocktailData.strMeasure10}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient11}</td>
                                <td>{cocktailData.strMeasure11}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient12}</td>
                                <td>{cocktailData.strMeasure12}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient13}</td>
                                <td>{cocktailData.strMeasure13}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient14}</td>
                                <td>{cocktailData.strMeasure14}</td>
                            </tr>
                            <tr>
                                <td>{cocktailData.strIngredient15}</td>
                                <td>{cocktailData.strMeasure15}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>{cocktailData.strInstructions}</p>
                    <p>Tags: {cocktailData.strTags}</p>
                </div>
                <p>Video: {cocktailData.strVideo}</p>
            </div>
        </div>
        : <div>empty</div>;
}
