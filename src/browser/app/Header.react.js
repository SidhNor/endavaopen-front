import Component from 'react-pure-render/component';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <header>
        <h1>
          <Link to="/">
            <FormattedMessage {...linksMessages.home} />
          </Link>
        </h1>
        <ul>
          <li>
            <Link activeClassName="active" to="/todos">
              <FormattedMessage {...linksMessages.todos} />
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/intl">
              <FormattedMessage {...linksMessages.intl} />
            </Link>
          </li>
        </ul>
      </header>
    );
  }

}
