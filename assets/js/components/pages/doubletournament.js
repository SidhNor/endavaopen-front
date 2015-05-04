var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var actions    = require('../../actions/actions');
var doubleTournamentStore = require('../../stores/doubleTournamentStore');

var TournamentPage = React.createClass({

  mixins: [
    PageTransitionMixin,
    Reflux.listenTo(doubleTournamentStore, 'onStoreUpdate')
  ],

  statics: {
    willTransitionTo: function (transition, params) {
      actions.getDoubleTournament();
    }
  },

  getInitialState: function() {
    var tournamentData = doubleTournamentStore.getDefaultData();
    return {
      loading: true,
      tournament: tournamentData
    };
  },

  render: function () {
    var tournament = this.state.tournament;
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');
    var loadingInd = <section className="page-section"><Card><Spinner></Spinner></Card></section>;
    var rounds = '';
    return (
      <div className={classes}>
        {this.state.loading ? loadingInd : rounds}
        <section className="page-section">
          <Card>Doubles</Card>
        </section>
      </div>
    );
  },

  onStoreUpdate: function(tournament) {
    this.setState({
      loading: false,
      tournament: tournament
    })
  }
});

module.exports = TournamentPage;
