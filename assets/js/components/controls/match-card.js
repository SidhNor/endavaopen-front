var React = require('react');
var mui = require('material-ui');
var Card = require('../controls/card.js');
var MatchPlayer = require('../controls/match-player-widget');

var actions = require('../../actions/actions');
var matchesStore = require('../../stores/matchesStore');
var doubleMatchesStore = require('../../stores/doubleMatchesStore');
var moment = require('moment');

var MatchCard = React.createClass({

  propTypes: {
    isDouble: React.PropTypes.bool,
    matchId: React.PropTypes.any.isRequired
  },

  render: function () {
    var match;
    if (this.props.isDouble) {
      match = doubleMatchesStore.getDoubleMatchById(this.props.matchId);
    } else {
      match = matchesStore.getMatchById(this.props.matchId);
    }

    var matchDate = moment.utc(match.date);

    var score = '';
    if (match.set1) {
      score = (
        <div>
          <div>
            {match.set1} | {match.set2} | {match.set3}
          </div>
          <div>
            {match.summary}
          </div>
        </div>
      );
    } else {
      score = (
        <span>
          VS
        </span>
      );
    }
    var playerInfo;
    if (this.props.isDouble) {
      playerInfo = (
        <div className="layout horizontal center">
          <MatchPlayer player={match.player11} player2={match.player12}/>
          <div className="score flex">
            {score}
          </div>
          <MatchPlayer player={match.player21} player2={match.player22}/>
        </div>
      );
    } else {
      playerInfo = (
        <div className="layout horizontal center">
          <MatchPlayer player={match.player1}/>
          <div className="score flex">
            {score}
          </div>
          <MatchPlayer player={match.player2}/>
        </div>
      );
    }
    return (
      <section className="page-section match-card">
        <Card key={match.id}>
          <div>
            <h4 className="match-info">{match.location}, {matchDate.format('MMMM Do YYYY, h:mm a')}</h4>
            {playerInfo}
          </div>
        </Card>
      </section>
    );

  }
});

module.exports = MatchCard;
