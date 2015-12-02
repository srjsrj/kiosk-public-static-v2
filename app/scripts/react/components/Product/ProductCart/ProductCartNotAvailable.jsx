import React, { PropTypes } from 'react';

export default class ProductCartNotAvailable {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { title } = this.props;

    return (
      <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__form__row ' + process.env.KIOSK_CSS_PREFIX + 'b-item-full__form__row_fixed'}>
        <div className={process.env.KIOSK_CSS_PREFIX + 'b-item-full__form__submit'}>
          <div className={process.env.KIOSK_CSS_PREFIX + 'b-btn ' + process.env.KIOSK_CSS_PREFIX + 'b-btn_trans'}>
            {title}
          </div>
        </div>
      </div>
    );
  }
}