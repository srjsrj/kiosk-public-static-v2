import { PropTypes } from 'react';
import comment from './comment';
import orderItem from './orderItem';
import money from './money';
import good from './good';

const {
  shape,
  arrayOf,
  string,
  bool,
  number,
  object,
} = PropTypes;

export default shape({
  external_id: string,
  workflow_state: shape({
    bg_style: object.isRequired,
    title: string,
  }),
  admin_comments: arrayOf(comment),
  items: arrayOf(orderItem).isRequired,
  total_with_delivery_price: money.isRequired,
  package_price: money,
  delivery_price: money,
  package_good: good,
  coupon: {
    discount: number.isRequired,
    discount_type: string,
    fixed_discount: money,
    free_delivery: bool,
  },
});
