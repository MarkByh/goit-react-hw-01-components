import styled from 'styled-components';

export const StatsCard = styled.section`
  border-radius: 4px;
  background-color: #ffffff;
  width: 400px;
  margin: 0 auto 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`;

export const StatsTitle = styled.h2`
font-size : 20px;
text-align: center ; 
`;

export const StatsList = styled.ul`
display: flex;
padding: 0;
margin:0;
`;

export const StatsListItem = styled.li`
color: #ffffff;
text-decoration: none;
text-align: center ; 
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 8px;
    width: calc(100% / 5);
    background-color: ${getRandomHexColor} ;
`
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }