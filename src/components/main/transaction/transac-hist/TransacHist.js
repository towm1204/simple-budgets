import React, {Component} from 'react';
import TransacHistItem from './TransacHistItem';

export default class TransacHist extends Component {
  render() {
    let sortedHist =[]
    if (this.props.hist) {
      sortedHist = this.props.hist.sort((a, b) => a.dateTime - b.dateTime);
    }
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
            <table className="table table-hover">
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
