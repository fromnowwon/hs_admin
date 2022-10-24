import { createSlice } from '@reduxjs/toolkit';
import { IMenuState } from 'interface/menu/menuInfo';
import { RootState } from 'store/rootReducer';

const initialState = {
  open: false,
  changeMenu: ['notice'],
} as IMenuState;

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleDrawer(state, action) {
      const { open } = action.payload;
      state.open = open;
    },
    drawerOpen(state) {
      state.open = true;
    },
    drawerClose(state) {
      state.open = false;
    },
    handleChangeMenu(state, action) {
      const { changeMenu } = action.payload;
      state.changeMenu = changeMenu;
    },
  },
});

export const { handleDrawer, drawerOpen, drawerClose, handleChangeMenu } = menuSlice.actions;
export default menuSlice.reducer;

export const menuSelector = (state: RootState): IMenuState => state.menu;
