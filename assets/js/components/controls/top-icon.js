var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var TopIcon = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
      </SvgIcon>
    );
  }

});

module.exports = TopIcon;
