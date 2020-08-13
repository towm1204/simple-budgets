import React, { Component } from 'react'; //import React Component
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
  render() {
    return (
      <nav className="navbar navbar-dark">
        <div>
          <button aria-label= "Account collapse button" id="hamburger" htmlFor="hamburger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#accountBalanceCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <button onClick={this.props.toggleModal} aria-label= "setting button" id="settingsButton2" htmlFor="settingsButton2" className="navbar-toggler" type="button">
            <span className="fa fa-cog"></span>
          </button>
        </div>
        <span>
          <button onClick={this.props.handleSignout} className="btn btn-warning">{"Log out: " + this.props.displayName}</button>
          <h1>Simple Budget</h1>
        </span>
      </nav>
    );
  }
}
