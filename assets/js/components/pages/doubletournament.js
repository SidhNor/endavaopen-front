var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');
var Spinner = require('../controls/spinner');
var RoundDetails = require('../controls/round-details');
var PageTransitionMixin = require('../controls/pagetransition-mixin');
var _ = require('underscore');

var Tab = mui.Tab;
var Tabs = mui.Tabs;

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

  _onRoundSwitch: function(tab) {
    this.setState({
      activeRoundId: tab.props.roundId
    });
  },

  render: function () {
    var tournament = this.state.tournament;
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');
    var loadingInd = <section className="page-section"><Card><Spinner></Spinner></Card></section>;
    var me = this;
    var rounds = _.sortBy(tournament.rounds, function(round) {
      return round.precedence;
    }).map(function(round) {
      return (
        <Tab key={round.id} roundId={round.id} label={round.name} onActive={me._onRoundSwitch}>
        </Tab>
      );
    });

    var tabsContent = (
      <div className="card-container transparent">
        <Tabs>
          {rounds}
        </Tabs>
        <RoundDetails roundId={this.state.activeRoundId}/>
      </div>
    );

    return (
      <div className={classes}>
        {this.state.loading ? loadingInd: tabsContent}
      </div>
    );
  },

  onStoreUpdate: function(tournament) {
    var initialRoundId = tournament.rounds.length > 0 ? tournament.rounds[0].id : '';
    this.setState({
      loading: false,
      activeRoundId: initialRoundId,
      tournament: tournament
    })
  }

});

module.exports = TournamentPage;
