import React, {Component} from 'react';
import SettingsStats from './SettingsStats';
import BudgetSettingsItem from './BudgetSettings/BudgetSettingsItem';
import AddNewB from './BudgetSettings/AddNewB';
import ExpenseSettingsItem from './ExpenseSettings/ExpenseSettingsItem';
import AddNewE from './ExpenseSettings/AddNewE';
import AccountSettingsItem from './AccountSettings/AccountSettingsItem';
import AddNewA from './AccountSettings/AddNewA';
import PendingIncome from './PendingIncome';

import _ from 'lodash';


export default class SettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets:"",
      accounts:"",
      expenses:"",
      stats:"",
      hist:""
  }
}

  componentDidMount() {
    let budgets = Object.keys(this.props.budgets).reduce((total, curr) => {
      total[curr] = Object.assign({}, this.props.budgets[curr]);
      return total;
    }, {})

    let accounts = Object.keys(this.props.accounts).reduce((total, curr) => {
      total[curr] = Object.assign({}, this.props.accounts[curr]);
      return total;
    }, {})

    let expenses = Object.keys(this.props.expenses).reduce((total, curr) => {
      total[curr] = Object.assign({}, this.props.expenses[curr]);
      return total;
    }, {})

    let stats = Object.keys(this.props.stats).reduce((total, curr) => {
      total[curr] = Object.assign({}, this.props.stats[curr]);
      return total;
    }, {})

    this.setState(
      {
        budgets: budgets,
        accounts: accounts,
        expenses: expenses,
        stats: stats,
        hist: this.props.hist
      })
  }

  handleEnterB = (budgetName, oldTotal, newTotal) => {
    this.setState((currentState) => {
      let newState= {budgets:currentState.budgets, stats:currentState.stats}
      let change = newTotal - oldTotal;
      newState.stats.remainingbudget.data += change;
      newState.stats.netsavings.data -= change;
      newState.budgets[budgetName].total = newTotal;
      return newState;
      })
  }

  handleDeleteB = (budgetName) => {
    this.setState((currentState) => {
      let newState = {budgets:currentState.budgets, stats:currentState.stats}
      let change = newState.budgets[budgetName].total - newState.budgets[budgetName].balance;
      newState.stats.remainingbudget.data -= change;
      newState.stats.budgetspent.data -= newState.budgets[budgetName].balance
      newState.stats.netsavings.data += change;
      delete newState.budgets[budgetName];

      return newState;
    })
  }

  handleResetB = (budgetName) => {
    this.setState((currentState) => {
      let newState = {budgets:currentState.budgets, stats:currentState.stats}
      newState.stats.remainingbudget.data += newState.budgets[budgetName].balance;
      newState.stats.budgetspent.data -= newState.budgets[budgetName].balance;
      newState.stats.netsavings.data -= newState.budgets[budgetName].balance;
      newState.budgets[budgetName].balance = 0.00;
      return newState;
    })
  }

  handleEnterE = (expenseName, oldTotal, newTotal) => {
    this.setState((currentState) => {
      let newState= {expenses:currentState.expenses, stats:currentState.stats}
      let change = newTotal - oldTotal;
      newState.stats.remainingexpense.data += change;
      newState.stats.netsavings.data -= change;
      newState.expenses[expenseName].total = newTotal;
      return newState;
      })
  }

  handleDeleteE = (expenseName) => {
    this.setState((currentState) => {
      let newState = {expenses:currentState.expenses, stats:currentState.stats}
      let change = newState.expenses[expenseName].total - newState.expenses[expenseName].balance;
      newState.stats.remainingexpense.data -= change;
      newState.stats.netsavings.data += change;
      delete newState.expenses[expenseName];

      return newState;
    })
  }

  handleResetE = (expenseName) => {
    this.setState((currentState) => {
      let newState = {expenses:currentState.expenses, stats:currentState.stats}
      newState.stats.remainingexpense.data += newState.expenses[expenseName].balance;
      newState.stats.netsavings.data -= newState.expenses[expenseName].balance;
      newState.expenses[expenseName].balance = 0.00;
      return newState;
    })
  }

  handleEnterA = (accountName, oldTotal, newTotal) => {
    this.setState((currentState) => {
      let newState= {accounts:currentState.accounts, stats:currentState.stats}
      let change = Number(newTotal - oldTotal);
      newState.stats.accounttotal.data += change;
      newState.stats.netsavings.data += change;
      newState.accounts[accountName].balance = newTotal;
      return newState;
      })
  }

  handleDeleteA = (accountName) => {
    this.setState((currentState) => {
      let newState = {accounts:currentState.accounts, stats:currentState.stats}
      let change = Number(newState.accounts[accountName].balance);
      newState.stats.accounttotal.data -= change;
      newState.stats.netsavings.data -= change;
      delete newState.accounts[accountName];

      return newState;
    })
  }

  addNew = (type, name, amount) => {
    this.setState((currentState) => {
      let newState = {[type]:currentState[type], stats:currentState.stats}
      let newName = name.replace(/\s/g,'').toLowerCase();
      newState[type][newName] = {};
      newState[type][newName]["name"] = name;
      if(type === "budgets") {
        newState.stats.remainingbudget.data += Number(amount);
        newState.stats.netsavings.data -= Number(amount);
        newState[type][newName]["balance"] = 0.00;
        newState[type][newName]["total"] = Number(amount);
      } else if (type === "expenses") {
        newState.stats.remainingexpense.data += Number(amount);
        newState.stats.netsavings.data -= Number(amount);
        newState[type][newName]["balance"] = 0.00;
        newState[type][newName]["total"] = Number(amount);
      } else {
        newState.stats.accounttotal.data += Number(amount);
        newState.stats.netsavings.data += Number(amount);
        newState[type][newName]["balance"] = Number(amount);
      }
      return newState;
    })
  }

  handleIncome = (amount) => {
    this.setState((currentState) => {
      let newState = {stats:currentState.stats}
      newState.stats.netsavings.data += Number(amount) - newState.stats.pendingincome.data;
      newState.stats.pendingincome.data = Number(amount);
      return newState;
    })
  }

  handleSubmit = (event) => {
    let newState = this.state;
    if (_.isEmpty(newState.expenses)) {
      newState.expenses = "";
    }
    if (_.isEmpty(newState.budgets)) {
      newState.budgets = "";
    }
    if (_.isEmpty(newState.accounts)) {
      newState.accounts = "";
    }
    this.props.submitSettings(newState);
  }

  render() {
    let budgetItems = []
    for (let b in this.state.budgets) {
      budgetItems.push(<BudgetSettingsItem key={b} name={b} handleReset={this.handleResetB} handleDelete={this.handleDeleteB} handleEnter={this.handleEnterB} budget={this.state.budgets[b]}/>)
    }

    let expenseItems = []
    for (let e in this.state.expenses) {
      expenseItems.push(<ExpenseSettingsItem key={e} name={e} expense={this.state.expenses[e]} handleReset={this.handleResetE} handleDelete={this.handleDeleteE} handleEnter={this.handleEnterE} />)
    }
    let accountItems = []
    for (let a in this.state.accounts) {
      accountItems.push(<AccountSettingsItem key={a} name={a} account={this.state.accounts[a]} handleDelete={this.handleDeleteA} handleEnter={this.handleEnterA} />)
    }
    return (
      <div className="modal show" id="settingsModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Settings</h5>
              <div>
              <button onClick={this.props.toggleModal} type="button" aria-label="CloseBtn" htmlFor="closeModal" className="btn btn-secondary mr-1">Close</button>
              <button onClick={this.handleSubmit} type="button" aria-label="SaveBtn" htmlFor="saveModal" className="btn btn-primary">Save changes</button>
              </div>
            </div>
            <div className="modal-body">
              <form>
                <SettingsStats stats={this.state.stats}/>

                <em>Budget</em>
                {budgetItems}
                <AddNewB addNew={this.addNew}/>

                <em>Expense</em>
                {expenseItems}
                <AddNewE addNew={this.addNew} />

                <em>Accounts</em>
                {accountItems}
                <AddNewA addNew={this.addNew} />

                <em>Pending Income</em>
                <PendingIncome handleIncome={this.handleIncome} stats={this.state.stats}/>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
