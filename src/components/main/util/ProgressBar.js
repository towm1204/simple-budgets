import React, {Component} from 'react';

export default class ProgressBar extends Component{
  render() {
    let percent = Math.min((this.props.balance / this.props.total * 100), 100)
    let progressStyle = {
      width: (this.props.balance / this.props.total * 100) + "%"
    };
    if (percent >= 100) {
      progressStyle["background-color"] = "#ff0000"
    }
    return (
      <div className="progressBar">
        <div className="progress" style={progressStyle}></div>
      </div>
    );
  }
}
