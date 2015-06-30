import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class DesignSettingsOption {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any.isRequired
  }
  render() {
    return (
      <div className={classNames('design-settings__option', this.props.className)}>
        {this.renderTitle()}
        <div className="design-settings__option-content">
          {this.props.children}
        </div>
      </div>
    );
  }
  renderTitle() {
    if (this.props.title) {
      return (
        <div className="design-settings__option-title">
          {this.props.title}
        </div>
      );
    }
  }
}