import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from 'hooks/useLogin';
import isEmpty from 'lodash/isEmpty';
import { Grid, Stack, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import LoginWrapper from './LoginWrapper';

function LoginContainer(): JSX.Element {
  const navigate = useNavigate();
  const { info } = useLogin();
  const { data } = info;

  useEffect(() => {
    if (isEmpty(data)) {
      navigate('/login');
    } else {
      navigate('/main/notice');
    }
  }, [data, navigate]);

  return (
    <LoginWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="start" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </LoginWrapper>
  );
}

export default LoginContainer;
