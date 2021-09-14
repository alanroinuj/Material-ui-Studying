import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from '../Page/SignIn';
import MiniDrawer from '../Page/DashBoard';
import TokenProvider from '../Context/Provider';
import RoutesPrivate from './Private';

const PagesRoot = () => {
  <Router>
    <TokenProvider>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <RoutesPrivate path="/" component={MiniDrawer} />
    </Switch>
    </TokenProvider>
  </Router>
};

export default PagesRoot;