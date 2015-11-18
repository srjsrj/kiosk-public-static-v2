import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Icon extends Component {
  static propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
  }
  render() {
    const { active, name } = this.props;

    if (name) {
      const iconClasses = classNames({
        ['flaticon-' + name]: true,
        'icon--active': active,
      });

      return (
        <i className={iconClasses} />
      );
    }

    return null;
  }
}