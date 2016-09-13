import {
  cartsShow,
} from '../../routes/api';
import {
  CALL_API,
} from '../middleware/api';
import {
  camelizeKeys,
} from 'humps';

export const CART_REQUEST = 'CART_REQUEST';
export const CART_SUCCESS = 'CART_SUCCESS';
export const CART_FAILURE = 'CART_FAILURE';

export const CART_SET_AMOUNT = 'CART_SET_AMOUNT';
export const CART_SET_PACKAGE = 'CART_SET_PACKAGE';
export const CART_INIT_CHECKOUT = 'CART_INIT_CHECKOUT';

export function setAmount(id, amount) {
  return {
    type: CART_SET_AMOUNT,
    id,
    amount,
  };
}

export function selectPackage(id) {
  return {
    type: CART_SET_PACKAGE,
    id,
  };
}

export function initCart(initialCart) {
  return {
    type: CART_SUCCESS,
    response: camelizeKeys(initialCart),
  };
}

export function initCheckout(params) {
  const {
    deliveryTypes,
    deliveryTypeId,
    paymentTypes,
    paymentTypeId,
    cart,
    coupon,
    fields,
  } = camelizeKeys(params);

  return {
    type: CART_INIT_CHECKOUT,
    deliveryTypes,
    paymentTypes,
    cart,
    coupon,
    checkoutFields: fields,
    selectedDeliveryType: deliveryTypeId,
    selectedPaymentType: paymentTypeId,
  };
}

export function fetchCart() {
  return (dispatch, getState) => {
    const isFetching = getState().cart.get('isFetching', false);

    if (isFetching) {
      return null;
    }

    return dispatch({
      [CALL_API]: {
        endpoint: cartsShow(),
        types: [
          CART_REQUEST,
          CART_SUCCESS,
          CART_FAILURE,
        ],
      },
    });
  };
}
