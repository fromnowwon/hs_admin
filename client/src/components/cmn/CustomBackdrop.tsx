import { memo } from 'react';
import { Backdrop, CircularProgress, circularProgressClasses } from '@mui/material';
import { useSelector } from 'react-redux';
import { backdropSelector } from 'store/backdrop/backdropSlice';

function CustomBackdrop() {
  const backdropState = useSelector(backdropSelector);
  const { open, option } = backdropState;

  return (
    <Backdrop sx={{ position: 'absolute', zIndex: 9999999 }} open={open} {...option}>
      <CircularProgress
        variant="indeterminate"
        sx={{
          color: 'white',
          animationDuration: '1500ms',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
      />
    </Backdrop>
  );
}

export default memo(CustomBackdrop);
