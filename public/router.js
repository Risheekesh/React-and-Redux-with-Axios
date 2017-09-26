import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import MainLayout from './components/layout';

import ProductListContainer from './components/containers/product-list-container';





export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={ProductListContainer} />
    </Route>
  </Router>
);
