import { PropTypes } from 'react';
import money from './money';
import good from './good';

export default PropTypes.shape({
  totalCount: PropTypes.number,
  totalPrice: money.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    good: good.isRequired,
    destroy_path: PropTypes.string.isRequired,
    selling_by_weight: PropTypes.bool.isRequired,
    count: PropTypes.number,
    weight: PropTypes.number,
  })).isRequired,
  package_item: PropTypes.shape({
    good: good.isRequired,
    destroy_url: PropTypes.string.isRequired,
  }),
  coupon_code: PropTypes.string,
  errors: PropTypes.object.isRequired,
  default_url: PropTypes.string.isRequired,
});
