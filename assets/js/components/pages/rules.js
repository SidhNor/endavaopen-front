var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var RulesPage = React.createClass({

  mixins: [
    PageTransitionMixin
  ],

  render: function () {
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');

    return (
      <div className={classes}>
        <section className="page-section">
          <Card>
            <h4>The tournament is open to the following players</h4>
            <div className="layout horizontal">
              <dl>
                <dt>Playing level</dt>
                <dd>2.0 to 3.0</dd>
                <dt>Format</dt>
                <dd>Single and Double Elimination</dd>
                <dt>Gender</dt>
                <dd>M</dd>
              </dl>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>There is a 30 &euro; participation fee</h4>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>The winner of the match will report the match results. Match results are submitted directly on the website where they are checked for score inaccuracies. This means that only scores that are obtainable to finish a match are allowed</h4>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>All tournament players should maintain current contact information. If you change phone numbers or e-mail addresses, you must update your profile so other member can contact you and you will receive email notifications</h4>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = RulesPage;
