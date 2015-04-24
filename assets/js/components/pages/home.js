var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="mui-app-content-canvas">
        <Card>
          <h3>
            Endava Open is always magical and this year will be no different.
          </h3>
          <div className="layout vertical">
            This is a unique opportunity where representatives across our Endava units meet for some great time together, to share Endava experiences from different locations, and of course to fight for the Endava Championship Title
          </div>
        </Card>
        <section className="onsite-pic"></section>
      </div>
    );
  }
});

module.exports = HomePage;
