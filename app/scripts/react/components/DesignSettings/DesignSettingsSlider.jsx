import React, { PropTypes } from 'react';
import Slider from '../common/Slider';

export default class DesignSettingsSlider {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    value: PropTypes.number.isRequired,
    step: PropTypes.number
  }
  render() {
    return <Slider {...this.props} />;
  }
}