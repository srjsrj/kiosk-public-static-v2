import { PropTypes } from 'react';

export default PropTypes.shape({
  height: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
});