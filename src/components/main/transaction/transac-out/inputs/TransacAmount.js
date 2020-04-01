import React, {Component} from 'react';

export default class TransacAmount extends Component {
  constructor(props) {
    super(props);
    this.state = {value:''}
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({value:newValue});
    this.props.handleInput("amount", newValue);
  }

  render() {
    return (
      <div className="input-group" id="transacOutAmount">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input value={this.state.value} onChange={this.handleChange} type="text" placeholder="0.00" className="form-control"></input>
      </div>
    );
  }


}
