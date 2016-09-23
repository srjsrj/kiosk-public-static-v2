import React, { PropTypes } from 'react';

function PaginationPreviousPage(props) {
  const {
    onClick,
  } = props;

  return (
    <span className="prev">
      <a
        href="#"
        onClick={onClick}
        rel="previous"
      >
        {'‹'}
      </a>
    </span>
  );
}

PaginationPreviousPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PaginationPreviousPage;
