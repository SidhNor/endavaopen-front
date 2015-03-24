var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Master = require('./components/main.js');
var Home = require('./components/pages/home.js');
var Tournament = require('./components/pages/tournament');


/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="tournament" handler={Tournament} addHandlerKey={true}/>
    <Route name="consolation" handler={Tournament} addHandlerKey={true}/>
    <Route name="players" handler={Tournament} addHandlerKey={true}/>
    <Route name="rules" handler={Tournament} addHandlerKey={true}/>
    <Route name="about" handler={Tournament} addHandlerKey={true}/>
    <DefaultRoute handler={Home} addHandlerKey={true} name="home"/>
  </Route>
);

module.exports = AppRoutes;
