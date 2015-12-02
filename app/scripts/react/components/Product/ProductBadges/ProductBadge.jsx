import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ProductBadge {
  static propTypes = {
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }
  render() {
    const { status, text } = this.props;
    const badgeClasses = classNames({
      'b-status': true,
      ['b-status_' + status]: true,
      'ProductBadge': true,
      ['ProductBadge--' + status]: true,
    });

    return (
      <span className={badgeClasses}>
        {text}
      </span>
    );
  }
}