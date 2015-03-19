var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;

var Main = React.createClass({

  mixins: [Router.State],

  render: function() {
    var title = 'Endava Open';

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          title={title}
          zDepth={0}>
        </AppBar>

        <RouteHandler />

        <div className="footer full-width-section mui-dark-theme">
          <p>
            Hand crafted with love by Gleb Godonoga.
          </p>
        </div>

      </AppCanvas>
    );
  }

});

module.exports = Main;
