import React, { Component, PropTypes } from 'react';
import Bubble from '../Bubble';

export default class DesignButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
  }
  render() {
    const { onClick, text } = this.props;

    return (
      <Bubble
        className="Bubble--design element--active-opacity"
        onClick={onClick}
        text={text}
      />
    );
  }
}