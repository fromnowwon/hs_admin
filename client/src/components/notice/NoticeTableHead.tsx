/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from 'react';
import { TableHead, TableRow, TableSortLabel } from '@mui/material';
import { INoticeHeadCell, INoticeTableHeadProps } from 'interface/notice/noticeInfo';
import CustomTableCell from 'components/cmn/CustomTableCell';
import useNotice from 'hooks/useNotice';

function NoticeTableHead({ order, orderBy }: INoticeTableHeadProps): JSX.Element {
  const headCells: readonly INoticeHeadCell[] = [
    {
      id: 'boardId',
      align: 'center',
      disablePadding: false,
      label: '번호',
    },
    {
      id: 'subject',
      align: 'center',
      disablePadding: false,
      label: '제목',
    },
    {
      id: 'startDate',
      align: 'center',
      disablePadding: false,
      label: '게시 시작일',
    },
    {
      id: 'displayYn',
      align: 'center',
      disablePadding: false,
      label: '게시 여부',
    },
    {
      id: 'regDate',
      align: 'center',
      disablePadding: false,
      label: '등록일',
    },
    {
      id: 'detail',
      align: 'center',
      disablePadding: false,
      label: '상세보기',
    },
  ];

  const { changeListSubSearchCondition } = useNotice();
  const sortArray = ['boardId', 'subject', 'startDate'];
  const handleChangeSort = (newOrderBy: any) => () => {
    const isAsc = orderBy === newOrderBy && order === 'asc';
    changeListSubSearchCondition(isAsc ? 'desc' : 'asc', newOrderBy);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <CustomTableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {sortArray.includes(headCell.id) ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={handleChangeSort(headCell.id)}
              >
                <span style={{ verticalAlign: 'middle' }}>{headCell.label}</span>
              </TableSortLabel>
            ) : (
              <span style={{ verticalAlign: 'middle' }}>{headCell.label}</span>
            )}
          </CustomTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default memo(NoticeTableHead);
