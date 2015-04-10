var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Card = React.createClass({

  render: function () {
    var childItems = React.Children.map(this.props.children, function(cardContent, index) {
      return <div className="card-content">{cardContent}</div>;
    });
    return (
      <Paper zDepth={2} className="card-container">
        {childItems}
      </Paper>
    );
  }
});

module.exports = Card;
