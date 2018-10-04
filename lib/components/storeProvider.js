import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) => {
  return class extends React.PureComponent {
    onStoreChange = () => {
      this.setState(this.usedState());
    }
    usedState = () => { 
      return extraProps(this.context.store, this.props);
    }

    state = this.usedState();

    componentDidMount = () => {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
   
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
    }
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return <Component
        {...this.props}
        {...this.usedState()}
        store={this.context.store} />;
    }
  };
};

export default storeProvider;
