import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendListItem({ friend }) {
  return (
    <div className={css.item}>
      <span className={friend.isOnline ? css.online : css.offline}>
        {friend.isOnline}
      </span>
      <img
        src={friend.avatar}
        alt="User avatar"
        width="48"
        className={css.avatar}
      />
      <p className={css.name}>{friend.name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
