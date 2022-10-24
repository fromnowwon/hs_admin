import { INooticeHook, INoticeList, ISWRNoticeListInfo, Order } from 'interface/notice/noticeInfo';
import { useDispatch, useSelector } from 'react-redux';
import { changeListSubSearchCondition, noticeSelector } from 'store/notice/noticeSlice';
import { useCallback } from 'react';
import useSWR from 'swr';
import useLogin from './useLogin';
import { postFetcherHeaderWithParam } from './useRequest';

function useNoticeList(): ISWRNoticeListInfo {
  const url = process.env.REACT_APP_URL;
  const { info } = useLogin();
  const loginToken = info.data?.loginToken || '';

  const noticeState = useSelector(noticeSelector);
  const {
    listSearchCondition: { currPage, perPage, regDateFrom, regDateTo, boardCd },
  } = noticeState;

  const { data, error, mutate } = useSWR(
    [`${url}/api/board/list`, loginToken, currPage, perPage, regDateFrom, regDateTo, boardCd],
    (_url, _loginToken, _currPage, _perPage, _regDateFrom, _regDateTo, _boardCd) =>
      postFetcherHeaderWithParam(_url || '', _loginToken, {
        currPage: _currPage,
        perPage: _perPage,
        regDateFrom: _regDateFrom,
        regDateTo: _regDateTo,
        boardCd: _boardCd,
      }),
  );

  return { data, isLoading: !error && !data, isError: error, mutate };
}

export const useNotice = (): INooticeHook => {
  const dispatch = useDispatch();
  const noticeState = useSelector(noticeSelector);
  const { listSearchCondition, listSubSearchCondition, loading, error, data } = noticeState;
  return {
    loading,
    error,
    data,
    listSearchCondition,
    listSubSearchCondition,
    getNoticeList: useNoticeList,
    changeListSubSearchCondition: useCallback(
      (_order: Order, _orderBy: keyof INoticeList) => {
        dispatch(
          changeListSubSearchCondition({
            order: _order,
            orderBy: _orderBy,
          }),
        );
      },
      [dispatch],
    ),
  };
};

export default useNotice;
