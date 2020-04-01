import React, {Component} from 'react';

export default class ProgressBar extends Component{
  render() {
    let progressStyle = {
      width: (this.props.balance / this.props.total * 100) + "%"
    };
    return (
      <div className="progressBar">
        <div className="progress" style={progressStyle}></div>
      </div>
    );
  }
}
