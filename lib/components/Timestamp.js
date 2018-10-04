import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {
  static timeDisplay = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  shouldComponentUpdate = (nextProps) => {
    return (
      this.timeDisplay(this.props.timestamp) !==
      this.timeDisplay(nextProps.timestamp)
    );
  };

  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);
