var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var TournamentPage = React.createClass({

  mixins: [
    PageTransitionMixin
  ],

  render: function () {
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');

    return (
      <div className={classes}>
        <section className="page-section">
          <Card>Tournament</Card>
        </section>
      </div>
    );
  }
});

module.exports = TournamentPage;
