var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card.js');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="mui-app-content-canvas">
        <section className="page-section">
          <Card>Home</Card>
        </section>
        /*<div className="home-page-hero full-width-section">
          <div className="home-page-hero-content">
            <h1 className="brand-name">Endava Open 11 edition</h1>
          </div>
        </div>
        */
      </div>
    );
  }
});

module.exports = HomePage;
