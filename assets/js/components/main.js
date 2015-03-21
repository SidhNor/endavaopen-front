var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var Footer = require('./footer.js');
var Header = require('./header.js');
var AppBar = mui.AppBar;
var IconButton = mui.IconButton;
var AppCanvas = mui.AppCanvas;
var NavigationMenu = mui.Icons.NavigationMenu;
var AppLeftNav = require('./left-nav.js');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Main = React.createClass({

  mixins: [Router.Navigation, Router.State],

  render: function () {
    var name = this.getRoutes().slice(0).reverse()[0].name;
    return (
      <AppCanvas predefinedLayout={1} className={name + '-page'}>
        <AppLeftNav ref="leftNav" />
        <Header />
        <TransitionGroup component="div" transitionName="example" style={{position: 'relative'}}>
          <RouteHandler key={name}/>
        </TransitionGroup>
        <Footer />

      </AppCanvas>
    );
  }
});

module.exports = Main;
