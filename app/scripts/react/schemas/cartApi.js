import { PropTypes } from 'react';
import money from './money';
import good from './good';

/**
 * Схема которую возвращает бэкенд /v1/carts/show.json
 * 
 * Используется в компонентах: WishlistContainer, CartContainer
 * 
 * totalCount - кол-во позиций в корзине (WishlistContainer)
 * totalPrice - полная цена корзины без учета доставки (WishlistContainer)
 * default_url - урл для сабмита/очистки корзины (CartContainer)
 */

export default PropTypes.shape({
  totalCount: PropTypes.number,
  totalPrice: money.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    good: good.isRequired,
    destroy_path: PropTypes.string.isRequired,
    selling_by_weight: PropTypes.bool.isRequired,
    count: PropTypes.number,
    weight: PropTypes.number,
  })).isRequired,
  package_item: PropTypes.shape({
    good: good.isRequired,
    destroy_url: PropTypes.string.isRequired,
  }),
  coupon_code: PropTypes.string,
  errors: PropTypes.object.isRequired,
  default_url: PropTypes.string.isRequired,
});
