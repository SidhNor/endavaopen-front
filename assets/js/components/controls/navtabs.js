var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Tab = mui.Tab;
var InkBar = require('./ink-bar');

var _ = require('underscore');

var Navtabs = React.createClass({

  mixins: [Router.State],

  propTypes: {
    onActive: React.PropTypes.func
  },

  getInitialState: function(){
    return {
      selectedIndex: -1
    };
  },

  computeWidths: function() {
    var childrenDom = this.getDOMNode().children[0].children;
    return _.map(childrenDom, function (child, i) {
      return parseInt(window.getComputedStyle(child).getPropertyValue('width'), 10);
    });
  },

  componentDidMount: function(){
    _this = this;
    _.delay(function() {
      _this.setState({
        childWidths: _this.computeWidths()
      });
    }, 1000);
  },

  _getSelectedIndex: function() {
    var routeIndex = -1;
    var _this = this;
    _.some(this.props.children, function(child, index) {
      if (_this.isActive(child.props.route)) {
        routeIndex = index;
        return true;
      }
    });
    return routeIndex;
  },

  handleTouchTap: function(tabIndex, tab){
    if (this.props.onChange && this.state.selectedIndex !== tabIndex) {
      this.props.onChange(tabIndex, tab);
    }

    this.setState({selectedIndex: tabIndex});
    //default CB is _onActive. Can be updated in tab.jsx
    if(tab.props.onActive) tab.props.onActive(tab);
  },

  render: function(){
    var _this = this;
    var selectedIndex = this._getSelectedIndex();
    var width = selectedIndex >= 0 && this.state.childWidths ? this.state.childWidths[selectedIndex] : 0;
    var left = 0;
    _.some(this.state.childWidths, function(childWidth, i) {
      if (i >= selectedIndex) {
        return true;
      }
      left += childWidth;
    });
    var tabs = React.Children.map(this.props.children, function(tab, index){
      if(tab.type.displayName === "Tab"){
        return React.addons.cloneWithProps(tab, {
          key: index,
          selected: selectedIndex === index,
          tabIndex: index,
          handleTouchTap: _this.handleTouchTap
        })
      } else {
        var type = tab.type.displayName || tab.type;
        throw "Tabs only accepts Tab Components as children. Found " + type + " as child number " + (index + 1) + " of Tabs";
      }
    });

    return (
      <div className="mui-tabs-container">
        <div className="mui-tab-item-container">
          {tabs}
        </div>
        <InkBar left={left} width={width}/>
      </div>
    )
  }

});

module.exports = Navtabs;

