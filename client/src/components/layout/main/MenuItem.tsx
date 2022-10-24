/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, memo } from 'react';
import { useTheme } from '@mui/material/styles';
import useMenu from 'hooks/useMenu';
import { useDispatch } from 'react-redux';
import { handleChangeMenu } from 'store/menu/menuSlice';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ItemChildrenProps } from 'interface/menu/menuInfo';
import { useNavigate, useLocation } from 'react-router-dom';

interface IMenuItemProps {
  item: ItemChildrenProps;
  level: number;
}

function MenuItem({ item, level }: IMenuItemProps): JSX.Element {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { open, changeMenu } = useMenu();
  const handleClick = (id: string) => {
    dispatch(handleChangeMenu({ changeMenu: [id] }));
    navigate(item.url);
  };

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: open ? '1rem' : '1.25rem' }} /> : false;
  const isSelected = changeMenu.findIndex(id => id === item.id) > -1;

  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';

  useEffect(() => {
    const currentIndex = location.pathname
      .toString()
      .split('/')
      .findIndex(id => id === item.id);
    if (currentIndex > -1) {
      dispatch(handleChangeMenu({ changeMenu: [item.id] }));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      disabled={item?.disabled || false}
      onClick={() => handleClick(item.id)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: open ? `${level * 28}px` : 1.5,
        py: !open && level === 1 ? 1.25 : 1,
        ...(open && {
          '&:hover': {
            bgcolor: 'primary.lighter',
          },
          '&.Mui-selected': {
            bgcolor: 'primary.lighter',
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
            '&:hover': {
              color: iconSelectedColor,
              bgcolor: 'primary.lighter',
            },
          },
        }),
        ...(!open && {
          '&:hover': {
            bgcolor: 'transparent',
          },
          '&.Mui-selected': {
            '&:hover': {
              bgcolor: 'transparent',
            },
            bgcolor: 'transparent',
          },
        }),
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!open && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: 'secondary.lighter',
              },
            }),
            ...(!open &&
              isSelected && {
                bgcolor: 'primary.lighter',
                '&:hover': {
                  bgcolor: 'primary.lighter',
                },
              }),
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(open || (!open && level !== 1)) && (
        <ListItemText
          primary={
            <Typography variant="body1" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
              {item.title}
            </Typography>
          }
        />
      )}
    </ListItemButton>
  );
}

export default memo(MenuItem);
