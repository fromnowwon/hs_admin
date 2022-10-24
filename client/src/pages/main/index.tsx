import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Toolbar } from '@mui/material';
import Header from 'components/layout/main/Header';
import DrawerBox from 'components/layout/main/DrawerBox';
import useMenu from 'hooks/useMenu';
import { Outlet, useNavigate } from 'react-router-dom';
import useLogin from 'hooks/useLogin';
import isEmpty from 'lodash/isEmpty';

function MainPage(): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const { info } = useLogin();
  const { data } = info;
  const { open, drawerOpen, drawerClose, handleDrawer } = useMenu();

  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));

  useEffect(() => {
    if (isEmpty(data)) {
      navigate('/login');
    }
  }, [data, navigate]);

  useEffect(() => {
    handleDrawer(!matchDownLG);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  const handleDrawerToggle = () => {
    handleDrawer(!open);
  };
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} drawerOpen={drawerOpen} drawerClose={drawerClose} />
      <DrawerBox open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: 0 }}>
        <Toolbar />
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default MainPage;
