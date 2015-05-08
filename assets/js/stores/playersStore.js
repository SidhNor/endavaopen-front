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

  getPlayerById: function(id) {
    return this.players.filter(function(player) {
      return player.id == id;
    })[0];
  },

  getDefaultData: function() {
    return this.players;
  }
});

module.exports= playersStore;
