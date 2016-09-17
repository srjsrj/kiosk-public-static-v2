import { PropTypes } from 'react';
import money from './money';

export default PropTypes.shape({
  custom_attributes: PropTypes.object.isRequired,
  is_sale: PropTypes.bool.isRequired,
  price: money,
  actual_price: money,
  add_to_cart_url: PropTypes.string,
});
