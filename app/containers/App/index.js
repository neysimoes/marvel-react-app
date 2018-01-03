import React, { Component } from 'react';

import { connect } from 'react-redux';

import AppRouter from './AppRouter';
import Navbar from 'components/Navbar';

export class App extends Component {
  render() {
    let { url } = this.props.match;
    return (
      <div>
        <Navbar />
        <AppRouter url={url} />
      </div>
    );
  }
}

export default connect()(App);
