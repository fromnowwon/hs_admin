import { memo, ReactNode } from 'react';
import { styled, InputLabelProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import MuiInputLabel from '@mui/material/InputLabel';

interface ICustomCustomInputLabelprops extends InputLabelProps {
  sx?: SxProps<Theme>;
  label: string | ReactNode;
}

const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
  color: theme.palette.health.grey[600],
  outlined: {
    lineHeight: '0.8em',
    '&.MuiInputLabel-sizeSmall': {
      lineHeight: '1em',
    },
    '&.MuiInputLabel-shrink': {
      background: theme.palette.background.paper,
      padding: '0 8px',
      marginLeft: -6,
      lineHeight: '1.4375em',
    },
  },
}));

function CustomInputLabel({ label, ...props }: ICustomCustomInputLabelprops) {
  return <InputLabel {...props}>{label}</InputLabel>;
}

export default memo(CustomInputLabel);
