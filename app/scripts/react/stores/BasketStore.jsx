import BaseStore from './BaseStore';
import _ from 'lodash';

let _cartItems = []

const BasketStore = _.extend(new BaseStore(), {
  updateBasketState(cartItems) {
    _cartItems = cartItems;
  },
  getCartItems(){
    return _cartItems;
  },
});

export default BasketStore;
