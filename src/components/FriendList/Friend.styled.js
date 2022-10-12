import styled from 'styled-components';
export const FriendsListItem = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 1px 4px 6px 0 rgba(0, 0, 0, 0.16), 0 4px 4px 0 rgba(0, 0, 0, 0.06),
    0 1px 1px 0 rgba(0, 0, 0, 0.12);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendsIsOnline = styled.span`
  width: 10px;
  height: 10px;
  background-color: green;
  display: block;
  border-radius: 50%;
  margin-left: 10px;
`;
export const FriendsIsOffline = styled.span`
  width: 10px;
  height: 10px;
  background-color: red;
  display: block;
  border-radius: 50%;
  margin-left: 10px;
`;
export const FriendsImg = styled.img`
  width: 48px;
  margin-left: 10px;
  display: block;
  border-radius: 4px;
  border: 1px solid gray;
`;
export const FriendsName = styled.p`
  font-size: 16px;
  margin-left: 10px;
  font-weight: 600;
`;
export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;
