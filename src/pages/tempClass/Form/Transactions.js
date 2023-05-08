import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.scss';

export class Transactions extends Component {
  state = { id: null };

  onSelect = transactionId => this.setState({ id: transactionId });

  render = () => {
    const { items, agree, subject, filter, onDelete } = this.props;
    const filtredItems = items.filter(item =>
      subject ? item.type === subject : item.type.includes(filter)
    );

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
                    {this.state.id === id ? (
                      <span>id: {this.state.id}</span>
                    ) : (
                      <button onClick={() => this.onSelect(id)}>Detail</button>
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
}

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
