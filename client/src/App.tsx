import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/common/router/protected';

import "./assets/css/gloabl.scss";
import "./assets/css/adminlte.css";
import "./assets/css/fontawesome-free/css/all.css";

import Error from './pages/error';
import Login from './pages/login';
import Home from './pages/homepage';

interface GuestRouteInterface {
  path: string
  component: any
  exact?: boolean
}

const guestRoutes: Array<GuestRouteInterface> = [
  { path: "/", component: Login, exact: true }
];

const protectedRoutes: Array<any> = [
  { path: "/home", component: Home, exact: true }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            guestRoutes.map((route, key) => {
              return <Route exact={route.exact} path={route.path} component={route.component} key={key} />
            })
          }
          {
            protectedRoutes.map((route, key) => {
              return <ProtectedRoute exact={route.exact} path={route.path} component={route.component} key={key} />
            })
          }
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
