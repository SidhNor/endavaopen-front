/**
* Score.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'score',

  attributes: {
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
    match: {
      model: 'match'
    }
  }
};
