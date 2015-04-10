var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');

var TournamentPage = React.createClass({
  render: function () {
    return (
      <div className="mui-app-content-canvas">
        <section className="page-section">
          <Card>Tournament</Card>
        </section>
      </div>
    );
  }
});

module.exports = TournamentPage;
