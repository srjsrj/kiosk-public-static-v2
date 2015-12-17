import { PropTypes } from 'react';
import money from './money';

export default PropTypes.shape({
  is_sale: PropTypes.bool.isRequired,
  price: PropTypes.money,
  actual_price: PropTypes.money,
});