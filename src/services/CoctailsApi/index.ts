import axios from "axios";
import { Icocktail } from '../../app/interfaces/Icocktails';

const urlAPI = process.env.REACT_APP_API_URL;

interface cocktalsRespons {
    drinks: Icocktail[]
}

export const getRandomCocktail = () => axios.get<cocktalsRespons>(urlAPI + 'random.php').then(res => res.data.drinks[0]);
