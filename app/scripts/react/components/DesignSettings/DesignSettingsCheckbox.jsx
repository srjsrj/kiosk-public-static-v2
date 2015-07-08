import React, { PropTypes } from 'react';

export default class DesignSettingsCheckbox {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <label className="switcher">
        <input
          type="checkbox"
          checked={this.props.value}
          className="switcher__input"
          onChange={::this.handleChange} />
        <span className="switcher__box">
          <span className="switcher__knob" />
        </span>
      </label>
    );
  }
  handleChange(e) {
    this.props.onChange(e.target.checked);
  }
}