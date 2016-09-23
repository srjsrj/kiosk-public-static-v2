import { PropTypes } from 'react';
import vendorContact from './vendorContact';

export default PropTypes.shape({
  contacts: PropTypes.arrayOf(vendorContact).isRequired,
  title: PropTypes.string.isRequired,
  search_products_path: PropTypes.string.isRequired,
});
