/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack, IconButton, InputAdornment, FormHelperText } from '@mui/material';
import { useForm, Controller, useWatch } from 'react-hook-form';
import CustomOutlinedInput from 'components/cmn/CustomOutlinedInput';
import CustomInputLabel from 'components/cmn/CustomInputLabel';
import { IFormInfo } from 'interface/login/loginInfo';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch } from 'store';
import { closeBackdrop, openBackdrop } from 'store/backdrop/backdropSlice';
import { postLogin } from 'store/login/loginSlice';
import useLogin from 'hooks/useLogin';
import LoginButton from './LoginButton';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { info: infoData, error } = useLogin();
  const { message, success: infoSuccess } = infoData;
  const { handleSubmit, control } = useForm();

  const bizId: string = useWatch({
    control,
    name: 'bizId',
    defaultValue: '',
  });

  const userId: string = useWatch({
    control,
    name: 'userId',
    defaultValue: '',
  });

  const userPwd: string = useWatch({
    control,
    name: 'userPwd',
    defaultValue: '',
  });

  const onSubmit = (data: any) => {
    dispatch(openBackdrop({}));
    dispatch(postLogin(data))
      .unwrap()
      .then(response => {
        const { success } = response.data;
        if (success) {
          navigate('/main/notice');
        }
      })
      .catch(e => console.log(e))
      .finally(() => {
        dispatch(closeBackdrop());
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const bizValidation = (_bizId: string): boolean => {
    return _bizId.length > 0 && Boolean(_bizId);
  };
  const userValidation = (_userId: string): boolean => {
    return _userId.length > 0 && Boolean(_userId);
  };
  const passwordValidation = (_userPwd: string): boolean => {
    return _userPwd.length > 0 && Boolean(_userPwd);
  };
  const buttonCheck = (_bizId: string, _userId: string, _userPwd: string): boolean => {
    return bizValidation(_bizId) && userValidation(_userId) && passwordValidation(_userPwd);
  };

  const formInfo: IFormInfo[] = [
    {
      id: 'bizId',
      defaultValue: bizId,
      label: '?????????????????????',
      placeholder: '????????????????????? ??????',
      message: '???????????????????????? ??????????????????.',
    },
    {
      id: 'userId',
      defaultValue: userId,
      label: '????????? ?????????',
      placeholder: '????????? ????????? ??????',
      message: '????????? ???????????? ??????????????????.',
    },
    {
      id: 'userPwd',
      defaultValue: userPwd,
      label: '????????????',
      placeholder: '???????????? ??????',
      message: '????????? ??????????????? ??????????????????.',
    },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {formInfo.map((obj, index) => (
          <Fragment key={index}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <Controller
                  name={obj.id}
                  control={control}
                  defaultValue={obj.defaultValue}
                  rules={{ required: true }}
                  render={({ field: { onChange, value }, fieldState: { error: _error } }) => (
                    <>
                      <CustomInputLabel htmlFor={obj.id} label={obj.label} />
                      <CustomOutlinedInput
                        id={obj.id}
                        value={value}
                        onChange={onChange}
                        placeholder={obj.placeholder}
                        fullWidth
                        error={!!_error}
                        message={obj.message}
                        type={obj.id === 'userPwd' && !showPassword ? 'password' : 'text'}
                        endAdornment={
                          obj.id === 'userPwd' ? (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                size="large"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ) : null
                        }
                      />
                    </>
                  )}
                />
              </Stack>
            </Grid>
          </Fragment>
        ))}
        {(!infoSuccess || error) && (
          <Grid item xs={12}>
            <FormHelperText error>{message}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <LoginButton disabled={!buttonCheck(bizId, userId, userPwd)}>?????????</LoginButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
