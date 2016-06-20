import BasketDispatcher from '../../stores/BasketDispatcher';

export function updateBasketState(cartItems) {
  return BasketDispatcher.handleViewAction({
    actionType: 'updateBasketState',
    cartItems
  });
}

export function addGood(good, count = 1) {
  return $.ajax({
    dataType: 'json',
    method: 'post',
    data: {
      'cart_item[good_id]': good.global_id,
      count
    },
    url: Routes.vendor_cart_items_path(),
    success(response) {
      const cartItems = response;

      return BasketDispatcher.handleServerAction({
        actionType: 'updateBasketState',
        cartItems
      });
    }
  });
}
