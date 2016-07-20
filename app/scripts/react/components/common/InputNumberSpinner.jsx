import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

export default class InputNumberSpinner extends Component {
  static propTypes = {
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    defaultValue: PropTypes.number
  }
  static defaultProps = {
    step: 1,
    min: 1,
    max: 999,
    value: 1,
    defaultValue: 1
  }
  handleIncrement() {
    this.setValue(parseFloat(this.refs.input.value) + this.props.step);
  }
  handleDecrement() {
    this.setValue(parseFloat(this.refs.input.value) - this.props.step);
  }
  setValue(value) {
    const { step, min, max } = this.props;

    if (!$.isNumeric(value)){
      value = this.props.min;
    }
    if (value < min) {
      value = min;
    }else if (value > max) {
      value = max;
    }

    this.props.onChange(value);
  }

  render() {
    const { step, min, max, value } = this.props;

    return (
      <div className="input-number-spinner">
        <button
          className="input-number-spinner__button input-number-spinner__button__decrement"
          onClick={this.handleDecrement.bind(this)}
        >-</button>
        <input type="number"
          ref="input"
          className="input-number-spinner__input"
          min={min}
          max={max}
          step={step}
          defaultValue={value}
          value={value}
          onChange={(e) => this.props.onChange(e.target.value)}
        />
        <button
          className="input-number-spinner__button input-number-spinner__button__increment"
          onClick={this.handleIncrement.bind(this)}
        >+</button>
      </div>
    );
  }

}
