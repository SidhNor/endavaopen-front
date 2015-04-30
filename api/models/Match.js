/**
* Match.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'match',

  attributes: {
    date: {
      type: 'date'
    },
    location: {
      type: 'string'
    },

    score: {
      model: 'Score'
    },

    player1: {
      model: 'Player'
    },

    player2: {
      model: 'Player'
    },

    //FK to round
    round: {
      model: 'round'
    }

  }
};

