/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import CategoriesShowContainer from 'rc/CategoriesShow';
import CategoriesShow from 'rc/CategoriesShow/CategoriesShow';
import ProductList from 'rc/ProductList/ProductList';
import t from 'test/mocks/t';
import sampleProps from 'test/fixtures/categoriesShow/sample.json';
import emptyProductsProps from 'test/fixtures/categoriesShow/empty-products.json';

describe('[Component] CategoriesShow', () => {
  it('should render without errors', () => {
    expect(() => render(<CategoriesShowContainer {...sampleProps} />)).not.to.throw();
  });

  it('should render empty msg when isFilterDirty == false and no products', () => {
    expect(
      render(<CategoriesShowContainer {...emptyProductsProps} t={t} />)
        .find('.b-text > p')
        .text()
    ).to.equal('vendor.category.empty');
  });

  it('should render ProductList when isFilterDirty == true', () => {
    expect(
      shallow(<CategoriesShow {...emptyProductsProps} isFilterDirty />)
      .find(ProductList)
    ).to.have.length(1);
  });
});
