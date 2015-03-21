var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Card = React.createClass({

  render: function () {
    return (
      <Paper zDepth={2} className="card-container">
        <div className="card-content" style={{height: 500}}>
        {this.props.children}
        </div>
      </Paper>
    );
  }
});

module.exports = Card;
