import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import MainLayout from './components/layout';

import homePage from './components/containers/homePage';
import aboutPage from './components/containers/about';






export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/about" component={aboutPage} />
      <Route path="/" component={homePage} />
    </Route>
  </Router>
);
