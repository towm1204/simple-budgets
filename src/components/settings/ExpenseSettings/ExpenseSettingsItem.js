import React, {Component} from 'react';

export default class ExpenseSettingsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {value:""}
  }

  handleChange = (event) => {
    this.setState({value:event.target.value})
  }

  handleDelete = (event) => {
    this.props.handleDelete(this.props.name)
  }

  handleReset = (event) => {
    this.props.handleReset(this.props.name);
  }

  handleEnter = (event) => {
    this.props.handleEnter(this.props.name, this.props.expense.total, Number(this.state.value))
    this.setState({value:""})
  }


  render() {
    let placeholder=this.props.expense.name +": " +this.props.expense.balance + " / " + this.props.expense.total +"$";
    return (
      <div className="input-group mb-1">
        <div className="input-group-prepend">
          <label className="input-group-text">{placeholder}</label>
        </div>
        <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter new total"></input>
        <div className="input-group-append">
          <button onClick={this.handleEnter} className="btn btn-outline-secondary" type="button">Enter</button>
          <button onClick={this.handleReset} className="btn btn-outline-danger" type="button">Reset</button>
          <button onClick={this.handleDelete}className="btn btn-outline-danger" type="button">Delete</button>
        </div>
      </div>
    );
  }

}
