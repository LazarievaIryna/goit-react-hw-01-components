import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Username,
  UserDetail,
  UserImg,
  StatsList,
  StatsListItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description>
        <UserImg src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <UserDetail>@{tag}</UserDetail>
        <UserDetail>{location}</UserDetail>
      </Description>

      <StatsList>
        <StatsListItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsListItem>
      </StatsList>
    </Wrapper>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
