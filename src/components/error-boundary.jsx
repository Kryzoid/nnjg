import React from 'react';
import Oops from '../pages/oops';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <Oops error={this.state.error}/>;
    }

    return this.props.children; 
  }
}