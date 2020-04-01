import React, {Component} from 'react';

export default class StatsCard extends Component {
  render() {
    return (
      <div className="col-6 col-sm-4">
        <div className="stats">
          <strong>{this.props.stat.name}</strong><br></br>
          <em>{this.props.stat.data + "$"}</em>
        </div>
      </div>
    );
  }
}
