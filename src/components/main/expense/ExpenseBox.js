import React, {Component} from 'react';
import ExpenseCard from './ExpenseCard';

export default class ExpenseBox extends Component {
  render() {
    let expenseCards = [];
    for (let e in this.props.expenses) {
      expenseCards.push(<ExpenseCard key={e} expense={this.props.expenses[e]}/>);
    }
    return (
      <div className="row">
        {expenseCards}
      </div>
    );
  }
}
