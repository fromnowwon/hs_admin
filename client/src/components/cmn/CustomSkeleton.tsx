import { Skeleton, Stack, Grid } from '@mui/material';
import { memo, ReactNode, useState, useEffect } from 'react';
import CustomCard from './CustomCard';

interface ICustomSkeletonProps {
  children: ReactNode;
  loading?: boolean;
}
function CustomSkeleton({ children, loading = false }: ICustomSkeletonProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const skeletonCard = (
    <CustomCard
      title={<Skeleton sx={{ width: { xs: 120, md: 180 } }} />}
      secondary={<Skeleton animation="wave" variant="circular" width={24} height={24} />}
    >
      <Stack spacing={1}>
        <Skeleton />
        <Skeleton sx={{ height: 64 }} animation="wave" variant="rectangular" />
        <Skeleton />
        <Skeleton />
      </Stack>
    </CustomCard>
  );
  return (
    <>
      {isLoading ||
        (loading && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {skeletonCard}
            </Grid>
            <Grid item xs={12} md={6}>
              {skeletonCard}
            </Grid>
            <Grid item xs={12} md={6}>
              {skeletonCard}
            </Grid>
            <Grid item xs={12} md={6}>
              {skeletonCard}
            </Grid>
          </Grid>
        ))}
      {!isLoading && children}
    </>
  );
}

export default memo(CustomSkeleton);
