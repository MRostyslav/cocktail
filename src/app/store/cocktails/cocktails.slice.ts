import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { getCocktailsByName, getRandomCocktail, getCocktail, getFilterList, getFilteredCocktails } from '../../../services/CoctailsApi';
import { Icocktail } from '../../interfaces/Icocktails';

export interface CocktailsState {
    randomCocktail?: Icocktail;
    cocktails: Icocktail[];
    cocktailView?: Icocktail;
    categoryList: string[];
    ingredientsList: string[],
    glassesList: string[],
    alcoholicList: string[],
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CocktailsState = {
    randomCocktail: undefined,
    cocktails: [],
    cocktailView: undefined,
    categoryList: [],
    ingredientsList: [],
    glassesList: [],
    alcoholicList: [],
    status: 'idle',
};

export enum Filter {
    categories = 'c',
    glasses = 'g',
    ingredients = 'i',
    alcoholic = 'a',
}

export const fetchRandomCocktail = createAsyncThunk(
    'cocktails/fetchRandomCocktail',
    async () => {
        const response: Icocktail = await getRandomCocktail();
        return response;
    }
);
export const searchCocktailsByName = createAsyncThunk(
    'cocktails/searchCocktailsByName',
    async (val: string) => {
        const response: Icocktail[] = await getCocktailsByName(val);
        return response;
    }
);
export const fetchCocktail = createAsyncThunk(
    'cocktails/fetchCocktail',
    async (id: string) => {
        const response: Icocktail = await getCocktail(id);
        return response;
    }
);
export const fetchFilterList = createAsyncThunk(
    'cocktails/fetchFilterList',
    async (id: Filter) => {
        const response = await getFilterList(id);
        return response;
    }
);
export const searchCocktailsByFilter = createAsyncThunk(
    'cocktails/searchCocktailsByFilter',
    async ({ id, val }: { id: Filter, val: string }) => {
        const response: Icocktail[] = await getFilteredCocktails(id, val);
        return response;
    }
);

export const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        clearCocktails: (state) => {
            state.cocktails = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomCocktail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRandomCocktail.fulfilled, (state, action) => {
                state.status = 'idle';
                state.randomCocktail = action.payload;
            })

            .addCase(searchCocktailsByName.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchCocktailsByName.fulfilled, (state, action) => {
                state.status = 'idle';
                state.cocktails = action.payload;
            })

            .addCase(fetchCocktail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCocktail.fulfilled, (state, action) => {
                state.status = 'idle';
                state.cocktailView = action.payload;
            })

            .addCase(fetchFilterList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFilterList.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.meta.arg === Filter.alcoholic)
                    state.alcoholicList = action.payload;
                if (action.meta.arg === Filter.categories)
                    state.categoryList = action.payload;
                if (action.meta.arg === Filter.glasses)
                    state.glassesList = action.payload;
                if (action.meta.arg === Filter.ingredients)
                    state.ingredientsList = action.payload;
            })

            .addCase(searchCocktailsByFilter.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchCocktailsByFilter.fulfilled, (state, action) => {
                state.status = 'idle';
                state.cocktails = action.payload;
            });
    },
});

export const { clearCocktails } = cocktailsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cocktails.value)`
// export const selectCount = (state: RootState) => state.cocktails.value;

// export const incrementIfOdd = (amount: number): AppThunk => (
//     dispatch,
//     getState
// ) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//         dispatch(incrementByAmount(amount));
//     }
// };

export default cocktailsSlice.reducer;
