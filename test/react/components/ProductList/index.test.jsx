/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import productListPropsSample from 'test/fixtures/productList/sample';
import ProductList from 'rc/ProductList';

describe('[Component] ProductList', () => {
  it('should render without errors', () => {
    const props = { ...productListPropsSample };

    expect(() => render(<ProductList {...props} />)).not.to.throw();
  });
});
