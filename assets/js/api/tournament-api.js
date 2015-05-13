'use strict';

var http = require('request-promise');
var baseUrl = typeof window != 'undefined' ? window.location.origin : 'https://open-sidhnor.rhcloud.com';
http.baseUrl = baseUrl;

var standardTournamentId = /*4;*/'555356891c7b02c207162f44';
var doubleTournamentId = /*2;*/'555356901c7b02c207162f45';

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
