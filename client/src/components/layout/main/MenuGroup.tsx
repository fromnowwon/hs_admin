import useMenu from 'hooks/useMenu';
import { ItemProps } from 'interface/menu/menuInfo';
import { memo } from 'react';
import { Box, List, Typography } from '@mui/material';
import MenuItem from './MenuItem';

interface IMenuGroupProps {
  item: ItemProps;
}
function MenuGroup({ item }: IMenuGroupProps): JSX.Element {
  const { open } = useMenu();
  const childrenList = item.children?.map(menuItem => {
    switch (menuItem.type) {
      case 'item':
        return <MenuItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return null;
    }
  });
  return (
    <List
      subheader={
        item.title &&
        open && (
          <Box sx={{ pl: 3, mb: 1 }}>
            <Typography variant="subtitle1" color="textSecondary">
              {item.title}
            </Typography>
          </Box>
        )
      }
      sx={{ mb: open ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {childrenList}
    </List>
  );
}

export default memo(MenuGroup);
