import React, { PropTypes } from 'react';
import Slider from '../common/Slider';

export default class DesignSettingsSlider {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    value: PropTypes.number.isRequired,
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <Slider {...this.props}
              onSlide={::this.handleSlide}
              onChange={::this.handleSlide} />
    );
  }
  handleSlide(range) {
    this.props.onChange(parseFloat(range[0]));
  }
}