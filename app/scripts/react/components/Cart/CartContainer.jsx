import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';
import makeTranslatable from '../HoC/makeTranslatable';
import Cart from './Cart';

@makeTranslatable
class CartContainer extends Component {
  constructor(props) {
    super(props);

    const {
      deliveryTypeId,
      deliveryTypes,
      fields,
      paymentMethodId,
      paymentMethods,
    } = props;
    const deliveryType = this.matchEntity(deliveryTypes, deliveryTypeId);
    const paymentMethod = this.matchEntity(paymentMethods, paymentMethodId);

    this.state = {
      deliveryType,
      paymentMethod,
      fields: props.fields.map((field) => {
        const isRequired = deliveryType
          ? deliveryType.requiredFields.indexOf(field.name) > -1
          : false;
        const isReserved = deliveryType
          ? !!deliveryType.reservedFieldValues[field.name]
          : false;
        const isDisabled = isReserved || false;
        const value = isReserved
          ? deliveryType.reservedFieldValues[field.name]
          : field.value;

        return {isDisabled, isRequired, value, source: field};
      }),
    };

    this.changeDelivery = this.changeDelivery.bind(this);
    this.changeField = this.changeField.bind(this);
    this.changePayment = this.changePayment.bind(this);
  }
  matchEntity(items, itemId) {
    if (!items.length) return null;

    if (itemId) {
      const matched = items.filter((item) => item.id === itemId)[0];
      if (matched) return matched;
    }

    return items[0];
  }
  getFieldsForDelivery(delivery, fields) {
    if (!delivery) return fields;

    return fields.filter((field) =>
      delivery.fields.indexOf(field.source.name) > -1
    );
  }
  getPaymentsForDelivery(delivery, payments) {
    if (!delivery) return payments;

    return payments.filter((payment) =>
      delivery.availablePayments.indexOf(payment.id) > -1
    );
  }
  getTotalPrice(delivery, cart) {
    if (!delivery) return totalPrice;

    const { totalPrice } = cart;
    const { freeDeliveryThreshold: threshold } = delivery;

    if (threshold.cents === 'undefined' || totalPrice.cents > threshold.cents) {
      return totalPrice;
    }

    return {
      ...totalPrice,
      cents: totalPrice.cents + delivery.price.cents,
    };
  }
  changeDelivery(delivery) {
    const { fields } = this.state;

    this.setState({
      deliveryType: delivery,
      fields: fields.map((field) => {
        const isRequired = delivery
          ? delivery.requiredFields.indexOf(field.source.name) > -1
          : false;
        const isDisabled = delivery
          ? delivery.reservedFieldValues[field.source.name]
          : false;
        const value = delivery
          ? delivery.reservedFieldValues[field.source.name]
          : field.value;

        return {...field, value, isDisabled, isRequired};
      }),
    });
  }
  changeField(name, value) {
    const { fields } = this.state;

    this.setState({
      fields: fields.map((field) => {
        if (field.source.name === name) {
          return {...field, value};
        }
        return field;
      }),
    });
  }
  changePayment(payment) {
    this.setState({ paymentMethod: payment });
  }
  render() {
    const {
      backUrl,
      cart,
      coupon,
      deliveryTypes,
      errorMessage,
      formAuthenticity,
      paymentMethods,
      publicOffer,
      submitOrderUrl,
    } = this.props;
    const { deliveryType, fields, paymentMethod } = this.state;

    return (
      <Cart
        backUrl={backUrl}
        coupon={coupon}
        deliveryType={deliveryType}
        deliveryTypes={deliveryTypes}
        errorMessage={errorMessage}
        fields={this.getFieldsForDelivery(deliveryType, fields)}
        formAuthenticity={formAuthenticity}
        onDeliveryChange={this.changeDelivery}
        onFieldChange={this.changeField}
        onPaymentChange={this.changePayment}
        paymentMethod={paymentMethod}
        paymentMethods={this.getPaymentsForDelivery(deliveryType, paymentMethods)}
        publicOffer={publicOffer}
        submitOrderUrl={submitOrderUrl}
        totalCount={cart.totalCount}
        totalPrice={this.getTotalPrice(deliveryType, cart)}
      />
    );
  }
}

CartContainer.propTypes = {
  backUrl: PropTypes.string,
  cart: schemas.cart,
  coupon: schemas.checkoutCoupon,
  deliveryType: schemas.deliveryType,
  deliveryTypeId: PropTypes.number,
  deliveryTypes: PropTypes.arrayOf(schemas.deliveryType),
  errorMessage: PropTypes.string,
  fields: PropTypes.arrayOf(schemas.checkoutField),
  formAuthenticity: schemas.formAuthenticity,
  paymentMethod: schemas.paymentMethod,
  paymentMethodId: PropTypes.number,
  paymentMethods: PropTypes.arrayOf(schemas.paymentMethod),
  publicOffer: schemas.checkoutPublicOffer,
  submitOrderUrl: PropTypes.string,
};
CartContainer.defaultProps = {
  cart: {},
  deliveryTypes: [],
  fields: [],
  paymentMethods: [],
};

export default CartContainer;