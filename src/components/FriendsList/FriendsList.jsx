import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({ data }) {
  return (
    <div className={css.friendList_container}>
      <ul className={css.friend_list}>
        {data.map(friend => (
          <li key={friend.id} className={css.item}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  data: PropTypes.array,
};
