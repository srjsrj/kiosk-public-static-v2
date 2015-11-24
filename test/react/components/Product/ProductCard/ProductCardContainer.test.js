import React, { addons, findDOMNode } from 'react';
import { expect } from 'chai';
import { ProductCardContainer } from '../../../../../app/scripts/react/components/Product/ProductCard';

const { renderIntoDocument } = addons.TestUtils;

describe('[Component] ProductCardContainer', () => {
  it('should render without properties', () => {
    const component = renderIntoDocument(
      <ProductCardContainer />
    );

    expect(component).to.be.an('object');
  });
});