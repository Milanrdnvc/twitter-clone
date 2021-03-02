import ReactDOM from 'react-dom';
import Notification from './Notification';
import like from '../../pictures/like.svg';
import comment from '../../pictures/comment.svg';
import { NotificationsWrapper } from '../styled/NotificationsStyles';

function Notifications({ open, setOpen }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <NotificationsWrapper>
      <Notification
        icon={like}
        iconAlt="Like"
        text={'Person just liked your tuwueet!'}
      />
      <Notification
        icon={comment}
        iconAlt="Comment"
        text={'Person just commented on your tuwueet!'}
      />
      <span onClick={() => setOpen(false)}>&times;</span>
    </NotificationsWrapper>,
    document.getElementById('notifications')
  );
}

export default Notifications;
