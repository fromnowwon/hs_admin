import { memo, ReactNode } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface ButtonProps extends MuiButtonProps {
  disabled?: boolean;
}
interface IChildrenComponent {
  children: ReactNode;
  disabled?: boolean;
}

const Button = styled(MuiButton, {
  shouldForwardProp: prop => prop !== 'disabled',
})<ButtonProps>(({ theme: { spacing, palette }, disabled }) => ({
  marginTop: spacing(2.5),
  height: spacing(6),
  textTransform: 'capitalize',
  boxShadow: 'none',
  ...(disabled && {
    backgroundColor: palette.health.custom[200],
    color: palette.background.default,
    '&:hover': {
      backgroundColor: palette.health.custom[200],
      boxShadow: 'none',
    },
  }),
  ...(!disabled && {
    backgroundColor: palette.primary.main,
    color: palette.background.default,
    '&:hover': {
      backgroundColor: palette.primary.main,
      boxShadow: 'none',
    },
  }),
}));

function LoginButton({ children, disabled }: IChildrenComponent): JSX.Element {
  return (
    <Button type="submit" fullWidth variant="contained" disabled={disabled} size="large">
      {children}
    </Button>
  );
}

export default memo(LoginButton);
