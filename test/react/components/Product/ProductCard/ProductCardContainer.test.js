import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { ProductCardContainer } from '../../../../../app/scripts/react/components/Product/ProductCard';

describe('[Component] ProductCardContainer', () => {
  it('should render without properties', () => {
    const component = renderIntoDocument(
      <ProductCardContainer />
    );

    expect(component).to.be.an('object');
  });
});