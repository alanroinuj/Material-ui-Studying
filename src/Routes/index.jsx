import React from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import MiniDrawer from '../Page/DashBoard';
import FormExemplo from '../Page/Form';
import SignIn from '../Page/SignIn';



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MiniDrawer} path="/" exact />
        <Route component={SignIn} path="/login" exact />
        <Route component={FormExemplo} path="/usuarios/create" exact />
        <Route component={FormExemplo} path="/usuarios/:id" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
