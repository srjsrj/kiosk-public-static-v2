import React, { Component, PropTypes } from 'react';
import PaginationFirstPage from './PaginationFirstPage';
import PaginationPreviousPage from './PaginationPreviousPage';
import PaginationNextPage from './PaginationNextPage';
import PaginationLastPage from './PaginationLastPage';
import PaginationCurrentWindow from './PaginationCurrentWindow';
import uri from 'urijs';

export const WINDOW_SIZE = 4;

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleFirstPageClick = this.handleFirstPageClick.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleLastPageClick = this.handleLastPageClick.bind(this);
  }
  onPaginationClick(page) {
    window.location.href = uri(window.location.href).setSearch('page', page);
  }
  handleFirstPageClick() {
    this.onPaginationClick(1);
  }
  handlePreviousPageClick() {
    this.onPaginationClick(this.props.currentPage - 1);
  }
  handleNextPageClick() {
    this.onPaginationClick(this.props.currentPage + 1);
  }
  handleLastPageClick() {
    this.onPaginationClick(this.props.totalPages);
  }
  render() {
    const {
      currentPage,
      totalPages,
    } = this.props;

    return (
      <nav className="pagination">
        {currentPage > 1 && <PaginationFirstPage onClick={this.handleFirstPageClick} />}
        {' '}
        {currentPage - 1 > 0 && <PaginationPreviousPage onClick={this.handlePreviousPageClick} />}
        {' '}
        {(currentPage > WINDOW_SIZE + 1) && (
          <span className="page gap">
            {'&hellip;'}
          </span>
        )}
        {' '}
        <PaginationCurrentWindow
          currentPage={currentPage}
          onClick={this.onPaginationClick}
          totalPages={totalPages}
        />
        {' '}
        {(currentPage + WINDOW_SIZE < totalPages) && (
          <span className="page gap">
            {'&hellip;'}
          </span>
        )}
        {' '}
        {currentPage + 1 <= totalPages && <PaginationNextPage onClick={this.handleNextPageClick} />}
        {' '}
        {currentPage != totalPages && <PaginationLastPage onClick={this.handleLastPageClick} />}
      </nav>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
