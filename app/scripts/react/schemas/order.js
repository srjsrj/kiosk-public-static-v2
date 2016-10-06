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
  external_id: number,
  default_url: string.isRequired,
  free_delivery: bool,
  free_delivery_threshold: money,
  order_delivery: shape({
    tracking_id: string,
    tracking_url: string,
  }),
  delivery_price: money,
  delivery_type: shape({
    title: string,
    type: string.isRequired,
    pickup_address: string,
  }),
  must_be_paid_online: bool,
  payment_url: string,
  payment_type: shape({
    title: string,
    type: string.isRequired,
  }),
  workflow_state: shape({
    bg_style: object.isRequired,
    title: string,
    color: string,
  }),
  admin_comments: arrayOf(comment),
  items: arrayOf(orderItem).isRequired,
  package_good: good,
  package_price: money,
  total_with_delivery_price: money.isRequired,
  phone: string,
  coupon: shape({
    discount: number.isRequired,
    discount_type: string,
    fixed_discount: money,
    free_delivery: bool,
  }),
});
