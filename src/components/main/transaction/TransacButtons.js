import React, { Component } from 'react'; //import React Component

export default class TransacButtons extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-5">
          <button id="newTransacOut" className="transacButton btn" data-toggle="modal" data-target="#transacOutModal" type="button" aria-label= "NewOut" htmlFor= "newTransacOut">
            <strong>Money Out</strong>
          </button>
        </div>
        <div className="col-2">
          <button id="transacHist" className="transacButton btn fa fa-book" data-toggle="modal" data-target="#book" type="button" aria-label= "Trasaction history" htmlFor= "transacHist">
          </button>
        </div>
        <div className="col-5">
          <button id="newTransacIn" className="transacButton btn" data-toggle="modal" data-target="#transacInModal" type="button" aria-label= "NewIn" htmlFor= "newTransacIn">
            <strong>Money In</strong>
          </button>
        </div>
      </div>
    );
  }
}
