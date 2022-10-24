import { createSlice, createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { ILoginState, IPostLogin } from 'interface/login/loginInfo';
import { makeData, makeHeader } from 'libs/healthUtils';
import { RootState } from 'store/rootReducer';

const initialState: ILoginState = {
  info: {
    code: '',
    data: null,
    message: '',
    success: true,
  },
  loading: false,
  error: false,
};

export const postLogin = createAsyncThunk<AxiosResponse, IPostLogin, { state: RootState }>(
  'login/postLogin',
  ({ bizId, userId, userPwd }) => {
    const url = process.env.REACT_APP_URL;
    const header = makeHeader();
    const body = makeData(bizId, userId, userPwd);
    return axios.post(`${url}/user/login`, body, header);
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<ILoginState>) => {
    builder
      .addCase(postLogin.fulfilled, (state, action) => {
        const { data } = action.payload;
        return {
          ...state,
          loading: false,
          error: false,
          info: {
            ...state.info,
            ...data,
          },
        };
      })
      .addCase(postLogin.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postLogin.rejected, (state, action) => {
        const { error } = action;
        return {
          ...state,
          loading: false,
          error: true,
          info: {
            ...initialState.info,
            message: error.message || 'error',
          },
        };
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;

export const loginSelector = (state: RootState): ILoginState => state.login;
