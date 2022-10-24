import CampaignIcon from '@mui/icons-material/Campaign';
import BusinessIcon from '@mui/icons-material/Business';
import { ItemProps } from 'interface/menu/menuInfo';

const menuIcons = { CampaignIcon, BusinessIcon };

const management: ItemProps = {
  id: 'management',
  title: '관리',
  type: 'group',
  children: [
    {
      id: 'notice',
      title: '공지사항 관리',
      type: 'item',
      url: '/main/notice',
      icon: menuIcons.CampaignIcon,
    },
    {
      id: 'company',
      title: '회사 관리',
      type: 'item',
      url: '/main/company',
      icon: menuIcons.BusinessIcon,
    },
  ],
};

export default management;
