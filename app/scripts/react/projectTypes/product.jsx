import { PropTypes } from 'react';
import money from './money'
import productGood from './productGood';

const { any, arrayOf, bool, number, object, oneOf, shape, string } = PropTypes;

export default shape({
  id: number.isRequired,
  has_ordering_goods: bool.isRequired,
  index_image_url: string.isRequired,
  is_label_new: bool.isRequired,
  is_run_out: bool.isRequired,
  is_sale: bool.isRequired,
  is_sold: bool.isRequired,
  public_url: string.isRequired,
  title: string.isRequired,
  prices: shape({
    min_price: money.isRequired,
    max_price: money.isRequired,
  }),
  goods: arrayOf(productGood).isRequired,
})