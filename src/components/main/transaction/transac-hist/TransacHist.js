import React, {Component} from 'react';
import TransacHistItem from './TransacHistItem';

class TransacListItem extends Component {
  render() {
    return(

      <li class="list-group-item">
        <div class="container">
          <div class="row">

          <div class="col">
            {this.props.row.description}
          </div>
          <div class="col-4">
            {this.props.row.amount + "$"}
          </div>
          </div>
        </div>
      </li>);
  }
}

export default class TransacHist extends Component {
  render() {
    let sortedHist =[]
    if (this.props.hist) {
      sortedHist = this.props.hist.sort((a, b) => a.dateTime - b.dateTime);
    }
    let listRows = sortedHist.map((hist) => {
      return(<TransacListItem key ={hist.dateTime} row={hist}/>)
    })


    let rows = sortedHist.map((hist) => {
      return(<TransacHistItem key={hist.dateTime} row={hist}/>)
    })


    return (
      <div className="modal fade" id="book" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Transaction History</h5>
            </div>
            <div className="modal-body">

              <table className="table table-hover" id="transactionTable">
                <thead className="thead">
                  <tr>
                    <th scope="col">Timestamp</th>
                    <th scope="col">Description</th>
                    <th scope="col">Account</th>
                    <th scope="col">For</th>
                    <th scope="col">+/-</th>
                    <th scope="col">Total Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>

              <ul class="list-group" id="transactionList">
                {listRows}
              </ul>

            </div>
            <div className="modal-footer">
              <button type="button" aria-label= "CloseBtn" className="btn btn-secondary" data-dismiss="modal" htmlFor="transacClosed">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
