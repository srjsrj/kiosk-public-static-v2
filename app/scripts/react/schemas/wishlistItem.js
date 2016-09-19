import { PropTypes } from 'react';
import good from './good';
import product from './product';

/**
 * Схема используется в компоненте WishlistContainer
 * 
 * destroy_url: урл для удаления товара из "списка желаний"
 */

export default PropTypes.shape({
  good: good.isRequired,
  product: product.isRequired,
  destroy_url: PropTypes.string.isRequired,
});
