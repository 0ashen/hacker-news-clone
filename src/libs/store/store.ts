import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { api } from '../../api/api';
import { stateSlice } from './modules/stateSlice';

let storeInstance: ReturnType<typeof makeStore> | undefined;

export const makeStore = (preloadedState: {}) => {
   const store = configureStore({
      reducer: {
         [stateSlice.name]: stateSlice.reducer,
         [api.reducerPath]: api.reducer
      },
      preloadedState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
      devTools: true
   });
   storeInstance = store;
   return store;
};

export function initializeStore(preloadedState?: RootState) {
   let reInitiatedStore = storeInstance ?? makeStore(preloadedState!);

   // After navigating to a page with an initial Redux state, merge that state
   if (preloadedState && storeInstance) {
      reInitiatedStore = makeStore({ ...storeInstance.getState(), ...preloadedState });

      storeInstance = undefined;
   }

   // if (typeof(window) === 'undefined') {
   //    return reInitiatedStore; // For SSG and SSR always create a new store
   // }

   // Create the store once in the client
   if (!storeInstance) {
      storeInstance = reInitiatedStore;
   }

   return reInitiatedStore;
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
