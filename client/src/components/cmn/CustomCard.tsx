/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, ReactNode } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader, Divider } from '@mui/material';
import MuiCardContent from '@mui/material/CardContent';
import { SxProps } from '@mui/system';

const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' },
};

export interface ICustomCardProps {
  border?: boolean;
  divider?: boolean;
  elevation?: number;
  secondary?: ReactNode;
  sx?: any;
  title?: string | ReactNode;
  children: ReactNode;
  shadow?: boolean;
  content?: boolean;
  contentSX?: SxProps;
}

const CardContent = styled(MuiCardContent)({
  padding: 20,
  '&:last-child': {
    paddingBottom: 20,
  },
});

const CustomCard = forwardRef(
  (
    {
      border = true,
      content = true,
      shadow = false,
      contentSX = {},
      children,
      divider,
      elevation,
      secondary,
      sx = {},
      title,
      ...others
    }: ICustomCardProps,
    ref: any,
  ) => {
    const theme = useTheme();
    const _shadow = shadow ? theme.palette.health.shadow.z1 : 'none';
    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          ...sx,
          border: border ? '1px solid' : 'none',
          borderColor: theme.palette.health.grey.A800,
          borderRadius: 2,
          boxShadow: _shadow,
          ':hover': {
            boxShadow: _shadow,
          },
          '& pre': {
            m: 0,
            p: '16px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem',
          },
        }}
      >
        {title && (
          <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />
        )}
        {title && divider && <Divider />}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}
      </Card>
    );
  },
);

export default CustomCard;
