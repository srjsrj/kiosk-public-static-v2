import { PropTypes } from 'react';

export default PropTypes.shape({
  current_page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
});
