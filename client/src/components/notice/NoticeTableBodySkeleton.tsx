import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';

function Skeleton({ justifyContent, width }: { justifyContent: string; width: string }): JSX.Element {
  return (
    <Box sx={{ display: 'flex', justifyContent }}>
      <MuiSkeleton width={width} height="33px" />
    </Box>
  );
}

export default function NoticeTableBodySkeleton(): JSX.Element {
  return (
    <TableBody>
      {Array.from(new Array(10)).map((row, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <TableRow key={index} sx={{ height: '60px' }}>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton justifyContent="left" width="30px" />
            </TableCell>
            <TableCell sx={{ padding: 0 }}>
              <Skeleton justifyContent="left" width="150px" />
            </TableCell>
            <TableCell sx={{ px: 2 }}>
              <Skeleton justifyContent="left" width="60px" />
            </TableCell>
            <TableCell sx={{ px: 2 }}>
              <Skeleton justifyContent="left" width="60px" />
            </TableCell>
            <TableCell sx={{ px: 2 }}>
              <Skeleton justifyContent="left" width="60px" />
            </TableCell>
            <TableCell sx={{ px: 2 }}>
              <Skeleton justifyContent="left" width="150px" />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
