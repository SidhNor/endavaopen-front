'use strict';

var http = require('request-promise');
var baseUrl = typeof window != 'undefined' ? window.location.origin : 'https://open-sidhnor.rhcloud.com';
http.baseUrl = baseUrl;

var standardTournamentId = /*4;*/'55477f8fb6b89ac9a7d23968';
var doubleTournamentId = /*2;*/'5547872bb6b89ac9a7d2396a';

var TournamentApi = {
  getStandardTournament: function() {
    return http.get({url: '/tournament/' + standardTournamentId, baseUrl: baseUrl})
  },

  getDoublesTournament: function() {
    return http.get({url: '/tournament/' + doubleTournamentId, baseUrl: baseUrl})
  }
};

module.exports = TournamentApi;
