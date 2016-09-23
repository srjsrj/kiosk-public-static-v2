import React, { PropTypes } from 'react';

function PaginationFirstPage(props) {
  const {
    onClick,
  } = props;

  return (
    <span className="first">
      <a
        href="#"
        onClick={onClick}
        rel="first"
      >
        {'&laquo;'}
      </a>
    </span>
  );
}

PaginationFirstPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PaginationFirstPage;
