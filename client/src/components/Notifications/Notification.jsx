import { NotificationWrapper } from '../styled/NotificationsStyles';

function Notification({ icon, iconAlt, text }) {
  return (
    <NotificationWrapper>
      <img src={icon} alt={iconAlt} />
      <span>{text}</span>
    </NotificationWrapper>
  );
}

export default Notification;
