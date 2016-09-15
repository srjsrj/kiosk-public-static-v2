import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
  render() {
    const { current_page, total_count, count_per_page } = this.props;

    const total_pages = Math.ceil(total_count / count_per_page);

    let firstPage = '';
    let previousPage = '';
    let leftEllipsis = '';
    let nextPage = '';
    let lastPage = '';
    let rightEllipsis = ''

    if (current_page > 1) {
      firstPage = (
        <span className="first">
          <a href='#' rel='first' onClick={() => this.onPaginationClick(1)}>&laquo;</a>
        </span>
      )
    } 

    if (!(current_page - 1) <= 0) {
      previousPage = (
        <span className="prev">
          <a href='#' rel='previous' onClick={() => this.onPaginationClick(current_page - 1)}>‹</a>
        </span>
      )
    }

    if (current_page > windowSize + 1) {
      leftEllipsis = <span className="page gap">&hellip;</span>
    }

    if (current_page + 1 <= total_pages) {
      nextPage = (
        <span className="next">
          <a href='#' rel='next' onClick={() => this.onPaginationClick(current_page + 1)}>›</a>
        </span>
      )
    }

    if (current_page != total_pages) {
      lastPage = (
        <span className="last">
          <a href='#' rel='last' onClick={() => this.onPaginationClick(total_pages)}>Last &raquo;</a>
        </span>
      )
    }

    if (current_page + windowSize < total_pages) {
      rightEllipsis = <span className="page gap">&hellip;</span>
    }

    const windowSize = 4;

    let currentWindow = [];

    let page = current_page - windowSize;
    if (page < 1) {
      page = 1;
    }

    while((page <= (current_page + windowSize)) && (page <= total_pages)) {
      if (current_page == page) {
        var link = page;
        var className = "page current";
      } else {
        let handleClick = this.onPaginationClick.bind(this, page);
        var link = <a href='#' onClick={handleClick}>{page}</a>
        var className = "page";
      }

      currentWindow.push(
        <span className={className}>
          {link}{' '}
        </span>
      )

      page++;
    };

    return (
      <nav className="pagination">
        {firstPage}
        {' '}
        {previousPage}
        {' '}
        {leftEllipsis}
        {' '}
        {currentWindow}
        {' '}
        {rightEllipsis}
        {' '}
        {nextPage}
        {' '}
        {lastPage}
      </nav>
    );
  }

  onPaginationClick(page) {
    let url = window.location.href;

    let pattern = new RegExp('\\b(page=).*?(&|$)');

    if(url.search(pattern)>=0) {
      url = url.replace(pattern,'$1' + page + '$2');
    } else {
      url = url + (url.indexOf('?')>0 ? '&' : '?') + 'page=' + page;
    }

    window.location.href = url;
  }
}

Pagination.propTypes = {
  current_page: PropTypes.number.isRequired,
  count_per_page:  PropTypes.number.isRequired,
  total_count:  PropTypes.number.isRequired
};