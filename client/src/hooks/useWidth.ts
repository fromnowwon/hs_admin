/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breakpoint, Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function useWidth(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: any, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key), { noSsr: true });
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

export default useWidth;
