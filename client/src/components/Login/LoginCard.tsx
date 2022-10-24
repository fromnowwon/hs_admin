import { Box } from '@mui/material';
import CustomCard, { ICustomCardProps } from 'components/cmn/CustomCard';
import { ReactNode } from 'react';

interface ILoginCardProps {
  children: ReactNode;
  other?: React.ForwardRefExoticComponent<ICustomCardProps & React.RefAttributes<unknown>>;
}
function LoginCard({ children, ...other }: ILoginCardProps): JSX.Element {
  return (
    <CustomCard
      shadow={false}
      border
      sx={{
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        '& > *': {
          flexGrow: 1,
          flexBasis: '50%',
        },
      }}
      {...other}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </CustomCard>
  );
}

export default LoginCard;
