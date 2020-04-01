import React, {Component} from 'react';
import SelectAccount from './inputs/SelectAccount';
import DescriptionInput from './inputs/DescriptionInput';
import TransacAmount from './inputs/TransacAmount';
import IsIncome from './inputs/IsIncome';


export default class TransacInModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account:"",
      description:"",
      amount:0.00,
      isIncome:false,
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
      amount:0.00,
      isIncome:false,
    });
  }

  render() {
    // validating form
    let valid = false;
    if (this.state.account !== "" && this.state.amount !== 0.00) {
      valid = true;
    }

    return (
      <div className="modal fade" id="transacInModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Money In</h5>
            </div>
            <div className="modal-body">
              <form>
                <SelectAccount handleInput={this.handleInput} accounts={this.props.accounts}/>
                <DescriptionInput handleInput={this.handleInput} />
                <TransacAmount handleInput={this.handleInput} />
                <IsIncome handleInput={this.handleInput} />
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
