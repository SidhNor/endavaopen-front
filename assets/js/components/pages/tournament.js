var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');
var Spinner = require('../controls/spinner');
var PageTransitionMixin = require('../controls/pagetransition-mixin');
var _ = require('underscore');

var Tab = mui.Tab;
var Tabs = mui.Tabs;

var actions    = require('../../actions/actions');
var tournamentStore = require('../../stores/tournamentStore');

var TournamentPage = React.createClass({

  mixins: [
    PageTransitionMixin,
    Reflux.listenTo(tournamentStore, 'onStoreUpdate')
  ],

  statics: {
    willTransitionTo: function (transition, params) {
      actions.getTournament();
    }
  },

  getInitialState: function() {
    var tournamentData = tournamentStore.getDefaultData();
    return {
      loading: true,
      tournament: tournamentData
    };
  },

  render: function () {
    var tournament = this.state.tournament;
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');
    var loadingInd = <section className="page-section"><Card><Spinner></Spinner></Card></section>;
    var rounds = _.sortBy(tournament.rounds, function(round) {
      return round.precedence;
    }).map(function(round) {
      return (
        <Tab key={round.id} label={round.name}>
          <section className="page-section"><Card>{round.name}</Card></section>
        </Tab>
      );
    });

    var tabsContent = (
      <div className="card-container transparent">
        <Tabs>
        {rounds}
        </Tabs>
      </div>
    );

    return (
      <div className={classes}>
        {this.state.loading ? loadingInd: tabsContent}
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
