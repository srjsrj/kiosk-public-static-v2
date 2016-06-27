import BasketStore from './BasketStore';
import BaseDispatcher from '../dispatchers/BaseDispatcher'

const BasketDispatcher = new BaseDispatcher()

BasketDispatcher.register(function(payload) {
  const { action } = payload;

  switch (action.actionType) {
    case 'updateBasketState':
      BasketStore.updateBasketState(action.basket);
      BasketStore.emitChange();
      break;
    case 'startItemRequest':
      BasketStore.startItemRequest(action.id);
      BasketStore.emitChange();
      break;
    case 'stopItemRequest':
      BasketStore.stopItemRequest(action.id);
      BasketStore.emitChange();
      break;
    case 'errorItemRequest':
      BasketStore.errorItemRequest(action.id, action.error);
      BasketStore.emitChange();
      break;
  }
});

export default BasketDispatcher;
