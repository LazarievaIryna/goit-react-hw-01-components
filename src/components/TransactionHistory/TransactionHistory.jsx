import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableHeadTr,
  TransactionTableHeadTh,
  TransactionTableBody,
  TransactionTableBodyTr,
  TransactionTableBodyTd,
  TransactionTableBodyTdUpper,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <TransactionTableHeadTr>
          <TransactionTableHeadTh>Type</TransactionTableHeadTh>
          <TransactionTableHeadTh>Amount</TransactionTableHeadTh>
          <TransactionTableHeadTh>Currency</TransactionTableHeadTh>
        </TransactionTableHeadTr>
      </TransactionTableHead>

      <TransactionTableBody>
        {items.map(item => (
          <TransactionTableBodyTr key={item.id}>
            <TransactionTableBodyTdUpper>
              {item.type}
            </TransactionTableBodyTdUpper>
            <TransactionTableBodyTd>{item.amount}</TransactionTableBodyTd>
            <TransactionTableBodyTd>{item.currency}</TransactionTableBodyTd>
          </TransactionTableBodyTr>
        ))}
      </TransactionTableBody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
