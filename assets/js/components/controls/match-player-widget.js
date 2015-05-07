'use strict';

var React = require('react');
var mui = require('material-ui');

var Card = require('../controls/card');

var MatchPlayer = React.createClass({

  propTypes: {
    player: React.PropTypes.any.isRequired
  },

  render: function() {
    var player = this.props.player;
    var player2 = this.props.player2 ? this.props.player2 : false;
    if (player2) {
      //We are doubles here
      var picUrl = player.photoUri !== '' ? player.photoUri : '/images/no-pic.jpg';
      var bgImg = {
        backgroundImage: 'url(' + picUrl + ')'
      };
      picUrl = player2.photoUri !== '' ? player2.photoUri : '/images/no-pic.jpg';
      var bgImg2 = {
        backgroundImage: 'url(' + picUrl + ')'
      };
      return (
        <div className="layout vertical player center doubles">
          <div className="circle pic" style={bgImg}></div>
          <div className="circle pic second" style={bgImg2}></div>
          <h5>
            {player.fullName}
          </h5>
          <h5 className="second">
            {player2.fullName}</h5>
        </div>
      );
    } else {
      var picUrl = player.photoUri !== '' ? player.photoUri : '/images/no-pic.jpg';
      var bgImg = {
        backgroundImage: 'url(' + picUrl + ')'
      };
      return (
        <div className="layout vertical player center">
          <div className="circle pic" style={bgImg}></div>
          <h5>
            {player.fullName}
          </h5>
        </div>
      );
    }
  }
});

module.exports = MatchPlayer;

