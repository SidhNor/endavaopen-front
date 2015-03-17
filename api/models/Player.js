/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    fullName: {
      type: 'string'
    },
    photoUri: {
      type: 'string'
    },
    hqPhotoUri: {
      type: 'string'
    },
    deliveryUnit: {
      type: 'string'
    },
    jobTitle: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    seedNumber: {
      type: 'string'
    }
  }
};

