import { Component } from 'react';
import { Section } from '../Section/Section';
import { FormikForm, Input, Radio, Checkbox } from './Form';
import { Transactions } from './Transactions';
import initialTransactions from './transactions.json';
import css from './Form.module.scss';

export class AppForm extends Component {
  state = {
    filter: '',
    subject: null,
    agree: false,
    transactions: initialTransactions,
  };

  componentDidMount() {
    const agree = JSON.parse(localStorage.getItem('agree'));
    const transactions = JSON.parse(localStorage.getItem('transactions'));
    const subject = JSON.parse(localStorage.getItem('subject'));

    agree && this.setState({ agree });
    transactions && this.setState({ transactions });
    subject && this.setState({ subject });
  }

  componentDidUpdate(prevProps, prevState) {
    const { agree, transactions, subject } = this.state;

    prevState.agree !== agree &&
      localStorage.setItem('agree', JSON.stringify(agree));
    prevState.subject !== subject &&
      localStorage.setItem('subject', JSON.stringify(subject));
    prevState.subject !== transactions &&
      localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  // Input (name="filter") // Radio
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  // Checkbox
  handleCheckbox = e => {
    const { name, checked } = e.currentTarget;
    this.setState({ [name]: checked });
  };
  // FormikForm
  addTransaction = newTransaction => {
    console.log(newTransaction);

    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
    }));
    console.log(this.state.transactions);
  };
  // Transactions
  deleteTransaction = transactionId =>
    this.setState(prevState => ({
      transactions: prevState.transactions.filter(
        tratsaction => tratsaction.id !== transactionId
      ),
    }));
  reset = () => this.setState({ filter: '', subject: null });

  render() {
    return (
      <Section title="Form">
        <FormikForm handleSubmit={this.addTransaction} />

        <Checkbox
          handleCheckbox={this.handleCheckbox}
          agree={this.state.agree}
        />

        <Radio handleChange={this.handleChange} subject={this.state.subject} />

        <Input
          handleChange={this.handleChange}
          inputValue={this.state.filter}
          reset={this.reset}
        />

        <button className={css.Btn} onClick={this.reset}>
          Reset
        </button>

        <Transactions
          items={this.state.transactions}
          agree={this.state.agree}
          subject={this.state.subject}
          filter={this.state.filter}
          onDelete={this.deleteTransaction}
        />
      </Section>
    );
  }
}
