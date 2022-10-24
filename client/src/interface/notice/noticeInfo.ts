/* eslint-disable @typescript-eslint/no-explicit-any */
export interface INoticeList {
  boardId: number;
  boardCd: string;
  subject: string;
  contents: string;
  distCd: string;
  hitCnt: number;
  startDate: string;
  displayYn: string;
  topYn: string;
  popYn: string;
  popType: string;
  regId: string;
  regName: string;
  regDate: string;
  updId: string;
  updName: string;
  updDate: string;
  delYn: string;
}

export interface INoticeDetailList extends INoticeList {
  detail: string;
}

export interface IListSearchCondition {
  currPage: number;
  perPage: number;
  regDateFrom: string;
  regDateTo: string;
  boardCd: string;
}
export interface INoticeState {
  listSearchCondition: IListSearchCondition;
  listSubSearchCondition: INoticeSubSearchCondition;
  loading: boolean;
  error: boolean;
  data: INoticeDataInfo;
}

export interface INoticeHeadCell {
  id: keyof INoticeDetailList;
  disablePadding: boolean;
  label: string;
  align: 'left' | 'center' | 'right';
}

export type Order = 'asc' | 'desc';

export interface INoticeTableHeadProps {
  order: Order;
  orderBy: keyof INoticeList;
}

export interface INoticeSubSearchCondition {
  order: Order;
  orderBy: keyof INoticeList;
}

export interface IFetchNoticeList {
  data: INoticeDataInfo;
}

export interface INoticeDataInfo {
  totalCnt: number;
  success: string;
  message: string;
  dataList: INoticeList[];
}

export interface ISWRNoticeListInfo {
  data: IFetchNoticeList;
  isLoading: boolean;
  isError: boolean;
  mutate?: any;
}

export interface INooticeHook extends INoticeState {
  getNoticeList: () => ISWRNoticeListInfo;
  changeListSubSearchCondition: (_order: Order, _orderBy: keyof INoticeList) => void;
}

export interface INoticeTableBodyProps {
  loading: boolean;
  rows: INoticeList[];
}
