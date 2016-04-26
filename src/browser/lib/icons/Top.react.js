import Component from 'react-pure-render/component';
import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';

export default class TwitterIcon extends Component {

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
      </SvgIcon>
    );
  }
}
