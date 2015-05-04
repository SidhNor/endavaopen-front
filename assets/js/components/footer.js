var React = require('react');
var mui = require('material-ui');
var IconButton = mui.IconButton;
var FlatButton = mui.FlatButton;
var TwitterIcon = require('../components/controls/twitter-icon');
var FacebookIcon = require('../components/controls/facebook-icon');
var TopIcon = require('../components/controls/top-icon');

var Footer = React.createClass({

  handleScrollTop: function() {
    window.scrollTo(0, 0);
  },

  render: function() {
    return (
      <div className="footer mui-dark-theme layout vertical">
        <div className="layout horizontal justified footer-top">
          <span className="footer-share-links--top">
            <IconButton href="https://twitter.com/endava" secondary={true} linkButton={true}>
              <TwitterIcon/>
            </IconButton>
            <IconButton secondary={true} href="https://www.facebook.com/endava" linkButton={true}>
              <FacebookIcon/>
            </IconButton>
          </span>
          <FlatButton linkButton={true} className="back-top" onTouchTap={this.handleScrollTop}>
            <span className="mui-flat-button-label">Back to top</span>
            <TopIcon/>
          </FlatButton>
        </div>
        <div className="footer-content layout horizontal flex">
          <div className="self-end flex"><img src="images/endava-logo.png" alt="Endava Logo"/></div>
          <nav className="layout vertical justified end">
            <FlatButton label="Company" href="http://www.endava.com/en/Company.aspx" linkButton={true}/>
            <FlatButton label="Terms and conditions" href="http://www.endava.com/en/Terms-and-conditions.aspx" linkButton={true}/>
            <FlatButton label="Privacy Policy" href="http://www.endava.com/en/PrivacyStatement.aspx" linkButton={true}/>
            <span className="footer-share-links--bottom">
              <IconButton href="https://twitter.com/endava" secondary={true} linkButton={true}>
                <TwitterIcon/>
              </IconButton>
              <IconButton secondary={true} href="https://www.facebook.com/endava" linkButton={true}>
                <FacebookIcon/>
              </IconButton>
            </span>
          </nav>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
