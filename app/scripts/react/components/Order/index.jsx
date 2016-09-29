import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';
import connectToRedux from '../HoC/connectToRedux';
import provideTranslations from '../HoC/provideTranslations';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import Order from './Order';
import {
  changeFieldValue,
  initCheckout,
  selectDelivery,
  selectPayment,
} from '../../actions/CartActions';
import {
  initCheckoutCartStore,
} from '../../reducers/cart';
import {
  canUseDOM,
} from '../../helpers/dom';

const emptyList = List();
const emptyCoupon = Map();
const emptyFields = List();
const emptyValues = Map();
const emptyDeliveryType = Map();
const emptyPaymentType = Map();
const emptyPrice = Map();

let storeInitialized = false;

class OrderContainer extends Component {
  constructor(props) {
    super(props);

    this.selectDelivery = this.selectDelivery.bind(this);
    this.selectPayment = this.selectPayment.bind(this);
    this.changeFieldValue = this.changeFieldValue.bind(this);
  }
  componentWillMount() {
    const {
      initCheckout,
      initialProps,
    } = this.props;

    if (!storeInitialized && canUseDOM()) {
      initCheckout(initialProps);
      storeInitialized = true;
    }
  }
  selectDelivery(delivery) {
    this.props.selectDelivery(delivery.get('id'));
  }
  selectPayment(payment) {
    this.props.selectPayment(payment.get('id'));
  }
  changeFieldValue(name, value) {
    this.props.changeFieldValue(name, value);
  }
  render() {
    const {
      coupon,
      fields,
      fieldValues,
      deliveryTypes,
      selectedDeliveryType,
      paymentTypes,
      selectedPaymentType,
      initialProps: {
        backUrl,
        errorMessage,
        formAuthenticity,
        publicOffer,
        submitOrderUrl,
        t,
      },
      totalCount,
      totalPrice,
    } = this.props;

    return (
      <Order
        backUrl={backUrl}
        coupon={coupon}
        deliveryType={selectedDeliveryType}
        deliveryTypes={deliveryTypes}
        errorMessage={errorMessage}
        fieldValues={fieldValues}
        fields={fields}
        formAuthenticity={formAuthenticity}
        onDeliveryChange={this.selectDelivery}
        onFieldChange={this.changeFieldValue}
        onPaymentChange={this.selectPayment}
        paymentType={selectedPaymentType}
        paymentTypes={paymentTypes}
        publicOffer={publicOffer}
        submitOrderUrl={submitOrderUrl}
        t={t}
        totalCount={totalCount}
        totalPrice={totalPrice}
      />
    );
  }
}

OrderContainer.propTypes = {
  coupon: PropTypes.object.isRequired,
  deliveryTypes: PropTypes.object.isRequired,
  selectedDeliveryType: PropTypes.object.isRequired,
  fieldValues: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  paymentTypes: PropTypes.object.isRequired,
  initCheckout: PropTypes.func.isRequired,
  selectedPaymentType: PropTypes.object.isRequired,
  selectDelivery: PropTypes.func.isRequired,
  selectPayment: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  initialProps: PropTypes.shape({
    backUrl: PropTypes.string,
    deliveryTypeId: PropTypes.number,
    deliveryTypes: PropTypes.arrayOf(schemas.deliveryType),
    errorMessage: PropTypes.string,
    fields: PropTypes.arrayOf(schemas.checkoutField),
    formAuthenticity: schemas.formAuthenticity,
    paymentTypeId: PropTypes.number,
    paymentTypes: PropTypes.arrayOf(schemas.paymentType),
    publicOffer: schemas.checkoutPublicOffer,
    submitOrderUrl: PropTypes.string,
    t: PropTypes.func.isRequired,
  }),
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.object.isRequired,
};

OrderContainer.defaultProps = {
  deliveryTypes: [],
  paymentTypes: [],
  fields: [],
};

export default provideTranslations(connectToRedux(connect(
  (state, ownProps) => {
    const { cart } = storeInitialized
      ? state
      : ({ // TODO: move to store initialization when/if root component created
        cart: initCheckoutCartStore(state.cart, initCheckout(ownProps)),
      });
    const coupon = cart.get('coupon', emptyCoupon);
    const deliveryTypes = cart.get('deliveryTypes', emptyList);
    const selectedDeliveryType = deliveryTypes
      .find(
        (t) => t.get('id') === cart.get('selectedDeliveryType'),
        null,
        deliveryTypes.first() || emptyDeliveryType
      );
    const availablePayments = selectedDeliveryType.get('availablePayments', emptyList);
    const availableFields = selectedDeliveryType.get('fields', emptyList);
    const paymentTypes = cart.get('paymentTypes', emptyList)
      .filter((p) => availablePayments.includes(p.get('id')));
    const selectedPaymentType = paymentTypes
      .find(
        (p) => p.get('id') === cart.get('selectedPaymentType'),
        null,
        paymentTypes.first() || emptyPaymentType
      );
    const totalCount = cart.getIn(['cart', 'totalCount'], 0);
    const totalPrice = cart.getIn(['cart', 'totalPrice'], emptyPrice)
      .update((price) => {

        if (price.isEmpty()) {
          return price;
        }

        const cents = price.get('cents', 0);
        const threshold = selectedDeliveryType.getIn(['freeDeliveryThreshold', 'cents'], null);
        const deliveryPrice = selectedDeliveryType.getIn(['price', 'cents'], 0);

        return price.set('cents', cents + ((threshold == null || threshold > cents) ? deliveryPrice : 0));
      });
    const fields = cart.get('checkoutFields', emptyFields)
      .filter((f) => availableFields.includes(f.get('name')));
    const fieldValues = cart.get('checkoutFieldValues', emptyValues);


    return {
      coupon,
      fields,
      fieldValues,
      deliveryTypes,
      selectedDeliveryType,
      paymentTypes,
      selectedPaymentType,
      totalCount,
      totalPrice,
    };
  },
  {
    changeFieldValue,
    initCheckout,
    selectDelivery,
    selectPayment,
  },
  (stateProps, dispatchProps, ownProps) => Object.assign({}, {
    initialProps: ownProps,
  }, stateProps, dispatchProps)
)(OrderContainer)));
