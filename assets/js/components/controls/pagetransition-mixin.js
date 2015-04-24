'use strict';

var React = require('react');

module.exports = {

  statics: {
    willTransitionFrom: function(transition, component, callback) {
      component.setState({
        leaving: true
      });
      setTimeout(function() {
        callback()
      }, 650);
    }
  },

  getInitialState: function getInitialState() {
    return {
      leaving: false,
      entering: true,
      enteringActive: false
    }
  },

  componentDidMount: function componentDidMount() {
    var me = this;
    setTimeout(function() {
      me.setState({enteringActive: true});
    }, 1);
    setTimeout(function() {
      me.setState({entering: false});
    }, 650);
  },

  getCurrentAnimClasses: function() {
    return React.addons.classSet({
      'stepped-leave': this.state.leaving,
      'stepped-leave-active': this.state.leaving,
      'stepped-enter': this.state.entering,
      'stepped-enter-active': this.state.entering && this.state.enteringActive
    });
  }


};
