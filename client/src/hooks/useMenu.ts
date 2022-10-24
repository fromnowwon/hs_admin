import { IMenuState } from 'interface/menu/menuInfo';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuSelector, handleDrawer, drawerOpen, drawerClose, handleChangeMenu } from 'store/menu/menuSlice';

export const useMenu = (): IMenuState => {
  const dispatch = useDispatch();
  const menuState = useSelector(menuSelector);

  return {
    open: menuState.open,
    changeMenu: menuState.changeMenu,
    handleDrawer: useCallback((_open: boolean) => dispatch(handleDrawer({ open: _open })), [dispatch]),
    drawerOpen: useCallback(() => dispatch(drawerOpen()), [dispatch]),
    drawerClose: useCallback(() => dispatch(drawerClose()), [dispatch]),
    handleChangeMenu: useCallback(
      (_changeMenu: string[]) => dispatch(handleChangeMenu({ changeMenu: _changeMenu })),
      [dispatch],
    ),
  };
};

export default useMenu;
