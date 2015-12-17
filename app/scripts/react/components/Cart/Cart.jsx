import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';
import Checkout from '../Checkout';
import CartTitle from './CartTitle';

class Cart extends Component {
  render() {
    const {
      coupon,
      deliveryType,
      deliveryTypes,
      errorMessage,
      fields,
      formAuthenticity,
      onDeliveryChange,
      onFieldChange,
      onPaymentChange,
      paymentMethod,
      paymentMethods,
      publicOffer,
      totalCount,
      totalPrice,
    } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <CartTitle totalCount={totalCount} totalPrice={totalPrice} />
          <Checkout
            coupon={coupon}
            deliveryType={deliveryType}
            deliveryTypes={deliveryTypes}
            errorMessage={errorMessage}
            fields={fields}
            formAuthenticity={formAuthenticity}
            onDeliveryChange={onDeliveryChange}
            onFieldChange={onFieldChange}
            onPaymentChange={onPaymentChange}
            paymentMethod={paymentMethod}
            paymentMethods={paymentMethods}
            publicOffer={publicOffer}
          />
        </div>
      </section>
    );
  }
}

Cart.propTypes = {
  coupon: schemas.checkoutCoupon,
  deliveryType: schemas.deliveryType,
  deliveryTypes: PropTypes.arrayOf(schemas.deliveryType),
  errorMessage: PropTypes.string,
  fields: PropTypes.array.isRequired,
  formAuthenticity: schemas.formAuthenticity,
  onDeliveryChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
  paymentMethod: schemas.paymentMethod,
  paymentMethods: PropTypes.arrayOf(schemas.paymentMethod),
  publicOffer: schemas.checkoutPublicOffer,
  totalCount: PropTypes.number,
  totalPrice: schemas.money,
};

export default Cart;