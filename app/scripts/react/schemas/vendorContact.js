import { PropTypes } from 'react';

export default PropTypes.shape({
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
});
