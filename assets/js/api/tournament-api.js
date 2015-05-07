'use strict';

var http = require('request-promise');
var baseUrl = typeof window != 'undefined' ? window.location.origin : 'https://open-sidhnor.rhcloud.com';
http.baseUrl = baseUrl;

var standardTournamentId = 1; ///*4;*/'55477f8fb6b89ac9a7d23968';
var doubleTournamentId = 2;///*2;*/'5547872bb6b89ac9a7d2396a';

var TournamentApi = {
  getStandardTournament: function() {
    return http.get({url: '/tournament/' + standardTournamentId, baseUrl: baseUrl})
  },

  getDoublesTournament: function() {
    return http.get({url: '/tournament/' + doubleTournamentId, baseUrl: baseUrl})
  },

  getRounds: function() {
    return http.get({url: '/round', baseUrl: baseUrl});
  },

  getMatches: function() {
    return http.get({url: '/match', baseUrl: baseUrl});
  },

  getDoubleMatches: function() {
    return http.get({url: '/doublematch', baseUrl: baseUrl});
  }

};

module.exports = TournamentApi;
