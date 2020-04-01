import React, {Component} from 'react';

export default class TransacHistItem extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.row.dateTime}</th>
        <td>{this.props.row.description}</td>
        <td>{this.props.row.account}</td>
        <td>{this.props.row.outFor}</td>
        <td>{this.props.row.amount}</td>
        <td>{this.props.row.balance}</td>
      </tr>
    );
  }
}
