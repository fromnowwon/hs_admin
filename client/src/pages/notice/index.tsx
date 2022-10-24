import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Typography } from '@mui/material';
import CustomCard from 'components/cmn/CustomCard';
import NoticeTable from 'components/notice/NoticeTable';

function NoticePage(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">공지사항 게시판</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <CustomCard sx={{ mt: 2 }} content={false}>
            <NoticeTable />
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NoticePage;
