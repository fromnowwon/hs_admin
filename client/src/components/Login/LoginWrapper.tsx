import { memo, ReactNode } from 'react';
import { Box, Grid } from '@mui/material';
import LoginCard from './LoginCard';

interface ILoginWrapperProps {
  children: ReactNode;
}
function LoginWrapper({ children }: ILoginWrapperProps): JSX.Element {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <LoginCard>{children}</LoginCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(LoginWrapper);
