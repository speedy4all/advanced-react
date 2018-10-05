import React, { Component } from 'react';
import storeProvider from './storeProvider';

const timeDisplay = (timestamp) => {
  return timestamp && timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }) || '';
};
class Timestamp extends Component {

  shouldComponentUpdate = (nextProps) => {
    return (
      this.props.timestampDisplay !==
      nextProps.timestampDisplay
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
    timestampDisplay: timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);
