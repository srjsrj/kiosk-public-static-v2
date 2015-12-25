import { PropTypes } from 'react';

export default PropTypes.shape({
  height: PropTypes.number,
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
});