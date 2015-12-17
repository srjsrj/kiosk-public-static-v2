import { PropTypes } from 'react';
import money from './money';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  price: money,
  fields: PropTypes.arrayOf(PropTypes.string),
  requiredFields: PropTypes.arrayOf(PropTypes.string),
  availablePayments: PropTypes.arrayOf(PropTypes.number),
  freeDeliveryThreshold: money,
  reservedFieldValues: PropTypes.object,
});