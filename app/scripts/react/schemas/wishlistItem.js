import { PropTypes } from 'react';
import good from './good';
import product from './product';

export default PropTypes.shape({
  good: good.isRequired,
  product: product.isRequired,
  destroy_url: PropTypes.string.isRequired,
});
