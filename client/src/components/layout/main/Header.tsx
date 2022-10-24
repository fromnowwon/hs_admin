/* eslint-disable react/jsx-no-useless-fragment */
import { memo } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Box, CSSObject, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import AppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { drawerWidth, IHeaderProps } from 'interface/menu/menuInfo';
import ExitToButton from './ExitToButton';

interface AppProps extends MuiAppBarProps {
  open: boolean;
}

const commonMixin = (): CSSObject => ({
  backgroundColor: 'background.default',
  position: 'fixed',
  elevation: 0,
  boxShadow: 'none',
  display: 'flex',
});

const AppBarStyled = styled(AppBar, { shouldForwardProp: prop => prop !== 'open' })<AppProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header({ open, drawerOpen, drawerClose }: IHeaderProps): JSX.Element {
  const theme = useTheme();

  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const handleDrawerToggle = () => {
    if (open) {
      drawerClose();
    } else {
      drawerOpen();
    }
  };

  const mainHeader = (
    <Toolbar>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{ color: 'text.primary', ml: { xs: 0 } }}
      >
        {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
      <Box sx={{ display: 'flex', flex: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', px: '16px' }}>
        <ExitToButton />
      </Box>
    </Toolbar>
  );

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled
          open={open}
          sx={{
            ...commonMixin(),
            borderBottom: _theme => `1px solid ${_theme.palette.divider}`,
          }}
        >
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar
          sx={{
            ...commonMixin(),
            borderBottom: _theme => `1px solid ${_theme.palette.divider}`,
          }}
        >
          {mainHeader}
        </AppBar>
      )}
    </>
  );
}

export default memo(Header);
