'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


var doubleTournamentStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.doubleTournament = {
      rounds: []
    };
    actions.getDoubleTournament()
  },

  deliverDoubleTournament: function(tournament) {
    this.trigger(tournament);
  },

  getDefaultData: function() {
    return this.doubleTournament;
  }
});

module.exports= doubleTournamentStore;
