import React, { Component } from 'react'; //import React Component
import AccountBalanceCard from './AccountBalanceCard';


export default class AccountBalanceList extends Component {
  render() {
    let accountCards = [];
    for (let acc in this.props.accounts) {
      accountCards.push(<AccountBalanceCard key={acc} account={this.props.accounts[acc]}/>);
    }
    return (
      <div id="accountsContainer">
        {accountCards}
      </div>
    );
  }
}
