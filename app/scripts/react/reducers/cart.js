import createReducer from '../utils/createReducer';
import {
  fromJS,
} from 'immutable';
import {
  CART_REQUEST,
  CART_SUCCESS,
  CART_FAILURE,
  CART_SET_AMOUNT,
  CART_SET_PACKAGE,
  CART_INIT_CHECKOUT,
} from '../actions/CartActions';

const initialState = fromJS({
  cart: {},
  coupon: {
    show: true,
    value: '',
  },
  amounts: {},
  selectedPackage: '',
  deliveryTypes: [],
  selectedDeliveryType: null,
  paymentTypes: [],
  selectedPaymentType: null,
  checkoutFields: [],
  isFetching: false,
  error: null,
});

const actionMap = {
  [CART_REQUEST](state) {
    return state.merge({
      isFetching: true,
      error: null,
    });
  },

  [CART_SUCCESS](state, { response }) {
    const amounts = fromJS(response.items)
      .toMap()
      .mapKeys((key, val) => val.get('id'))
      .map((item) => item.get('sellingByWeight') ?
        item.get('weight', 0) :
        item.get('count', 0)
      );

    return state.merge({
      amounts,
      coupon: {
        show: true,
        value: response.couponCode,
      },
      cart: response,
      isFetching: false,
      error: null,
    });
  },

  [CART_FAILURE](state, { error }) {
    return state.merge({
      isFetching: false,
      error,
    });
  },

  [CART_SET_AMOUNT](state, { id, amount }) {
    return state.setIn(['amounts', id], amount);
  },

  [CART_SET_PACKAGE](state, { id }) {
    return state.set('selectedPackage', id);
  },

  [CART_INIT_CHECKOUT](state, data) {
    return state.merge(data);
  },
};

export default createReducer(initialState, actionMap);
