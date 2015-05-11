/**
 * Double.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  identity: 'doublematch',
  attributes: {
    date: {
      type: 'date'
    },
    location: {
      type: 'string'
    },
    player11: {
      model: 'Player'
    },
    player12: {
      model: 'Player'
    },
    player21: {
      model: 'Player'
    },
    player22: {
      model: 'Player'
    },

    //Match results
    set1: {
      type: 'string'
    },
    set2: {
      type: 'string'
    },
    set3: {
      type: 'string'
    },
    summary: {
      type: 'string'
    },

    //FK to round
    round: {
      model: 'round'
    }

  }
};

