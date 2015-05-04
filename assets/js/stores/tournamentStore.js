'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


var tournamentStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.tournament = {
      rounds: []
    };
    actions.getTournament();
  },

  deliverTournament: function(tournament) {
    this.trigger(tournament);
  },

  getDefaultData: function() {
    return this.tournament;
  }
});

module.exports= tournamentStore;
