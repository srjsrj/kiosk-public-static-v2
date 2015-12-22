import { PropTypes } from 'react';

export default PropTypes.shape({
  errorMessage: PropTypes.string,
  show: PropTypes.bool.isRequired,
  value: PropTypes.bool,
  url: PropTypes.string,
});