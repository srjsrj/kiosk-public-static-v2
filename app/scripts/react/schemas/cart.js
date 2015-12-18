import { PropTypes } from 'react';
import money from './money';

export default PropTypes.shape({
  totalCount: PropTypes.number,
  totalPrice: money,
});