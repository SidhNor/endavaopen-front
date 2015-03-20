var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var Tabs = mui.Tabs;
var Tab = mui.Tab;
var IconButton = mui.IconButton;
var NavigationMenu = mui.Icons.NavigationMenu;

var Header = React.createClass({

  mixins: [Router.Navigation, Router.State],

  propTypes: {

  },

  getInitialState: function(){
    var selectedIndex = 0;
    if (this.props.initialSelectedIndex && this.props.initialSelectedIndex < this.props.children.length) {
      selectedIndex = this.props.initialSelectedIndex;
    }
    return {
      selectedIndex: selectedIndex
    };
  },

  render: function () {
    var title = 'Endava Open';

    var homeBtn = !this.isActive('home') ? (
      <IconButton touch={true} className="home-btn" onTouchTap={this._onGoHomeTouchTap}>
        <NavigationMenu/>
      </IconButton>
    ) : '';

    var mastheadContent;
    if (this.isActive('home')) {
      mastheadContent = (<div className="masthead-meta">
        <h2 className="masthead-title">May 14-17, 2015</h2>
        <h4 className="masthead-subtitle">Niagara Fitness Center, <br/>Chisinau, MD </h4>
      </div>);
    } else {
      mastheadContent = '<h1>About</h1>';
    }


    return (
      <header className="masthead bg-primary">
        <Toolbar className="open-menu">
          <ToolbarGroup key={0} float="left">
            <IconButton touch={true} className="menu-btn" onTouchTap={this._onMenuIconButtonTouchTap}>
              <NavigationMenu/>
            </IconButton>
            {homeBtn}
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
            <Tabs>
              <Tab label="Tournament"
                route="tournament"
                onActive={this._onActive} />
              <Tab label="Consolation Rounds" route="consolation" onActive={this._onActive}/>
              <Tab label="Players" route="players" onActive={this._onActive}/>
              <Tab label="Rules" route="rules" onActive={this._onActive}/>
              <Tab label="About" route="about" onActive={this._onActive}/>
            </Tabs>
          </ToolbarGroup>
        </Toolbar>
        <div className="masthead-container">
          <div className="open-logo"/>
          {mastheadContent}
        </div>
      </header>
    );
  },

  _onGoHomeTouchTap: function () {
    this.transitionTo('home');
  },

  _onActive: function (tab) {
    this.transitionTo(tab.props.route);
  },

  _onMenuIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }

});

module.exports = Header;
