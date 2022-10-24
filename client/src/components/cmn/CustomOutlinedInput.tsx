import { memo } from 'react';
import { styled, Theme, OutlinedInputProps, FormHelperText, FormControl } from '@mui/material';
import MuiOutlinedInput from '@mui/material/OutlinedInput';
import { SxProps } from '@mui/system';
import { alpha } from '@mui/material/styles';

interface ICustomOutlinedInputprops extends OutlinedInputProps {
  sx?: SxProps<Theme>;
  message?: string;
}

const OutlinedInput = styled(MuiOutlinedInput)(({ theme }) => ({
  input: {
    padding: '10.5px 14px 10.5px 12px',
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.light,
  },
  '&.Mui-focused': {
    boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.primary.light}`,
    },
  },
  '&.Mui-error': {
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.light,
    },
    '&.Mui-focused': {
      boxShadow: `0 0 0 2px ${alpha(theme.palette.error.main, 0.2)}`,
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.error.light}`,
      },
    },
  },
  inputMultiline: {
    padding: 0,
  },
}));

function CustomOutlinedInput({ id, value, sx, ...props }: ICustomOutlinedInputprops) {
  const outlinedChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };
  const message = props.message || '';
  return (
    <FormControl error variant="filled" sx={{ width: '100%' }}>
      <OutlinedInput
        id={id}
        error
        value={value}
        sx={sx}
        onChange={outlinedChangeValue}
        {...props}
        aria-describedby={`${id}-helper`}
      />
      {props.error && <FormHelperText id={`${id}-helper`}>{message}</FormHelperText>}
    </FormControl>
  );
}

export default memo(CustomOutlinedInput);
