import { INoticeState } from 'interface/notice/noticeInfo';
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';
import axios, { AxiosResponse } from 'axios';
import { makeHeader } from 'libs/healthUtils';

const initialState: INoticeState = {
  loading: false,
  error: false,
  listSearchCondition: {
    currPage: 1,
    perPage: 10,
    regDateFrom: '',
    regDateTo: '',
    boardCd: 'BD0001',
  },
  listSubSearchCondition: {
    order: 'desc',
    orderBy: 'boardId',
  },
  data: {
    totalCnt: 0,
    success: '',
    dataList: [],
    message: '',
  },
};

export const postNoticeList = createAsyncThunk<AxiosResponse, void, { state: RootState }>(
  'notice/postNoticeList',
  async (_, { getState }) => {
    const url = process.env.REACT_APP_URL;
    const loginInfo = getState().login;
    const loginToken = loginInfo.info.data?.loginToken || '';

    const _listSearchCondition = getState().notice.listSearchCondition;

    return axios.post(`${url}/api/board/list`, _listSearchCondition, makeHeader(loginToken));
  },
);

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    changeListSearchCondition(state, action) {
      const { listSearchCondition } = action.payload;
      state.listSearchCondition = listSearchCondition;
    },
    changeListSubSearchCondition(state, action) {
      const { order, orderBy } = action.payload;
      state.listSubSearchCondition.order = order;
      state.listSubSearchCondition.orderBy = orderBy;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<INoticeState>) => [
    builder
      .addCase(postNoticeList.fulfilled, (state, action) => {
        const { data } = action.payload;
        return {
          ...state,
          loading: false,
          error: false,
          data: data.data,
        };
      })
      .addCase(postNoticeList.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postNoticeList.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
  ],
});

export const { changeListSearchCondition, changeListSubSearchCondition } = noticeSlice.actions;
export default noticeSlice.reducer;

export const noticeSelector = (state: RootState): INoticeState => state.notice;
