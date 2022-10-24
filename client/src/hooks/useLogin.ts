import { useCallback } from 'react';
import { ILoginHook } from 'interface/login/loginInfo';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { loginSelector, logout } from 'store/login/loginSlice';

const useLogin = (): ILoginHook => {
  const dispatch = useDispatch();
  const loginState = useSelector(loginSelector, shallowEqual);
  const { info, loading, error } = loginState;

  return {
    info,
    loading,
    error,
    logout: useCallback(() => dispatch(logout()), [dispatch]),
  };
};

export default useLogin;
