import React, { Component, PropTypes } from 'react';

export default class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }
  render() {
    return (
      <input {...this.props} type="checkbox" />
    );
  }
}