import React, { PropTypes } from 'react';

function PaginationNextPage(props) {
  const {
    onClick,
  } = props;

  return (
    <span className="next">
      <a
        href="#"
        onClick={onClick}
        rel="next"
      >
        {'›'}
      </a>
    </span>
  );
}

PaginationNextPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PaginationNextPage;
