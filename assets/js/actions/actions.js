'use strict';

var Reflux = require('reflux');
var PlayerApi = require('../api/player-api');

var actions = Reflux.createActions([
  'getPlayers',
  'deliverPlayers',
  'loadPlayersFailed'
]);


actions.getPlayers.listen(function() {
  PlayerApi.getPlayers()
    .then(function(resp) {
      actions.deliverPlayers(JSON.parse(resp))
    })
    .catch(actions.loadPlayersFailed);
});


module.exports = actions;
