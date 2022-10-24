/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ILoginType {
  code: null | string;
  message: string;
  success: boolean;
  data?: null | {
    backupType: string;
    bizId: string;
    eMail: string;
    loginToken: string;
    nasId: null | string;
    nasPwd: null | string;
    nasRootPath: null | string;
    userId: string;
    userName: string;
  };
}

export interface ILoginState {
  info: ILoginType;
  loading: boolean;
  error: boolean;
}

export interface IPostLogin {
  bizId: string;
  userId: string;
  userPwd: string;
}

export interface ILoginHook extends ILoginState {
  logout: () => void;
}

export interface IFormInfo {
  id: 'bizId' | 'userId' | 'userPwd';
  defaultValue?: any;
  label: string;
  placeholder?: string;
  message: string;
}
