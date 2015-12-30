import React, { PropTypes } from 'react';
import classNames from 'classnames';

const ProductBadge = ({ status, text }) => (
  <span className={classNames('b-status', 'b-status_' + status)}>
    {text}
  </span>
);

ProductBadge.propTypes = {
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProductBadge;