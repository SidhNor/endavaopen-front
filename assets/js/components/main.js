var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var AppBar = mui.AppBar;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var Tabs = mui.Tabs;
var Tab = mui.Tab;
var IconButton = mui.IconButton;
var ActionGrade = mui.Action
var AppCanvas = mui.AppCanvas;
var RaisedButton= mui.RaisedButton;
var NavigationMenu = mui.Icons.NavigationMenu;

var Main = React.createClass({

  mixins: [Router.State],

  render: function () {
    var title = 'Endava Open';

    return (
      <AppCanvas predefinedLayout={1}>
        <Toolbar className="open-menu">
          <ToolbarGroup key={0} float="left">
            <IconButton touch={true}>
              <NavigationMenu/>
            </IconButton>
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
            <Tabs tabWidth="150">
              <Tab label="About"
                route="home"
                onActive={this._onActive} />
              <Tab label="Schedule" route="home"/>
              <Tab label="Rules" route="home"/>
              <Tab label="Player" route="home"/>
            </Tabs>
          </ToolbarGroup>

        </Toolbar>

        <RouteHandler />

        <div className="footer full-width-section mui-dark-theme">
          <p>
            Hand crafted with love by Gleb Godonoga.
          </p>
        </div>

      </AppCanvas>
    );
  },

  _onActive: function (tab) {
    this.transitionTo(tab.props.route);
  }

});

module.exports = Main;
