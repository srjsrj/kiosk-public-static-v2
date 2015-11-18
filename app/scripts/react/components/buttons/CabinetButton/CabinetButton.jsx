import React, { Component, PropTypes } from 'react';
import Bubble from '../Bubble';

export default class CabinetButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  }
  render() {
    return (
      <Bubble
        {...this.props}
        className="bubble--cabinet element--active-opacity"
      />
    );
  }
}