var React = require('react');
var mui = require('material-ui');
var Card = require('../controls/card.js');
var MatchPlayer = require('../controls/match-player-widget');

var actions = require('../../actions/actions');
var matchesStore = require('../../stores/matchesStore');
var doubleMatchesStore = require('../../stores/doubleMatchesStore');

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

    var matchDate = new Date(match.date);

    var score = '';
    if (match.score) {
      score = (
        <div>
          <div>
            {match.score.set1} | {match.score.set2} | {match.score.set3}
          </div>
          <div>
            {match.score.summary}
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
            <h4 className="match-info">{match.location}, {matchDate.toLocaleString()}</h4>
            {playerInfo}
          </div>
        </Card>
      </section>
    );

  }
});

module.exports = MatchCard;
