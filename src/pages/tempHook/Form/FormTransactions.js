import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.scss';

export const Transactions = ({ items, agree, subject, filter, onDelete }) => {
  const [selectedId, setSelectedId] = useState(null);
  console.log('useMemo');

  const onSelect = transactionId => setSelectedId(transactionId);

  const filtredItems = useMemo(() => {
    // console.log(Date.now());
    return items.filter(item =>
      subject ? item.type === subject : item.type.includes(filter)
    );
  }, [filter, items, subject]);

  return (
    <div style={{ paddingBottom: '30px' }}>
      <table className={css.Table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Actions</th>
          </tr>
        </thead>

        {agree && (
          <tbody items={filtredItems}>
            {filtredItems.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount.toFixed(2)}</td>
                <td>{currency}</td>
                <td>
                  {selectedId === id ? (
                    <span>id: {selectedId}</span>
                  ) : (
                    <button onClick={() => onSelect(id)}>Detail</button>
                  )}
                  <button onClick={() => onDelete(id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
