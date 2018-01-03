import React from 'react';

import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../utils/AsyncFunc';

export default class AppRouter extends React.Component {
  render() {
    const { url } = this.props;

    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../HomePage'))}
        />
        <Route
          component={asyncComponent(() => import('../NotFoundPage'))}
        />
      </Switch>
    );
  }
}
