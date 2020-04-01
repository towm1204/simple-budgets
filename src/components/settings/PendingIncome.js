import React, {Component} from 'react';

export default class PendingIncome extends Component {
  constructor(props) {
    super(props);
    this.state = {value:""}
  }

  handleChange = (event) => {
    this.setState({value:event.target.value})
  }

  handleEnter = (event) => {
    this.props.handleIncome(Number(this.state.value));
  }

  render() {
    let placeholder = ""
    if(typeof this.props.stats.pendingincome !== "undefined") {
      placeholder = "Current: " + this.props.stats.pendingincome.data + "$"
    }
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text">{placeholder}</label>
        </div>
        <input value={this.state.value} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter new" aria-label="Pending Income"></input>
          <div className="input-group-append">
            <button onClick={this.handleEnter} className="btn btn-outline-secondary" type="button">Enter</button>
          </div>
      </div>
    );
  }

}
