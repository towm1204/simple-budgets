import React, {Component} from 'react';

export default class DescriptionInput extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''} //track the input's value in the state
  }

  handleChange = (event) => {
    let newValue = event.target.value;
    this.setState({value:newValue});
    this.props.handleInput("description", newValue);
  }

  render() {
    return (
      <div className="input-group mb-3" id="transacOutDesc">
        <div className="input-group-prepend">
          <span className="input-group-text">Description</span>
        </div>
        <input value={this.state.value} onChange={this.handleChange} type="text" placeholder="salary, tip, etc." className="form-control" aria-label= "Insert Description" htmlFor="EnterDescription"></input>
      </div>
    );
  }
}
