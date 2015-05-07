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
  'loadDoubleTournamentFailed',

  //Rounds
  'getRounds',
  'deliverRounds',
  'loadRoundsFailed',

  //Matches
  'getMatches',
  'deliverMatches',
  'loadMatchesFailed',

  //Double Matches
  'getDoubleMatches',
  'deliverDoubleMatches',
  'loadDoubleMatchesFailed'
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

actions.getRounds.listen(function() {
  TournamentApi.getRounds()
    .then(function(resp) {
      actions.deliverRounds(JSON.parse(resp))
    })
    .catch(actions.loadRoundsFailed);
});

actions.getMatches.listen(function() {
  TournamentApi.getMatches()
    .then(function(resp) {
      actions.deliverMatches(JSON.parse(resp))
    })
    .catch(actions.loadMatchesFailed);
});

actions.getDoubleMatches.listen(function() {
  TournamentApi.getDoubleMatches()
    .then(function(resp) {
      actions.deliverDoubleMatches(JSON.parse(resp))
    })
    .catch(actions.loadDoubleMatchesFailed);
});

module.exports = actions;
