import styled from "styled-components";
export const TransactionsList = styled.table`
border-collapse: collapse;
border-spacing: 0;
border-radius: 4px;
margin: 30px auto;
width: auto;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`;
export const Thead = styled.thead`
  background-color: #019db1;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
`;
export const Th = styled.th`
 border-bottom: 1px solid gray;
`
export const TransactionElement = styled.tr`

`
export const TransactionElementInfo = styled.td`
color: gray;
border-bottom: 1px solid gray;
padding: 8px;
text-align: center;
width: 200px;
border-right: 1px solid gray;
:last-child {
  border-right: none;
}

`;
export const Tbody = styled.tbody`
:nth-child(even) {
    background-color: #e6eaee;
  }
`
