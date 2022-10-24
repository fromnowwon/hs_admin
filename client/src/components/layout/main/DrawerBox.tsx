import { memo, useMemo } from 'react';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { drawerWidth, IDrawerBoxProps } from 'interface/menu/menuInfo';
import DrawerHeader from 'components/layout/main/DrawerHeader';
import MenuBox from 'components/layout/main/MenuBox';
import DrawerPermanent from 'components/layout/main/DrawerPermanent';

function DrawerBox({ open, handleDrawerToggle }: IDrawerBoxProps): JSX.Element {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const menuListBox = useMemo(() => <MenuBox />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);
  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
      {!matchDownMD ? (
        <DrawerPermanent variant="permanent" open={open}>
          {drawerHeader}
          {menuListBox}
        </DrawerPermanent>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit',
            },
          }}
        >
          {open && drawerHeader}
          {open && menuListBox}
        </Drawer>
      )}
    </Box>
  );
}

export default memo(DrawerBox);
