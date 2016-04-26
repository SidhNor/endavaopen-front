import './Footer.sass';
import Component from 'react-pure-render/component';
import FacebookIcon from '../lib/icons/Facebook.react';
import React from 'react';
import TopIcon from '../lib/icons/Top.react';
import TwitterIcon from '../lib/icons/Twitter.react';
import {IconButton, FlatButton} from 'material-ui';
import { FormattedMessage, defineMessages } from 'react-intl';

// Messages collocation ftw.
// https://github.com/yahoo/react-intl/wiki/API#definemessages
const messages = defineMessages({
  backToTop: {
    defaultMessage: 'Back to top',
    id            : 'footer.backToTop'
  }
});

export default class Footer extends Component {

  render() {
    return (
      <footer className="footer mui-dark-theme layout vertical">
        <div className="layout horizontal justified footer-top">
          <span className="footer-share-links--top">
            <IconButton href="https://twitter.com/endava" secondary={true} linkButton={true}>
              <TwitterIcon/>
            </IconButton>
            <IconButton secondary={true} href="https://www.facebook.com/events/488373711311268/" linkButton={true}>
              <FacebookIcon/>
            </IconButton>
          </span>
          <FlatButton linkButton={true} className="back-top" onTouchTap={this.handleScrollTop}>
            <span className="mui-flat-button-label">
              <FormattedMessage {...messages.backToTop}/>
            </span>
            <TopIcon/>
          </FlatButton>
        </div>
        <div className="footer-content layout horizontal flex">
          <div className="self-end flex"><img src={require('./endava-logo.png')} alt="Endava Logo"/></div>
          <nav className="layout vertical justified end">
            <FlatButton label="Company" href="http://www.endava.com/en/Company.aspx" linkButton={true}/>
            <FlatButton label="Terms and conditions" href="http://www.endava.com/en/Terms-and-conditions.aspx"
                        linkButton={true}/>
            <FlatButton label="Privacy Policy" href="http://www.endava.com/en/PrivacyStatement.aspx" linkButton={true}/>
            <span className="footer-share-links--bottom">
              <IconButton href="https://twitter.com/endava" secondary={true} linkButton={true}>
                <TwitterIcon/>
              </IconButton>
              <IconButton secondary={true} href="https://www.facebook.com/events/488373711311268/" linkButton={true}>
                <FacebookIcon/>
              </IconButton>
            </span>
          </nav>
        </div>
      </footer>
    );
  }

}
