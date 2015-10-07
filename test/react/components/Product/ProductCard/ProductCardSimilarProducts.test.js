import React, { addons, PropTypes } from 'react';
import { expect } from 'chai';
import ProductCardSimilarProducts from '../../../../../app/scripts/react/components/Product/ProductCard/ProductCardSimilarProducts';
const { renderIntoDocument } = addons.TestUtils;

describe('[Component] ProductCardSimilarProducts', () => {
  it('should render without errors with default props', () => {
    const similarProductsDefault = renderIntoDocument(
      <ProductCardSimilarProducts />
    );

    expect(similarProductsDefault).to.be.an('object');
  });
});