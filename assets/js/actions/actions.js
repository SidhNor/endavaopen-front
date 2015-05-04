'use strict';

var Reflux = require('reflux');
var PlayerApi = require('../api/player-api');
var TournamentApi = require('../api/tournament-api');

var actions = Reflux.createActions([

  //Players actions
  'getPlayers',
  'deliverPlayers',
  'loadPlayersFailed',

  //Standard tournament actions
  'getTournament',
  'deliverTournament',
  'loadTournamentFailed',

  //Double tournament actions
  'getDoubleTournament',
  'deliverDoubleTournament',
  'loadDoubleTournamentFailed'
]);


actions.getPlayers.listen(function() {
  PlayerApi.getPlayers()
    .then(function(resp) {
      actions.deliverPlayers(JSON.parse(resp))
    })
    .catch(actions.loadPlayersFailed);
});


actions.getTournament.listen(function() {
  TournamentApi.getStandardTournament()
    .then(function(resp) {
      actions.deliverTournament(JSON.parse(resp))
    })
    .catch(actions.loadTournamentFailed);
});

actions.getDoubleTournament.listen(function() {
  TournamentApi.getDoublesTournament()
    .then(function(resp) {
      actions.deliverDoubleTournament(JSON.parse(resp))
    })
    .catch(actions.loadDoubleTournamentFailed);
});


module.exports = actions;
