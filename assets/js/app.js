(function() {
  'use strict';
  var React = require('react'),
    Router = require('react-router'),
    AppRoutes = require('./app-routes.js'),
    reactGa = require('react-ga'),
    injectTapEventPlugin = require("react-tap-event-plugin");

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();
  var gaId = process.env.GA_TRACKING_ID ? process.env.GA_TRACKING_ID : 'UA-63011549-1';
  reactGa.initialize(gaId);
  /** Render the main app component. You can read more about the react-router here:
   *  https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
   */
  Router
    // Runs the router, similiar to the Router.run method. You can think of it as an
    // initializer/constructor method.
    .create({
      routes: AppRoutes,
      scrollBehavior: Router.ScrollToTopBehavior
    })
    // This is our callback function, whenever the url changes it will be called again.
    // Handler: The ReactComponent class that will be rendered
    .run(function (Handler, state) {
      var root = document.getElementById('approot');
      if (root) {
        reactGa.pageview(state.pathname);
        React.render(<Handler/>, root);
      }
    });
})();
