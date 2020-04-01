import React, {Component} from 'react';
import BudgetCard from './BudgetCard';

export default class BudgetBox extends Component {
  render() {
    let budgetCards = [];
    for (let b in this.props.budgets) {
      budgetCards.push(<BudgetCard key={b} budget={this.props.budgets[b]}/>)
    }
    return (
      <div className="row">
        {budgetCards}
      </div>
    );
  }
}
