import React, {Component} from 'react';

import AccountBalanceList from './header/AccountBalanceList';
import NavBar from './header/NavBar';
import StatsBox from './main/stats/StatsBox';
import BudgetBox from './main/budget/BudgetBox';
import ExpenseBox from './main/expense/ExpenseBox';
import SidebarAccountList from './main/sidebar/SidebarAccountList';
import TransacButtons from './main/transaction/TransacButtons';
import TransacInModal from './main/transaction/transac-in/TransacInModal';
import TransacOutModal from './main/transaction/transac-out/TransacOutModal';
import TransacHist from './main/transaction/transac-hist/TransacHist';
import SettingsModal from './settings/SettingsModal';

import firebase from 'firebase/app';

export default class DashBoard extends Component {
  handleSignout = (event) => {
    firebase.auth().signOut()
    .catch(err => console.log(err)); //log any errors for debugging
  }

  submitSettings = (newState) => {
      let userRef = firebase.database().ref('users').child(this.props.s.user.uid);
      userRef.set(newState)
      this.props.toggleModal()
  }

  transacIn = (detail) => {
    let newState = {
      accounts:this.props.s.accounts,
      budgets:this.props.s.budgets,
      expenses:this.props.s.expenses,
      stats:this.props.s.stats,
      hist:this.props.s.hist
    }

    newState.accounts[detail.account].balance += Number(detail.amount);
    newState.stats.accounttotal.data += Number(detail.amount);
    if (detail.isIncome) {
      newState.stats.pendingincome.data -= Number(detail.amount);
    }
    newState.stats.netsavings.data = newState.stats.accounttotal.data - newState.stats.remainingbudget.data - newState.stats.remainingexpense.data + newState.stats.pendingincome.data;
    // add into history
    let currentDT = new Date();
    if (newState.hist === "") {
      newState.hist = [];
    }
    newState.hist.unshift({
      dateTime: currentDT.toString().slice(0,25),
      description:detail.description,
      account:newState.accounts[detail.account].name,
      outFor:detail.isIncome? 'Income': '-',
      amount:detail.amount,
      balance:newState.stats.accounttotal.data
    })
    let userRef = firebase.database().ref('users').child(this.props.s.user.uid);
    userRef.set(newState);
  }

  transacOut = (detail) => {
    let newState={
      accounts:this.props.s.accounts,
      stats:this.props.s.stats,
      budgets:this.props.s.budgets,
      expenses:this.props.s.expenses,
      hist:this.props.s.hist
    }
    newState.accounts[detail.account].balance -= Number(detail.amount);
    newState.stats.accounttotal.data -= Number(detail.amount);
    if (detail.eOrB === "budget") {
      newState.budgets[detail.outFor].balance += Number(detail.amount);
      newState.stats.budgetspent.data += Number(detail.amount);
      newState.stats.remainingbudget.data -= Number(detail.amount);
    } else {
      newState.expenses[detail.outFor].balance += Number(detail.amount);
      newState.stats.remainingexpense.data -= Number(detail.amount);
    }
    newState.stats.netsavings.data = newState.stats.accounttotal.data - newState.stats.remainingbudget.data - newState.stats.remainingexpense.data + newState.stats.pendingincome.data;
    // add into history
    let currentDT = new Date();
    if (newState.hist === "") {
      newState.hist = [];
    }
    newState.hist.unshift({
      dateTime: currentDT.toString().slice(0,25),
      description:detail.description,
      account:newState.accounts[detail.account].name,
      outFor:(detail.eOrB==="expense"? "Expense: " + this.props.s.expenses[detail.outFor].name: "Budget: " + this.props.s.budgets[detail.outFor].name) ,
      amount:"-" + detail.amount,
      balance:newState.stats.accounttotal.data
    })
    let userRef = firebase.database().ref('users').child(this.props.s.user.uid);
    userRef.set(newState);
  }

  render() {
    return(
      <div>
        <header className="fixed-top">
          <div className="collapse" id="accountBalanceCollapse">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" id="accountBalanceTitle" aria-label= "Account balance" htmlFor="accountBalanceTitle" >Account Balance</h5>
                <button onClick={this.props.toggleModal} id="settingsButton" type="button" className="btn btn-secondary" aria-label="Settings button" htmlFor="settingsButton" >Settings</button>
                <hr></hr>
                <AccountBalanceList accounts={this.props.s.accounts} />
              </div>
            </div>
          </div>
          <NavBar displayName={this.props.s.user.displayName} toggleModal={this.props.toggleModal} handleSignout={this.handleSignout} />
        </header>

        <main>
          <div className="main-container">
            <section className="main-item">
              <div className="container">
                <div className="row">
                  <div className="col-12" id="statistics" htmlFor="statistics" aria-label= "Statistic Section">
                    <div className="card m-2">
                      <div className="card-body">
                        <StatsBox stats={this.props.s.stats}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" id="budget" htmlFor="budget" aria-label= "Budget section">
                    <div className="card m-2">
                      <div className="card-body">
                        <h5 className="card-title">Budget</h5>
                        <BudgetBox budgets={this.props.s.budgets} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12" id="expense" aria-label="Expense section">
                    <div className="card m-2">
                      <div className="card-body">
                        <h5 className="card-title">Expense</h5>
                        <ExpenseBox expenses={this.props.s.expenses} />
                      </div>
                    </div>
                  </div>
                  <div className="container" id="buttonContainer">
                    <TransacButtons />
                  </div>
                </div>
              </div>
            </section>

            <section className="main-item" id="sideBar">
              <h5>Account Balance</h5>
              <hr></hr>
              <SidebarAccountList accounts={this.props.s.accounts}/>
            </section>
          </div>
        </main>

        <footer>
          <p>&copy; Simple Budget</p>
        </footer>
        <TransacInModal callback={this.transacIn} accounts={this.props.s.accounts}/>
        <TransacOutModal callback={this.transacOut} accounts={this.props.s.accounts} budgets={this.props.s.budgets} expenses={this.props.s.expenses}/>
        <TransacHist hist={this.props.s.hist}/>

        { this.props.s.settingsShow &&
          <SettingsModal toggleModal={this.props.toggleModal} submitSettings={this.submitSettings} hist={this.props.s.hist} accounts={this.props.s.accounts} budgets={this.props.s.budgets} expenses={this.props.s.expenses} stats={this.props.s.stats}/>
        }
      </div>
    );
  }

}
