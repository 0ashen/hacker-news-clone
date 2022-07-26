import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface State {
   data: {}[];
}

const initialState: State = {
   data: [{}]
} as State;

export const stateSlice = createSlice({
   name: 'stateSlice',
   initialState,
   reducers: {
      setState: (state, action: PayloadAction<{}[]>) => {
         state.data = action.payload;
      }
   }
});

// selectors
export const selectData = (state: RootState) => state.stateSlice;

// actions
export const { setState } = stateSlice.actions;
