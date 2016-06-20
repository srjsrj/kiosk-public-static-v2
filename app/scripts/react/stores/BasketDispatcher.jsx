import BasketStore from './BasketStore';
import BaseDispatcher from '../dispatchers/BaseDispatcher'

const BasketDispatcher = new BaseDispatcher()

BasketDispatcher.register(function(payload) {
  const { action } = payload;

  switch (action.actionType) {
    case 'updateBasketState':
      BasketStore.updateBasketState(action.cartItems);
      BasketStore.emitChange();
      break;
  }
});

export default BasketDispatcher;
