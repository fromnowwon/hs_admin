import { memo, ReactNode } from 'react';
import { styled, TableCellProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import MuiTableCell from '@mui/material/TableCell';

interface ICustomCustomTableCellprops extends TableCellProps {
  sx?: SxProps<Theme>;
  children: ReactNode;
}

const TableCell = styled(MuiTableCell)(({ theme }) => ({
  fontSize: '0.875rem',
  padding: 12,
  borderColor: theme.palette.divider,
  head: {
    fontWeight: 600,
    paddingTop: 20,
    paddingBottom: 20,
  },
}));

function CustomTableCell({ children, ...props }: ICustomCustomTableCellprops) {
  return <TableCell {...props}>{children}</TableCell>;
}

export default memo(CustomTableCell);
