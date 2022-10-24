/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

export interface IBackdropState {
  open: boolean;
  option: any;
  openBackdrop?: () => void;
  closeBackdrop?: () => void;
}

const initialState = {
  open: false,
  option: {},
} as IBackdropState;

const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    openBackdrop: (state, action) => {
      const { option } = action.payload;
      state.open = true;
      state.option = option;
    },
    closeBackdrop: state => {
      state.open = false;
      state.option = {};
    },
  },
});

export const { openBackdrop, closeBackdrop } = backdropSlice.actions;
export default backdropSlice.reducer;

export const backdropSelector = (state: RootState): IBackdropState => state.backdrop;
