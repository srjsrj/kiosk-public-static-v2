import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class UserbarItem {
  static propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
  }
  render() {
    return (
      <a
        className={classNames('userbar__button', this.props.className)}
        href={this.props.url}
        onClick={::this.handleClick}
      />
    );
  }
  handleClick(e) {
    if (typeof this.props.onClick === 'function') {
      e.preventDefault();
      this.props.onClick();
    }
  }
}