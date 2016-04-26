import App from './app/AppPage.react';
import Auth from './auth/AuthPage.react';
import Home from './home/HomePage.react';
import Intl from './intl/IntlPage.react';
import NotFound from './notfound/NotFoundPage.react';
import React from 'react';
import Todos from './todos/TodosPage.react';
import { IndexRoute, Route } from 'react-router';

export default function createRoutes(getState) {
  const requireAuth = (nextState, replace) => {
    const loggedInUser = getState().users ? getState().users.viewer : null;
    if (!loggedInUser) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Auth} path="login" />
      <Route component={Intl} path="intl" />
      <Route component={Todos} path="todos" />
      <Route component={NotFound} path="*" />
    </Route>
  );
}
