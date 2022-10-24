import { alpha } from '@mui/material/styles';

const greyPrimary = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#262626',
  '#141414',
  '#000000',
];
const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
const greyConstant = ['#fafafb', '#e6ebf1'];
const grey = [...greyPrimary, ...greyAscent, ...greyConstant];

const MuiHealthSquare = {
  grey: {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16],
  },
  custom: {
    100: '#EEEEEE',
    200: '#AAAAAA',
    300: '#DADADA',
    400: '#E3E3E3',
    500: '#F6F6F6',
    600: '#FBFBFB',
    700: '#F8F8F8',
    800: '#E5E5E5',
    900: '#F7F7F7',
    1000: '#DDDDDD',
    1100: '#E8E8E8',
    1200: '#F4F4F4',
  },
  shadow: {
    button: `0 2px #0000000b`,
    text: `0 -1px 0 rgb(0 0 0 / 12%)`,
    z1: `0px 2px 8px ${alpha(grey[10], 0.15)}`,
  },
};

type CustomHealthSquare = {
  [Key in keyof typeof MuiHealthSquare]: typeof MuiHealthSquare[Key];
};

declare module '@mui/material/styles' {
  interface Palette {
    health: CustomHealthSquare;
  }

  interface PaletteOptions {
    health?: CustomHealthSquare;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    [key: string]: true;
  }
}

export default MuiHealthSquare;
