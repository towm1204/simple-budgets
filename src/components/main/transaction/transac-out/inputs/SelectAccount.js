import React, {Component} from 'react';


export default class SelectAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''} //track the input's value in the state
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({value:newValue});
    this.props.handleInput("account", newValue);
  }

  render() {
    let accounts = [];
    for (let acc in this.props.accounts) {
      accounts.push(<option key={acc} value={acc}>{this.props.accounts[acc].name}</option>);
    }

    return (
      <div className="input-group mb-3"  id="whichAccountOut">
        <div className="input-group-prepend">
          <label className="input-group-text">Account</label>
        </div>
        <select value={this.state.value} onChange={this.handleChange} className="custom-select" htmlFor="SelectAccount" aria-label= "Select account">
          <option disabled></option>
          {accounts}
        </select>
      </div>
    );
  }
}
