import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th className={css.column}>Type</th>
            <th className={css.column}>Amount</th>
            <th className={css.column}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(transaction => (
            <tr className={css.line} key={transaction.id}>
              <td className={css.value}>{transaction.type}</td>
              <td className={css.value}>{transaction.amount}</td>
              <td className={css.value}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
