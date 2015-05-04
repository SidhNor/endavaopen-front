'use strict';

var React = require('react');
var mui = require('material-ui');

var Card = require('../controls/card');

var PlayerCard = React.createClass({

  render: function() {
    var player = this.props.player;
    var picUrl = player.hqPhotoUri !== '' ? player.hqPhotoUri : '/images/no-pic.jpg';
    var bgImg = {
      backgroundImage: 'url(' + picUrl + ')'
    };
    return (
      <Card>
        <h3>{player.fullName}</h3>
        <div className="layout horizontal player">
          <div className="circle pic" style={bgImg}></div>
          <div className="layout vertical info">
            <div>{player.jobTitle}, {player.deliveryUnit}</div>
            <div dangerouslySetInnerHTML={{__html: player.description}}></div>
          </div>
        </div>

      </Card>
    );
  }
});

module.exports = PlayerCard;

