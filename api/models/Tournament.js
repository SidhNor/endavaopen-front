/**
* Tournament.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'tournament',

  attributes: {
    name: {
      type: 'string'
    },
    started: {
      type: 'boolean'
    },
	indoor: {
      type: 'boolean'
    },
    rounds: {
      collection: 'round',
      via: 'tournament'
    }
  }
};

