/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableBody, TableRow } from '@mui/material';
import CustomTableCell from 'components/cmn/CustomTableCell';
import useNotice from 'hooks/useNotice';
import { INoticeTableBodyProps, Order } from 'interface/notice/noticeInfo';
import { dateFormat, stableSort, getComparator } from 'libs/healthUtils';
import { memo, useState } from 'react';
import NoticeTableBodySkeleton from './NoticeTableBodySkeleton';

function NoticeTableBody({ loading, rows }: INoticeTableBodyProps): JSX.Element {
  const {
    listSubSearchCondition: { order, orderBy },
  } = useNotice();
  const _order = order as Order;
  const _orderBy = orderBy;
  const [selected] = useState<number[]>([]);
  const isSelected = (boardId: number) => selected.indexOf(boardId) !== -1;

  return (
    <>
      {loading && <NoticeTableBodySkeleton />}
      {!loading && rows.length === 0 && (
        <TableBody>
          <TableRow>
            <CustomTableCell align="center" colSpan={5} sx={{ border: 'none' }}>
              조회된 데이터가 없습니다.
            </CustomTableCell>
          </TableRow>
        </TableBody>
      )}
      {!loading && rows.length !== 0 && (
        <TableBody>
          {stableSort(rows, getComparator(_order, _orderBy)).map((row, index) => {
            const isItemSelected = isSelected(row.boardId);
            const labelId = `table-checkbox-${index}`;

            return (
              <TableRow
                hover
                role="checkbox"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.boardId}
                selected={isItemSelected}
              >
                <CustomTableCell component="th" id={labelId} scope="row" align="center">
                  {row.boardId}
                </CustomTableCell>
                <CustomTableCell align="center">{row.subject}</CustomTableCell>
                <CustomTableCell align="center">{dateFormat(row.startDate)}</CustomTableCell>
                <CustomTableCell align="center">{row.displayYn === 'Y' ? '게시' : '미게시'}</CustomTableCell>
                <CustomTableCell align="center">{dateFormat(row.regDate)}</CustomTableCell>
                <CustomTableCell align="center">-</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      )}
    </>
  );
}

export default memo(NoticeTableBody);
