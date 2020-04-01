import React, {Component} from 'react';

export default class IsIncome extends Component {
  constructor(props) {
    super(props)
    this.state = {value: false} //track the input's value in the state
  }

  handleChange = (event) => {
    let newValue = event.target.checked;
    this.setState({value:newValue});
    this.props.handleInput("isIncome", newValue);

  }

  render(){
    return (
      <div className="input-group" id="isIncome">
        <div className="input-group-prepend">
          <span className="input-group-text">Income?</span>
          <div className="input-group-text">
            <input value={this.state.value} onChange={this.handleChange} type="checkbox" aria-label= "IncomeCheck" htmlFor="EnterIncome"></input>
          </div>
        </div>
      </div>
    );
  }
}
