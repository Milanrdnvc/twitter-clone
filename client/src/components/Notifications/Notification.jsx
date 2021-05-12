import { NotificationWrapper } from '../styled/NotificationsStyles';
import { useHistory } from 'react-router-dom';

function Notification({ icon, iconAlt, text, tuwueetId, setOpen }) {
  const history = useHistory();

  return (
    <NotificationWrapper
      onClick={() => {
        history.push(`/comments/${tuwueetId}`);
        setOpen(false);
      }}
    >
      <img src={icon} alt={iconAlt} />
      <span>{text}</span>
    </NotificationWrapper>
  );
}

export default Notification;
