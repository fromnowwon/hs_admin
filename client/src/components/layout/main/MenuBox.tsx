import { memo } from 'react';
import menuList from 'components/menu';
import { Box } from '@mui/material';
import MenuGroup from './MenuGroup';

function MenuBox(): JSX.Element {
  const menuGroups = menuList.items.map(item => {
    switch (item.type) {
      case 'group':
        return <MenuGroup key={item.id} item={item} />;
      default:
        return null;
    }
  });
  return <Box sx={{ pt: 2 }}>{menuGroups}</Box>;
}

export default memo(MenuBox);
