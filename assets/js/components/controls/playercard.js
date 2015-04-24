'use strict';

var React = require('react');
var mui = require('material-ui');

var Card = require('../controls/card');

var PlayerCard = React.createClass({

  render: function() {
    var player = this.props.player;
    return (
      <Card>
        <h3>{player.fullName}</h3>
        <div className="circle layout horizontal">
          <img src={player.photoUri}></img>
          <div className="layout vertical">
            <div>{player.jobTitle}, {player.deliveryUnit}</div>
            <div>{player.description}</div>
          </div>
        </div>

      </Card>
    );
  }
});

module.exports = PlayerCard;

