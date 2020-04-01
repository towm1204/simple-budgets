import React, { Component } from 'react'; //import React Component
import SidebarAccountCard from './SidebarAccountCard';

export default class SidebarAccountList extends Component {
  render() {
    let accountCards = [];
    for (let acc in this.props.accounts) {
      accountCards.push(<SidebarAccountCard key={acc} account={this.props.accounts[acc]}/>);
    }
    return (
      <div id="accountTabContainer">
        {accountCards}
      </div>
    );
  }

}
