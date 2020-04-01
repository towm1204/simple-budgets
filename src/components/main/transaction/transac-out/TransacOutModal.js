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

  handleSubmit = (event) => {
    this.props.callback(this.state);
    this.setState({
      account:"",
      description:"",
      eOrB:"",
      outFor:"",
      amount:0.00
    });
  }

  render() {
    let valid = false;
    if (this.state.account !== "" && this.state.amount !== 0.00 && this.state.eOrB !=="" && this.state.outFor !== "") {
      valid = true;
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
                <SelectAccount accounts={this.props.accounts} handleInput={this.handleInput}/>
                <DescriptionInput handleInput={this.handleInput}/>
                <EOrB handleInput={this.handleInput} />
                <OutFor handleInput={this.handleInput} accounts={this.state.eOrB==="expense" ? this.props.expenses:this.props.budgets} />
                <TransacAmount handleInput={this.handleInput} />
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
