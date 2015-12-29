import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';

export default class ProductAddToCartButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }
  render() {
    return (
      <button
        className="b-btn element--active-opacity"
        data-disable-with={t('vendor.button.disable_with.adding')}
        disabled={this.props.disabled}
        name="to_cart"
        type="submit"
      >
        {this.props.text}
      </button>
    );
  }
}