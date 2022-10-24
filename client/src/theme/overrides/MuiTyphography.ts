/* eslint-disable @typescript-eslint/no-empty-interface */
const MuiTypography = {
  htmlFontSize: 16,
  fontFamily: ['"Pretendard"', '"Noto Sans KR"', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontWeight: 600,
    fontSize: '2.375rem',
    lineHeight: 1.21,
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.875rem',
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.57,
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: 1.57,
  },
  body2: {
    fontSize: '0.75rem',
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
};

type CustomTypography = {
  [Key in keyof typeof MuiTypography]: typeof MuiTypography[Key];
};

declare module '@mui/material/styles' {
  interface TypographyVariants extends CustomTypography {}

  interface TypographyVariantsOptions extends CustomTypography {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    [key: string]: true;
  }
}

export default MuiTypography;
