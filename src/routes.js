import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';

import App from './containers/App';
import Search from './containers/Search';
import Item from './containers/Item';

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/search" component={Search} />
      <Route path="/make/model/:id" component={Item} />
    </Switch>
  </ConnectedRouter>
);
export default routes;
