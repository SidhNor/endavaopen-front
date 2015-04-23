var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="mui-app-content-canvas">
        <section className="page-section">
          <Card>
            <h3>
              Endava Open is always magical and this year will be same again.
            </h3>
            <p>Get ready to take part in what will be the 11th edition of the Endava Tennis Tournament.</p>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = HomePage;
