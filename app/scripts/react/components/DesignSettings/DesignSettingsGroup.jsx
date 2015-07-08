import React, { PropTypes } from 'react';

export default class DesignSettingsGroup {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }
  render() {
    return (
      <div className="design-settings__group">
        <div className="design-settings__group-header">
          {this.props.title}
        </div>
        <div className="design-settings__group-content">
          {this.props.children}
        </div>
      </div>
    );            
  }
}