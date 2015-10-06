import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ProductBadge {
  static propTypes = {
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }
  render() {
    const { status, text } = this.props;

    return (
      <span className={classNames('b-status', 'b-status_' + status)}>
        {text}
      </span>
    );
  }
}