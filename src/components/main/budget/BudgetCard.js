import React, {Component} from 'react';
import ProgressBar from '../util/ProgressBar';

export default class BudgetCard extends Component{
  render() {
    return (
      <div className="col-sm-6">
        <div className="budgetTitle bg-info">
          {this.props.budget.name}
          <span className="budgetBalance">
            <em className="budgetSpent">
              {this.props.budget.balance + " | "}
            </em>
            <em className="budgetTotal">
            {this.props.budget.total + "$"}
            </em>
          </span>
        </div>
        <ProgressBar balance={this.props.budget.balance} total={this.props.budget.total}/>
      </div>
    );
  }
}
