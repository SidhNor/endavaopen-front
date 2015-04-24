'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


var playersStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.players = [];
    actions.getPlayers()
  },

  deliverPlayers: function(players) {
    this.trigger(players);
  },

  getDefaultData: function() {
    return this.players;
  }
});

module.exports= playersStore;
