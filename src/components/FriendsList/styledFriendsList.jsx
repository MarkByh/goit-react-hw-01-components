import styled from 'styled-components';

export const FriendsList = styled.ul``;
export const FriendItem = styled.li`
  display:flex;
  gap 5px;
  text-decoration: none;
 margin-top: 10px;
 padding: 5px;
 box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px;
  align-items: center;
  border: 1px solid lightgray;
`;
export const FriendStatus = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${friends => (friends.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  display: inline-block;
`;
export const FriendImg = styled.img`
  border-radius: 20%;
  width: 30px;
  height: 30px;
`;
export const FriendName = styled.p`
  font-size: 14px;
`;
