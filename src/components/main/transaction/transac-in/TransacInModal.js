import React, {Component} from 'react';


export default class TransacInModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account:"",
      description:"",
      amount:"",
      isIncome:false,
    }
  }

  handleInput = (input, value) => {
    this.setState({[input]:value});
  }

  handleAccountChange = (event) => {
    let newValue = event.target.value;
    this.setState({account:newValue});
  }

  handleDescriptionChange = (event) => {
    let newValue = event.target.value;
    this.setState({description:newValue});
  }

  handleAmountChange = (event) => {
    let newValue = event.target.value;
    this.setState({amount:newValue});
  }

  handleIncomeChange = (event) => {
    console.log(this.state);
    let newValue = event.target.checked;
    this.setState({isIncome:newValue});
  }

  handleSubmit = (event) => {
    this.props.callback(this.state);
    this.setState({
      account:"",
      description:"",
      amount:"",
      isIncome:this.state.isIncome,
    });
  }

  render() {
    // validating form
    let valid = false;
    if (this.state.account !== "" && this.state.amount !== 0.00) {
      valid = true;
    }

    let accounts = [];
    for (let acc in this.props.accounts) {
      accounts.push(<option key={acc} value={acc}>{this.props.accounts[acc].name}</option>);
    }
    console.log(this.state)

    return (
      <div className="modal fade" id="transacInModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Money In</h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group mb-3"  id="whichAccountIn">
                  <div className="input-group-prepend">
                    <label className="input-group-text">Account</label>
                  </div>
                  <select value={this.state.account} onChange={this.handleAccountChange} className="custom-select" htmlFor="SelectAccount" aria-label= "Select account">
                    <option disabled></option>
                    {accounts}
                  </select>
                </div>

                <div className="input-group mb-3" id="transacOutDesc">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                  </div>
                  <input value={this.state.description} onChange={this.handleDescriptionChange} type="text" placeholder="salary, tip, etc." className="form-control" aria-label= "Insert Description" htmlFor="EnterDescription"></input>
                </div>
                <div className="input-group mb-3" id="transacInAmount">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input value={this.state.amount} onChange={this.handleAmountChange} type="text"  placeholder="0.00" className="form-control" aria-label= "Insert amount" htmlFor="EnterAmount" required></input>
                </div>
                <div className="input-group" id="isIncome">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Income?</span>
                    <div className="input-group-text">
                      <input value={this.state.value} onChange={this.handleIncomeChange} type="checkbox" aria-label= "IncomeCheck" htmlFor="EnterIncome"></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" htmlFor="transacClosed" aria-label="CloseBtn">Close</button>
              <button onClick={this.handleSubmit} disabled={!valid} type="button" className="btn btn-primary" data-dismiss="modal" htmlFor="transacInSubmit" id="transacInSubmit" aria-label="SubmitBtn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
