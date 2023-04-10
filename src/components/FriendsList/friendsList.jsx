import PropTypes from 'prop-types';
import {
    FriendsList,
    FriendItem,
    FriendStatus,
    FriendImg,
    FriendName
} from './styledFriendsList.jsx'


export const Friends =({friends} )=> {
    return(
        <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id}>
        

        {isOnline ? (
        <FriendStatus style={{ backgroundColor: 'green' }}></FriendStatus>
      ) : (
        <FriendStatus style={{ backgroundColor: 'red' }}></FriendStatus>
      )}
                
        <FriendImg src={avatar} alt="User avatar"></FriendImg>
        <FriendName>{name}</FriendName>
          
        </FriendItem>
      ))}
        </FriendsList>
    )
}
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