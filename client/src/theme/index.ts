/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles';
import MuiTypography from 'theme/overrides/MuiTyphography';
import healthSquare from 'theme/overrides/MuiHealthSquare';

const theme = {
  palette: {
    primary: {
      main: '#0199EB',
    },
    secondary: {
      main: '#0955A0',
    },
    error: {
      main: '#E84853',
    },
    warning: {
      main: '#FFB94E',
    },
    background: {
      default: '#FFFFFF',
    },
    health: healthSquare,
    text: {
      primary: healthSquare.grey[700],
      secondary: healthSquare.grey[500],
      disabled: healthSquare.grey[400],
    },
    divider: healthSquare.grey[200],
  },
  typography: MuiTypography,
  shape: {
    borderRadius: 4,
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key];
};

declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export default createTheme(theme);
