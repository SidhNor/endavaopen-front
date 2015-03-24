require('node-jsx').install({ extension: '.js' });

var ServerSideController = {

  index: function(req, res) {
    var React         = require('react');
    var Router        = require('react-router');
    var AppRoutes = require('../../assets/js/app-routes.js');

    Router.create({
        routes: AppRoutes
      })
      // This is our callback function, whenever the url changes it will be called again.
      // Handler: The ReactComponent class that will be rendered
      .run(function (Handler) {
        res.view({
          htmlContent: React.renderToStaticMarkup(React.createElement(Handler))
        });
      });
  }
};

module.exports = ServerSideController;
