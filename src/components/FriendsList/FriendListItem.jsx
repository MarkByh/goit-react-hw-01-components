import { FriendStatus, FriendImg, FriendName } from './styledFriendsList.jsx';

import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt="User avatar"></FriendImg>
      <FriendName>{name}</FriendName>
    </>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
