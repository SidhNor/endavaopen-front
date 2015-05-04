var React = require('react');
var mui = require('material-ui');
var Paper = mui.Paper;

var Card = React.createClass({

  render: function () {
    var noPaddFirst = this.props.fullScreenFirst;
    var cx = React.addons.classSet(this.props.className, 'card-container');

    var childItems = React.Children.map(this.props.children, function(cardContent, index) {
      if (index === 0 && noPaddFirst) {
        return <div>{cardContent}</div>;
      }
      return <div className="card-content">{cardContent}</div>;
    });
    return (
      <Paper zDepth={2} className={cx}>
        {childItems}
      </Paper>
    );
  }
});

module.exports = Card;
