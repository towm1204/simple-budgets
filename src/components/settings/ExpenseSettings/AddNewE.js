import React, {Component} from 'react';

export default class AddNewB extends Component {
  constructor(props) {
    super(props);
    this.state = {name:"", total:""}
  }

  handleInput = (prop, val) => {
    let newState = {[prop]:val}
    this.setState(newState)
  }

  addNew = (event) => {
    this.props.addNew("expenses", this.state.name, this.state.total)
    this.setState({name:"", total:""});
  }

  handleChange1 = (event) => {
    this.setState({name:event.target.value})
  }

  handleChange2 = (event) => {
    this.setState({total:event.target.value})
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input value={this.state.name} onChange={this.handleChange1} type="text" placeholder="Expense" className="form-control"></input>
        <input value={this.state.total} onChange={this.handleChange2} type="text" placeholder="Amount" className="form-control"></input>
        <div className="input-group-append">
          <button onClick={this.addNew} className="btn btn-outline-secondary" type="button">Add New</button>
        </div>
      </div>
    );
  }
}
