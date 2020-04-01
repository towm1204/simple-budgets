import React, { Component } from 'react'; //import React Component

export default class SidebarAccountCard extends Component {
  render() {
    return (
      <div aria-labelledby={this.props.account.name + "Account"} className="accountTab">
        <strong>{this.props.account.name}</strong><br></br>
        <em>{this.props.account.balance + "$"}</em>
      </div>
    );
  }
}
