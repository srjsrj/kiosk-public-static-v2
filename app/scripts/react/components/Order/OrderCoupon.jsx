import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import * as apiRoutes from '../../../routes/api';
import makeTranslatable from '../HoC/makeTranslatable';
import OrderAlert from './OrderAlert';
import TextInput from '../common/TextInput';

@makeTranslatable
export default class OrderCoupon extends Component {
  static propTypes = {
    code: PropTypes.string,
    message: PropTypes.string,
  }
  static defaultProps = {
    code: '',
    message: '',
  }
  state = {
    code: this.props.code,
    message: this.props.message,
  }
  updateMessage(message) {
    this.setState({ message });
  }
  checkCode(code) {
    if (this.pendingRequest) this.pendingRequest.abort();

    this.pendingRequest = $.ajax({
      url: apiRoutes.checkCouponCode(),
      type: 'POST',
      data: { code },
    });

    return this.pendingRequest;
  }
  handleChange(e) {
    const { value } = e.target;
    const { code } = this.state;

    if (value === code || value === '') {
      this.updateMessage('');
    } else {
      this.updateMessage(t('vendor.coupon.checking'));

      this.checkCode(code)
        .then((data) => {
          let message;

          if (data && data.isActual) {
            message = t('vendor.coupon.discount', { discount: data.discount });
          } else {
            message = t('vendor.coupon.invalid', { value });
          }

          this.updateMessage(message);
        })
        .fail((xhr, textStatus) => {
          let message;

          if (textStatus === 'abort') {
            message = t('vendor.coupon.invalid', { value });
          } else {
            message = t('vendor.coupon.error');
          }

          this.updateMessage(message);
        });
    }

    this.setState({ code: value });
  }
  render() {
    const { code, message } = this.state;

    return (
      <div className="b-form__row__widget">
        <div className="form-group string optional">
          <label
            className="string optional control-label"
            htmlFor="vendor_order_coupon_code"
          >
            {t('vendor.order.fields.coupon_code')}
          </label>
          <TextInput
            className="string optional form-control"
            id="vendor_order_coupon_code"
            name="vendor_order[coupon_code]"
            onChange={::this.handleChange}
            placeholder={t('vendor.placeholders.coupon')}
            value={code}
          />
        </div>
        {code && <OrderAlert text={message} />}
      </div>
    );
  }
}