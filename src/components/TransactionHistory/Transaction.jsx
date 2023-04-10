import PropTypes from 'prop-types';
import {
    TransactionsList,
    TransactionElement,
    TransactionElementInfo,
    Thead,
    Th,
    Tbody
} from './styledTransaction';
export const Transactions = ({items} ) => {
    return (
    <TransactionsList>
    <Thead>
            <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
            </tr>
    </Thead>
    {items.map(({  type, amount, id, currency})=>(
         <Tbody key={id}>
         <TransactionElement  >
           <TransactionElementInfo>{type}</TransactionElementInfo>
           <TransactionElementInfo>{amount}</TransactionElementInfo>
           <TransactionElementInfo>{currency}</TransactionElementInfo>
         </TransactionElement>
       </Tbody>
    ))}

    </TransactionsList>
    )
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };