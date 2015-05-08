'use strict';

var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var Card = require('../controls/card.js');
var MatchCard = require('../controls/match-card');
var roundStore = require('../../stores/roundStore');

var RoundDetails = React.createClass({

  mixins: [
    Reflux.listenTo(roundStore, '_onActiveRoundUpdate')
  ],

  _onActiveRoundUpdate: function(rounds) {
    var round = rounds.filter(function(round) {
      return round.id == this.props.roundId;
    }.bind(this))[0];
    this.setState({
      round: round
    });
  },

  propTypes: {
    roundId: React.PropTypes.any.isRequired
  },

  componentWillMount: function() {
   this._onActiveRoundUpdate(roundStore.getDefaultData());
  },

  componentWillReceiveProps: function() {
    this.oldRoundProp = this.props.roundId;
  },

  componentDidUpdate: function() {
    if (this.oldRoundProp != this.props.roundId) {
      this.oldRoundProp = this.props.roundId;
      this._onActiveRoundUpdate(roundStore.getDefaultData());
    }
  },

  getInitialState: function() {
    return {
      round: {
        matches: []
      }
    };
  },

  render: function() {

    var matches = this.state.round.matches.map(function(match) {
      return (
        <MatchCard matchId={match.id} key={match.id} isDouble={false}/>
      );
    });

    var doubleMatches = this.state.round.doubleMatches.map(function(doubleMatch) {
      return (
        <MatchCard matchId={doubleMatch.id} key={doubleMatch.id} isDouble={true}/>
      );
    });

    var noMatchesMessage = '';
    if (this.state.round.matches.length === 0 && this.state.round.doubleMatches.length === 0) {
      noMatchesMessage = (
        <div className="no-data-message">
          <Card>
            <h4>There are no matches for this round yet.</h4>
          </Card>
        </div>
      );
    }

    return (
      <div>
        {matches}
        {doubleMatches}
        {noMatchesMessage}
      </div>
    );
  }
});

module.exports = RoundDetails;

