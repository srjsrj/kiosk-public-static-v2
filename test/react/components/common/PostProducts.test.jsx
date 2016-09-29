/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import PostProducts from 'rc/common/PostProducts';

describe('[Component] PostProducts', () => {
  it('should render without errors', () => {
    expect(() => render(<PostProducts postProductsText={'aa'} />)).not.to.throw();
  });

  it('should render title if `title` prop provided', () => {
    expect(
      render(<PostProducts postProductsText={'sample text'} title={'test'} />)
        .find('.b-item-full__title')
        .text()
    ).to.equal('test');
  });

  it('should not render title when `title` props is omitted', () => {
    expect(
      render(<PostProducts postProductsText={'aa'} />)
        .find('.b-item-full__title')
    ).to.have.length(0);
  });
});
