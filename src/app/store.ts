import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cocktailsReducer from '../app/store/cocktails/cocktails.slice';

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
