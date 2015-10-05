import React, { PropTypes } from 'react';

export default class HiddenInput {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }
  render() {
    const { name, value } = this.props;

    return (
      <input
        name={name}
        type="hidden"
        value={value}
      />
    );
  }
}