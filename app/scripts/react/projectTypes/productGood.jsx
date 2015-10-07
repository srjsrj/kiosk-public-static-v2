import { PropTypes } from 'react';
import money from './money';

const { any, arrayOf, bool, number, object, oneOf, shape, string } = PropTypes;

export default shape({
  is_sale: bool.isRequired,
  price: money.isRequired,
  actual_price: money.isRequired,
})