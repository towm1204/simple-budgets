import React, {Component} from 'react';

export default class OutFor extends Component {
  constructor(props) {
    super(props);
    this.state = {value:''}
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({value:newValue});
    this.props.handleInput("outFor", newValue);
  }

  render() {
    let accounts = [];
    for (let acc in this.props.accounts) {
      accounts.push(<option key={acc} value={acc}>{this.props.accounts[acc].name}</option>);
    }
    return (
      <div className="input-group mb-3" id="outFor">
        <div className="input-group-prepend">
          <label className="input-group-text">For</label>
        </div>
        <select value={this.state.value} onChange={this.handleChange} className="custom-select">
          <option disabled></option>
          {accounts}
        </select>
      </div>
    );
  }
}
