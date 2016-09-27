/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Pagination from 'rc/Pagination';
import {
  WINDOW_SIZE,
} from 'rc/Pagination/Pagination';

const rawPageSelector = 'span.page:not(.gap)';
const firstPageSelector = 'span.first';
const lastPageSelector = 'span.last';
const prevPageSelector = 'span.prev';
const nextPageSelector = 'span.next';
const currentPageSelector = 'span.page.current:not(.gap)';

describe('[Component] Pagination', () => {
  it('should render without errors', () => {
    expect(() => render(<Pagination currentPage={1} totalPages={1} />)).not.to.throw();
  });

  it('should render only two links with 2 pages', () => {
    expect(
      render(<Pagination currentPage={1} totalPages={2} />)
      .find(rawPageSelector)
      .length
    ).to.equal(2);
  });

  it('shold not render neither `prev` nor `first` links when on the first page', () => {
    expect(
      render(<Pagination currentPage={1} totalPages={10} />)
      .find(`${prevPageSelector}, ${firstPageSelector}`)
      .length
    ).to.equal(0);
  });

  it('should render `prev` and `first` links when not on the first page', () => {
    expect(
      render(<Pagination currentPage={2} totalPages={3} />)
      .find(`${prevPageSelector}, ${firstPageSelector}`)
      .length
    ).to.equal(2);
  });

  it('should not render neither `last` nor `next` links when on the last page', () => {
    expect(
      render(<Pagination currentPage={2} totalPages={2} />)
      .find(`${nextPageSelector}, ${lastPageSelector}`)
      .length
    ).to.equal(0);
  });

  it('should render `last` and `next` links when not on the last page', () => {
    expect(
      render(<Pagination currentPage={1} totalPages={2} />)
      .find(`${nextPageSelector}, ${lastPageSelector}`)
      .length
    ).to.equal(2);
  });

  it('should render exact double WINDOW_SIZE number of pages plus current one when we have enough pages before and after the current page', () => {
    expect(
      render(<Pagination currentPage={1 + WINDOW_SIZE} totalPages={1 + WINDOW_SIZE + WINDOW_SIZE + 1} />)
      .find(rawPageSelector)
      .length
    ).to.equal(WINDOW_SIZE + 1 + WINDOW_SIZE); // double WINDOW_SIZE + current page
  });

  it(`should render strip some 'before' pages when currentPage is less than WINDOW_SIZE:${WINDOW_SIZE}`, () => {
    expect(
      render(<Pagination currentPage={3} totalPages={3 + WINDOW_SIZE} />)
      .find(rawPageSelector)
      .length
    ).to.equal(3 + WINDOW_SIZE);
  });

  it(`should render strip some 'after' pages when currentPage is closer to the totatPages than WINDOW_SIZE:${WINDOW_SIZE}`, () => {
    expect(
      render(<Pagination currentPage={1 + WINDOW_SIZE} totalPages={1 + WINDOW_SIZE + (WINDOW_SIZE - 2)} />)
      .find(rawPageSelector)
      .length
    ).to.equal(WINDOW_SIZE + 1 + (WINDOW_SIZE - 2));
  });

  it('should not render wrapping <a> tag on the current page', () => {
    expect(
      render(<Pagination currentPage={3} totalPages={10} />)
      .find(currentPageSelector)
      .children('a')
      .length
    ).to.equal(0);
  });

  it('should render wrapping <a> tag on other pages', () => {
    expect(
      render(<Pagination currentPage={1 + WINDOW_SIZE} totalPages={1 + WINDOW_SIZE + WINDOW_SIZE + 1} />)
      .find(`${rawPageSelector} > a`)
      .length
    ).to.equal(2 * WINDOW_SIZE);
  });
});
