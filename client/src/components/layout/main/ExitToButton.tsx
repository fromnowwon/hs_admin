import { Tooltip, IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import useLogin from 'hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { persistor } from 'store';

function ExitToButton(): JSX.Element {
  const { logout } = useLogin();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    await persistor.purge();
    navigate('/login');
  };

  return (
    <Tooltip title="logout" placement="bottom">
      <IconButton onClick={handleLogout} sx={{ color: 'text.primary' }}>
        <ExitToAppIcon />
      </IconButton>
    </Tooltip>
  );
}

export default ExitToButton;
