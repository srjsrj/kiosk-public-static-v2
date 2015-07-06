import React, { PropTypes } from 'react';

export default class DesignSettingsCloseButton {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <div
        className="design-settings__close"
        onClick={this.props.onClick}
      />
    );
  }
}