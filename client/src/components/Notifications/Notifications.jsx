import ReactDOM from 'react-dom';
import Notification from './Notification';
import like from '../../pictures/like.svg';
import comment from '../../pictures/comment.svg';
import { NotificationsWrapper } from '../styled/NotificationsStyles';
import { getAuthToken, validateToken, GET } from '../../helpers';
import { useEffect, useState } from 'react';

function Notifications({ open, setOpen }) {
  const [NotificationComponent, setNotificationComponent] = useState(null);

  async function getAllNotifications() {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const notifications = (
      await GET('/users/allNotifications', {
        headers: {
          'X-Auth-Token': token,
        },
      })
    ).data.notifications;
    renderNotifications(notifications);
  }

  function renderNotifications(notifications) {
    setNotificationComponent(
      notifications.map((notification, idx) => {
        return (
          <Notification
            icon={notification.type === 'like' ? like : comment}
            text={
              notification.type === 'like'
                ? `${notification.username} liked your tuwueet!`
                : `${notification.username} commented on your tuwueet!`
            }
            iconAlt={notification.type}
            tuwueetId={notification.tuwueetId}
            setOpen={setOpen}
            key={idx}
          />
        );
      })
    );
  }

  useEffect(() => {
    if (!open) return;
    getAllNotifications();
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <NotificationsWrapper>
      {NotificationComponent}
      <span onClick={() => setOpen(false)}>&times;</span>
    </NotificationsWrapper>,
    document.getElementById('notifications')
  );
}

export default Notifications;
