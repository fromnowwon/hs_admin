import { Box, Table, TableContainer } from '@mui/material';
import useNotice from 'hooks/useNotice';
import { useMemo } from 'react';
import NoticeTableBody from './NoticeTableBody';
import NoticeTableHead from './NoticeTableHead';

function NoticeTable(): JSX.Element {
  const { listSubSearchCondition, getNoticeList } = useNotice();
  const { order, orderBy } = listSubSearchCondition;

  const { data: noticeListData, isLoading } = getNoticeList();
  const notice = useMemo(() => {
    return noticeListData?.data?.dataList || [];
  }, [noticeListData?.data?.dataList]);

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' },
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2,
            },
            '& .MuiTableCell-root:last-child': {
              pr: 3,
            },
          }}
        >
          <NoticeTableHead order={order} orderBy={orderBy} />
          <NoticeTableBody loading={isLoading} rows={notice} />
        </Table>
      </TableContainer>
    </Box>
  );
}

export default NoticeTable;
