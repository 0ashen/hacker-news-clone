import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { walletsReducer } from './modules/apiData';
import { api } from '../../api/api';

export const store = configureStore({
   reducer: {
      apiData: walletsReducer,
      [api.reducerPath]: api.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
