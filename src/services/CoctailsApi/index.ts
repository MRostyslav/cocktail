import axios from "axios";
import { Icocktail } from '../../app/interfaces/Icocktails';

const urlAPI = process.env.REACT_APP_API_URL;

interface cocktalsRespons {
    drinks: Icocktail[]
}
interface filterResponse {
    drinks: []
}

export const getRandomCocktail = () => axios.get<cocktalsRespons>(`${urlAPI}random.php`).then(res => res.data.drinks[0]);
export const getCocktailsByName = (val: string) => axios.get<cocktalsRespons>(`${urlAPI}search.php?s=${val}`).then(res => res.data.drinks);
export const getCocktail = (id: string) => axios.get<cocktalsRespons>(`${urlAPI}lookup.php?i=${id}`).then(res => res.data.drinks[0]);

export const getFilterList = (id: 'c' | 'g' | 'i' | 'a') => axios.get<filterResponse>(`${urlAPI}list.php?${id}=list`).then(res => res.data.drinks);