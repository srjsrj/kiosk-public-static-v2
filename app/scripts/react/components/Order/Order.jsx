import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';
import Checkout from '../Checkout';
import OrderTitle from './OrderTitle';

class Order extends Component {
  render() {
    const {
      backUrl,
      coupon,
      deliveryType,
      deliveryTypes,
      errorMessage,
      fields,
      formAuthenticity,
      onDeliveryChange,
      onFieldChange,
      onPaymentChange,
      paymentType,
      paymentTypes,
      publicOffer,
      submitOrderUrl,
      t,
      totalCount,
      totalPrice,
    } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <OrderTitle
            t={t}
            totalCount={totalCount}
            totalPrice={totalPrice}
          />
          <Checkout
            backUrl={backUrl}
            coupon={coupon}
            deliveryType={deliveryType}
            deliveryTypes={deliveryTypes}
            errorMessage={errorMessage}
            fields={fields}
            formAuthenticity={formAuthenticity}
            onDeliveryChange={onDeliveryChange}
            onFieldChange={onFieldChange}
            onPaymentChange={onPaymentChange}
            paymentType={paymentType}
            paymentTypes={paymentTypes}
            publicOffer={publicOffer}
            submitOrderUrl={submitOrderUrl}
            t={t}
          />
        </div>
      </section>
    );
  }
}

Order.propTypes = {
  backUrl: PropTypes.string,
  coupon: PropTypes.object.isRequired,
  deliveryType: PropTypes.object.isRequired,
  deliveryTypes: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  fields: PropTypes.object.isRequired,
  formAuthenticity: schemas.formAuthenticity,
  onDeliveryChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
  paymentType: PropTypes.object.isRequired,
  paymentTypes: PropTypes.object.isRequired,
  publicOffer: schemas.checkoutPublicOffer,
  submitOrderUrl: PropTypes.string,
  t: PropTypes.func.isRequired,
  totalCount: PropTypes.number,
  totalPrice: PropTypes.object.isRequired,
};

export default Order;