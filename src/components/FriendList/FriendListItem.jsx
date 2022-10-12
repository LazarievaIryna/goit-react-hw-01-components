import PropTypes from 'prop-types';
import {
  FriendsListItem,
  FriendsIsOnline,
  FriendsIsOffline,
  FriendsImg,
  FriendsName,
} from '../FriendList/Friend.styled';
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendsListItem key={id}>
      {isOnline ? <FriendsIsOnline /> : <FriendsIsOffline />}
      <FriendsImg src={avatar} alt="User avatar" />
      <FriendsName>{name}</FriendsName>
    </FriendsListItem>
  );
};
FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
