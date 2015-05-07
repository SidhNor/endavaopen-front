'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


var doubleMatchesStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.matches = [];
    actions.getDoubleMatches();
  },

  deliverDoubleMatches: function(matches) {
    this.matches = matches;
    this.trigger(matches);
  },

  getInitialSate: function() {
    return {
      matches: this.matches
    };
  },

  getDoubleMatchById: function(id) {
    var match = this.matches.filter(function(match) {
      return match.id == id;
    })[0];
    return match ? match : {};
  },

  getDefaultData: function() {
    return this.matches;
  }
});

module.exports= doubleMatchesStore;
