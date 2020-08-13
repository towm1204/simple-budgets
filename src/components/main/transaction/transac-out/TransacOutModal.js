import React, {Component} from 'react';
import SelectAccount from './inputs/SelectAccount';
import DescriptionInput from './inputs/DescriptionInput';
import EOrB from './inputs/EOrB';
import OutFor from './inputs/OutFor';
import TransacAmount from './inputs/TransacAmount';


export default class TransacOutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account:"",
      description:"",
      eOrB:"",
      outFor:"",
      amount:""
    }
  }

  handleInput = (input, value) => {
    this.setState({[input]:value});
  }

  handleAmountChange = (event) => {
    let newValue = event.target.value;
    this.setState({amount:newValue});
  }

  handleAccountChange = (event) => {
    let newValue = event.target.value;
    this.setState({account:newValue});
  }

  handleOutForChange = (event) => {
    let newValue = event.target.value;
    this.setState({outFor:newValue});
  }

  handleDescriptionChange = (event) => {
    let newValue = event.target.value;
    this.setState({description:newValue});
  }

  handleEorB = (event) => {
    let newValue = event.target.value;
    this.setState({eOrB:newValue});
  }

  handleSubmit = (event) => {
    this.props.callback(this.state);
    this.setState({
      account:"",
      description:"",
      eOrB:"",
      outFor:"",
      amount:""
    });
  }

  render() {
    console.log(this.state)
    let valid = false;
    if (this.state.account !== "" && this.state.amount !== 0.00 && this.state.eOrB !=="" && this.state.outFor !== "") {
      valid = true;
    }

    let accounts = [];
    for (let acc in this.props.accounts) {
      accounts.push(<option key={acc} value={acc}>{this.props.accounts[acc].name}</option>);
    }

    let outAccounts = [];
    let accountSet = this.state.eOrB==="expense" ? this.props.expenses:this.props.budgets
    for (let acc in accountSet) {
      outAccounts.push(<option key={acc} value={acc}>{accountSet[acc].name}</option>);
    }

    return (
      <div className="modal fade" aria-labelledby= "Money out" id="transacOutModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Money Out</h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group mb-3"  id="whichAccountOut">
                  <div className="input-group-prepend">
                    <label className="input-group-text">Account</label>
                  </div>
                  <select value={this.state.account} onChange={this.handleAccountChange} className="custom-select" htmlFor="SelectAccount" aria-label= "Select account">
                    <option disabled></option>
                    {accounts}
                  </select>
                </div>

                <div className="input-group mb-3" id="transacInDesc">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                  </div>
                  <input value={this.state.description} onChange={this.handleDescriptionChange} type="text" placeholder="Winco, phonebill, etc." className="form-control" aria-label= "Insert Description" htmlFor="EnterDescription"></input>
                </div>


                <div className="input-group mb-3" id="eOrB">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Expense or Budget</span>
                  </div>
                  <select value={this.state.eOrB} onChange={this.handleEorB} className="custom-select">
                    <option disabled></option>
                    <option value="expense">Expense</option>
                    <option value="budget">Budget</option>
                  </select>
                </div>

                <div className="input-group mb-3" id="outFor">
                  <div className="input-group-prepend">
                    <label className="input-group-text">For</label>
                  </div>
                  <select value={this.state.outFor} onChange={this.handleOutForChange} className="custom-select">
                    <option disabled></option>
                    {outAccounts}
                  </select>
                </div>

                <div className="input-group" id="transacOutAmount">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input value={this.state.amount} onChange={this.handleAmountChange} type="text" placeholder="0.00" className="form-control"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" aria-label="CloseBtn" htmlFor="closingModal" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={this.handleSubmit} disabled={!valid} type="button" aria-label="SaveBtn" htmlFor="SubmittingModal" className="btn btn-primary" data-dismiss="modal" id="transacOutSubmit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
