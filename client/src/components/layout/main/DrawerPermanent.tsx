/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled, CSSObject } from '@mui/material/styles';
import Drawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import { drawerWidth } from 'interface/menu/menuInfo';

const closedMixin = (theme: any): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  borderRight: 'none',
  boxShadow: theme.palette.health.shadow.z1,
});

const openedMixin = (theme: any): CSSObject => ({
  width: drawerWidth,
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  boxShadow: 'none',
});

interface IDrawerPermanentProps extends MuiDrawerProps {
  open: boolean;
}

const DrawerPermanent = styled(Drawer, { shouldForwardProp: prop => prop !== 'open' })<IDrawerPermanentProps>(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default DrawerPermanent;
