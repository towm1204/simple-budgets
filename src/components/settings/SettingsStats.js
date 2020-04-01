import React, {Component} from 'react';

export default class SettingsStats extends Component {
  render() {
    let statsList =[]
    for (let s in this.props.stats) {
      statsList.push(<li key={s} className="list-group-item">{this.props.stats[s].name + ": " + this.props.stats[s].data + "$"}</li>);
    }
    return (
      <ul className="list-group list-group-flush mb-4">
        {statsList}
      </ul>
    );
  }
}
