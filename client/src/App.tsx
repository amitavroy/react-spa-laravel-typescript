import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { ProtectedRoute } from './components/common/router/protected';
import rootReducers from './store/reducers';

import "./assets/css/gloabl.scss";
import "./assets/css/adminlte.css";
import "./assets/css/fontawesome-free/css/all.css";

import Error from './pages/error';
import Login from './pages/login';
import Home from './pages/homepage';
import Profile from './pages/profile';

interface GuestRouteInterface {
  path: string
  component: any
  exact?: boolean
}


const store = createStore(rootReducers);

const guestRoutes: Array<GuestRouteInterface> = [
  { path: "/", component: Login, exact: true }
];

const protectedRoutes: Array<any> = [
  { path: "/home", component: Home, exact: true },
  { path: "/profile", component: Profile, exact: true }
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
          <Provider store={store} >
            {
              protectedRoutes.map((route, key) => {
                return <ProtectedRoute exact={route.exact} path={route.path} component={route.component} key={key} />
              })
            }
          </Provider>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
