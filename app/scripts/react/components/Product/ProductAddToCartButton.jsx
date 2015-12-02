import React, { PropTypes } from 'react';
import { t } from 'i18next';

export default class ProductAddToCartButton {
  static propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }
  render() {
    return (
      <button
        className={process.env.KIOSK_CSS_PREFIX + 'b-btn ' + process.env.KIOSK_CSS_PREFIX + 'element--active-opacity'}
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