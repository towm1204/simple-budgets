import React, {Component} from 'react';
import StatsCard from './StatsCard';

export default class StatsBox extends Component {
  render() {
    let statsCards = [];
    for (let s in this.props.stats) {
      statsCards.push(<StatsCard key={s} stat={this.props.stats[s]}/>);
    }
    return (
      <div className="row">
        {statsCards}
      </div>
    );
  }
}
