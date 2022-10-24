/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPostLogin } from 'interface/login/loginInfo';
import { Order } from 'interface/notice/noticeInfo';
import { Header } from 'interface/request/requestInfo';

export function makeHeader(token?: string): Header {
  let requestHeader: Header = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      appType: 'xoYou',
    },
  };

  if (token !== undefined && token !== null) {
    requestHeader = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return requestHeader;
}

export function makeData(bizId: string, userId: string, userPwd: string): IPostLogin {
  const requestBody: IPostLogin = {
    bizId,
    userId,
    userPwd,
  };

  return requestBody;
}

export const dateFormat = (date: string | number): string => {
  const sDate = String(date);
  const year = sDate.substring(0, 4);
  const month = sDate.substring(4, 6);
  const day = sDate.substring(6, 8);
  const hour = sDate.substring(8, 10);
  const minute = sDate.substring(10, 12);
  const second = sDate.substring(12);

  return `${year}.${month}.${day} ${hour}:${minute}:${second}`;
};

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (orderBy === 'startdate' || orderBy === 'confirmdate' || orderBy === 'expireddate') {
    const valueA = `${a[orderBy]}`;
    const valueB = `${b[orderBy]}`;
    const convertA = dateFormat(valueA);
    const convertB = dateFormat(valueB);
    if (convertB < convertA) {
      return -1;
    }
    if (convertB > convertA) {
      return 1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  }
  return 0;
}

export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
