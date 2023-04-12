import PropTypes from 'prop-types';
import { FriendsList, FriendItem } from './styledFriendsList.jsx';
import { FriendListItem } from './FriendListItem.jsx';

export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendItem>
      ))}
    </FriendsList>
  );
};
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
