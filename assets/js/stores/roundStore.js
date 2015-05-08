'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


var roundStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.rounds = [];
    actions.getRounds();
  },

  deliverRounds: function(rounds) {
    this.rounds = rounds;
    this.trigger(rounds);
  },

  getInitialSate: function() {
    return {
      rounds: this.rounds
    };
  },

  getDefaultData: function() {
    return this.rounds;
  }
});

module.exports= roundStore;
