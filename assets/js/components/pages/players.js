'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card');

var actions    = require('../../actions/actions');
var playersStore = require('../../stores/playersStore');

var PlayersPage = React.createClass({

  mixins: [
    Router.Navigation,
    Reflux.listenTo(playersStore, 'onStoreUpdate')
  ],

  statics: {
    willTransitionTo: function (transition, params) {
      actions.getPlayers();
    }
  },

  getInitialState: function() {
    return {
      loading: true,
      players: []
    }
  },

  render: function () {
    var players = this.state.players;

    players = players.map(function(player) {
      return <Card key={player.id}>Player</Card>
    });

    return (
      <div className="mui-app-content-canvas">
        <section className="page-section">
          {this.state.loading ? <div>Loading</div> : players}
        </section>
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
