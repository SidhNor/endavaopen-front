/**
* Round.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'round',

  attributes: {

    name: {
      type: 'string'
    },
    day: {
      type: 'string'
    },
    precedence: {
      type: 'integer'
    },

    tournament: {
      model: 'tournament'
    },

    matches: {
      collection: 'match',
      via: 'round'
    },

    doubleMatches: {
      collection: 'doublematch',
      via: 'round'
    }

  }
};

