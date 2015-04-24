var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('material-ui');
var Footer = require('./footer.js');
var Header = require('./header.js');
var AppCanvas = mui.AppCanvas;
var AppLeftNav = require('./left-nav.js');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Main = React.createClass({

  mixins: [Router.Navigation, Router.State],

  render: function () {
    var name = this.getRoutes().slice(0).reverse()[0].name;
    var pageCx = '';
    if (name) {
      pageCx = name + '-page';
    } else {
      pageCx = 'home-page';
    }

    return (
      <AppCanvas predefinedLayout={1} className={pageCx}>
        <AppLeftNav ref="leftNav" />
        <Header currentPage={name}/>
        <RouteHandler key={name}/>
        <Footer />

      </AppCanvas>
    );
  }
});

module.exports = Main;
