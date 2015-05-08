'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


var matchesStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.matches = [];
    actions.getMatches();
  },

  deliverMatches: function(matches) {
    this.matches = matches;
    this.trigger(matches);
  },

  getInitialSate: function() {
    return {
      matches: this.matches
    };
  },

  getMatchById: function(id) {
    var match = this.matches.filter(function(match) {
      return match.id == id;
    })[0];
    return match ? match : {};
  },

  getDefaultData: function() {
    return this.matches;
  }
});

module.exports= matchesStore;
