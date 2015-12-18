import { PropTypes } from 'react';
import image from './image';
import money from './money'
import good from './good';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  has_ordering_goods: PropTypes.bool.isRequired,
  index_image: image,
  second_image: image,
  is_label_new: PropTypes.bool.isRequired,
  is_run_out: PropTypes.bool.isRequired,
  is_sale: PropTypes.bool.isRequired,
  is_sold: PropTypes.bool.isRequired,
  public_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  prices: PropTypes.shape({
    min_price: money.isRequired,
    max_price: money.isRequired,
  }),
  goods: PropTypes.arrayOf(good).isRequired,
});