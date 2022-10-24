/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

export const drawerWidth = 260;

export interface IMenuState {
  open: boolean;
  handleDrawer: (open: boolean) => void;
  drawerOpen: () => void;
  drawerClose: () => void;
  changeMenu: string[];
  handleChangeMenu: (changeMenu: string[]) => void;
}

export interface IDrawerBoxProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

export interface IHeaderProps {
  open: boolean;
  drawerOpen: () => void;
  drawerClose: () => void;
}

export interface ItemProps {
  id: string;
  title: string;
  type: string;
  children?: ItemChildrenProps[];
}

export interface ItemChildrenProps {
  id: string;
  title: string;
  type: string;
  url: string;
  icon?: any;
  disabled?: boolean;
}
