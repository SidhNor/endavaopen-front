var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');

var HomePage = React.createClass({

  render: function () {
    return (
      <div className="mui-app-content-canvas">
        <div className="home-page-hero full-width-section">
          <div className="home-page-hero-content">
            <h1 className="brand-name">Endava Open 11 edition</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
