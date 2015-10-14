import { PropTypes } from 'react';
import money from './money';

const { any, arrayOf, bool, number, object, oneOf, oneOfType, shape, string } = PropTypes;

export default shape({
  is_sale: bool.isRequired,
  price: money,
  actual_price: money,
})