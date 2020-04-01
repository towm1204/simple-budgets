import React, {Component} from 'react';

export default class EOrB extends Component {
  constructor(props) {
    super(props);
    this.state = {value:''}
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({value:newValue});
    this.props.handleInput("eOrB", newValue);
  }

  render() {
    return (
      <div className="input-group mb-3" id="eOrB">
        <div className="input-group-prepend">
          <span className="input-group-text">Expense or Budget</span>
        </div>
        <select value={this.state.value} onChange={this.handleChange} className="custom-select">
          <option disabled></option>
          <option value="expense">Expense</option>
          <option value="budget">Budget</option>
        </select>
      </div>
    );
  }
}
