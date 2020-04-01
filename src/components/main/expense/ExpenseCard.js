import React, {Component} from 'react';
import ProgressBar from '../util/ProgressBar';

export default class ExpenseCard extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <div className="expenseTitle bg-info">
          {this.props.expense.name}
          <span className="expenseBalance">
            <em className="expensePaid">
              {this.props.expense.balance + " | "}
            </em>
            <em className="expenseTotal">
              {this.props.expense.total + "$"}
            </em>
          </span>
        </div>
        <ProgressBar balance={this.props.expense.balance} total={this.props.expense.total}/>
      </div>
    );
  }
}
