import { PropTypes } from 'react';
import money from './money';
import image from './image';

export default PropTypes.shape({
  custom_attributes: PropTypes.object,
  is_sale: PropTypes.bool.isRequired,
  image: image,
  price: money,
  actual_price: money,
  add_to_cart_url: PropTypes.string,
  default_url: PropTypes.string,
});
