import React, { Component, PropTypes } from 'react';
import { vendorOrder } from '../../../routes/app';
import FormAuthenticity from '../common/FormAuthenticity';
import CheckoutActions from './CheckoutActions';
import CheckoutStep from './CheckoutStep';
import CheckoutDeliveries from './CheckoutDeliveries';
import CheckoutFields from './CheckoutFields';
import CheckoutPayments from './CheckoutPayments';
import CheckoutCoupon from './CheckoutCoupon';

class Checkout extends Component {
  render() {
    const {
      coupon,
      deliveryType,
      deliveryTypes,
      fields,
      formAuthenticity,
      onDeliveryChange,
      onFieldChange,
      onPaymentChange,
      paymentMethod,
      paymentMethods,
    } = this.props;

    return (
      <form
        acceptCharset="UTF-8"
        action={vendorOrder()}
        className="simple_form new_vendor_order"
        method="POST"
        noValidate="novalidate"
      >
        <FormAuthenticity {...formAuthenticity} />
        <div className="b-cart__form b-form">
          <div className="b-cart__form__inner">
            <CheckoutStep number={1} title="Выберите тип доставки">
              <CheckoutDeliveries
                current={deliveryType}
                items={deliveryTypes}
                onChange={onDeliveryChange}
              />
            </CheckoutStep>
            <CheckoutStep number={2} title="Введите данные">
              <CheckoutFields
                items={fields}
                onChange={onFieldChange}
              />
              {coupon && coupon.show &&
                <CheckoutCoupon code={coupon.value} />
              }
            </CheckoutStep>
            <CheckoutStep number={3} title="Способы оплаты">
              <CheckoutPayments
                current={paymentMethod}
                items={paymentMethods}
                onChange={onPaymentChange}
              />
            </CheckoutStep>
          </div>
          <div className="b-form__row">
            <CheckoutActions />
          </div>
        </div>
      </form>
    );
  }
}

Checkout.propTypes = {
  coupon: PropTypes.object,
  deliveryType: PropTypes.object,
  deliveryTypes: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  formAuthenticity: PropTypes.object,
  onDeliveryChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
  paymentMethod: PropTypes.object,
  paymentMethods: PropTypes.array,
};
Checkout.defaultProps = {
  formAuthenticity: {},
};

export default Checkout;