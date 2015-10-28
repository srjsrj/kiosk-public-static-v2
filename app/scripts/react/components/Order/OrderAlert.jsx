import React, { Component, PropTypes } from 'react';
import Alert from '../common/Alert';

export default class OrderAlert extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  render() {
    return (
      <Alert
        className="coupon-info"
        info={true}
        text={this.props.text}
      />
    );
  }
}