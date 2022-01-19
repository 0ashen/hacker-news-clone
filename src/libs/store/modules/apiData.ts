import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface DataState {
   data: {}[];
}

const initialState: DataState = {
   data: [{}]
} as DataState;

export const apiDataSlice = createSlice({
   name: 'wallets',
   initialState,
   reducers: {
      setData: (state, action: PayloadAction<{}[]>) => {
         state.data = action.payload;
      }
   }
});
export const walletsReducer = apiDataSlice.reducer;

// selectors
export const selectData = (state: RootState) => state.apiData;

// actions
export const { setData } = apiDataSlice.actions;
