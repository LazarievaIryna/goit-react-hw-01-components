import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 500px;
  margin-left: auto;
  margin-right: auto;

  border-collapse: collapse;
  text-align: center;
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 1px 4px 6px 0 rgb(0 0 0 / 16%), 0 4px 4px 0 rgb(0 0 0 / 6%),
    0 1px 1px 0 rgb(0 0 0 / 12%);
`;
export const TransactionTableHead = styled.thead`
  height: 30px;
  font-size: 12px;
  background-color: #25a7b7;
  text-transform: uppercase;
`;
export const TransactionTableHeadTr = styled.tr``;
export const TransactionTableHeadTh = styled.th`
  font-size: 16px;
  color: white;
  border: 1px solid rgb(228, 228, 228);
  font-weight: 400;
  padding: 10px;
`;
export const TransactionTableBody = styled.tbody`
  width: 100%;
  background-color: white;
`;
export const TransactionTableBodyTr = styled.tr`
  /* border: 1px solid rgb(228, 228, 228); */
  :nth-child(even) {
    background-color: #e5f0f1;
  }
`;
export const TransactionTableBodyTd = styled.td`
  border: 1px solid rgb(228, 228, 228);
  padding: 10px;
  color: gray;
`;
export const TransactionTableBodyTdUpper = styled.td`
  border: 1px solid rgb(228, 228, 228);
  padding: 10px;
  color: gray;
  ::first-letter {
    text-transform: uppercase;
  }
`;
