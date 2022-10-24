/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoginState } from 'interface/login/loginInfo';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { IMenuState } from 'interface/menu/menuInfo';
import { INoticeState } from 'interface/notice/noticeInfo';
import login from './login/loginSlice';
import backdrop, { IBackdropState } from './backdrop/backdropSlice';
import menu from './menu/menuSlice';
import notice from './notice/noticeSlice';

export interface IRootReducer {
  login: ILoginState;
  backdrop: IBackdropState;
  menu: IMenuState;
  notice: INoticeState;
}
const appReducer = combineReducers({
  login,
  backdrop,
  menu,
  notice,
});

export const rootReducer = (state: any, action: AnyAction): IRootReducer => {
  if (action.type === 'login/logout') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
