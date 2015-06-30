import React, { PropTypes } from 'react';

export default class DesignSettingsCheckbox {
  render() {
    return (
      <label className="switcher">
        <input className="switcher__input" type="checkbox" />
        <span className="switcher__box">
          <span className="switcher__knob" />
        </span>
      </label>
    );
  }
}