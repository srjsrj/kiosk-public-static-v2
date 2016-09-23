import React, { PropTypes } from 'react';

function PaginationLastPage(props) {
  const {
    onClick,
  } = props;

  return (
    <span className="last">
      <a
        href="#"
        onClick={onClick}
        rel="last"
      >
        {'&raquo;'}
      </a>
    </span>
  );
}

PaginationLastPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PaginationLastPage;
