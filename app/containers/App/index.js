/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import shortid from 'shortid';
import GlobalStyle from '../../global-styles';
import { routes } from '../../routes';
import '../../custom.css';
import '../../App.scss';
import PrivateRoute from "../hoc/privateRoute";
import PublicRoute from "../hoc/publicRoute";
import Header from '../../components/Header/Loadable';
// import Header from '../../component/Header/Loadable';


export default function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          {routes.map(
            route =>
              route.ispublic ? (
                <PublicRoute
                  exact
                  path={route.path}
                  component={withRouter(route.component)}
                  key={shortid.generate()}
                />
              ) :
            (
              <PrivateRoute
                exact
                path={route.path}
                component={withRouter(route.component)}
                key={shortid.generate()}
              />
            )
          )}
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}
