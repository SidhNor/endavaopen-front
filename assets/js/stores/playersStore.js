'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


var playersStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.players = [];
  },

  getPlayers: function() {
    //Request players
    //As soon as they arrive
    var me = this;
    setTimeout(function() {
      me.trigger([{id: "12"}, {id: "124"}]);
    }, 2000);
  },

  getDefaultData: function() {
    return this.players;
  }
});

module.exports= playersStore;
