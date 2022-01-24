import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { getRandomCocktail } from '../../../services/CoctailsApi';
import { Icocktail } from '../../interfaces/Icocktails';

export interface CocktailsState {
    randomCocktail?: Icocktail;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CocktailsState = {
    randomCocktail: undefined,
    status: 'idle',

};

export const fetchRandomCocktail = createAsyncThunk(
    'cocktails/fetchRandomCocktail',
    async () => {
        const response: Icocktail = await getRandomCocktail();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomCocktail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRandomCocktail.fulfilled, (state, action) => {
                state.status = 'idle';
                state.randomCocktail = action.payload;
            });
    },
});

// export const { increment } = cocktailsSlice.actions;

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
