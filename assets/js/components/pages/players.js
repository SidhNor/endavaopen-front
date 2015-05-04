'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card');
var PlayerCard = require('../controls/playercard');
var Spinner = require('../controls/spinner');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var actions    = require('../../actions/actions');
var playersStore = require('../../stores/playersStore');

var PlayersPage = React.createClass({

  mixins: [
    Router.Navigation,
    Reflux.listenTo(playersStore, 'onStoreUpdate'),
    PageTransitionMixin
  ],

  statics: {
    willTransitionTo: function (transition, params) {
      actions.getPlayers();
    }
  },

  getInitialState: function() {
    var playersData = playersStore.getDefaultData();
    return {
      loading: true,
      players: playersData
    };
  },

  render: function () {
    var players = this.state.players;

    if (players.length == 0) {
      players = <section className="page-section"><Card><h3>There are no players registered for the tournament</h3></Card></section>
    } else {
      players = players.map(function(player) {
        return  <section className="page-section" key={player.id}><PlayerCard player={player}></PlayerCard></section>
      });
    }

    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');
    var loadingInd = <section className="page-section"><Card><Spinner></Spinner></Card></section>;
    return (
      <div className={classes}>
          {this.state.loading ? loadingInd : players}
      </div>
    )
  },

  onStoreUpdate: function(playersData) {
    this.setState({
      loading: false,
      players: playersData
    })
  }

});

module.exports = PlayersPage;
