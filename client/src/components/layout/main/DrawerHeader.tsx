import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

interface BoxProps extends MuiBoxProps {
  open?: boolean;
}
interface IDrawerHeaderProps {
  open: boolean;
}
const DrawerHeaderBox = styled(MuiBox, { shouldForwardProp: prop => prop !== 'open' })<BoxProps>(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 3 : 0),
}));

function DrawerHeader({ open }: IDrawerHeaderProps): JSX.Element {
  return (
    <DrawerHeaderBox open={open}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ typography: 'h4' }}>
        Admin Page
      </Stack>
    </DrawerHeaderBox>
  );
}

export default DrawerHeader;
