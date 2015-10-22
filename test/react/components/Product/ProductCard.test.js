import React, { addons, findDOMNode, render } from 'react';
import { expect } from 'chai';
import {
  baseFormAuthenticity,
  baseProduct,
  baseSimilarProducts,
} from './ProductCard.test.props';
import ProductCard from '../../../../app/scripts/react/components/Product/ProductCard';

const { renderIntoDocument } = addons.TestUtils;

describe('[Component] ProductCard', () => {
  it('should render without errors', () => {
    const props = {
      formAuthenticity: baseFormAuthenticity,
      // product: baseProduct,
      similarProducts: baseSimilarProducts,
    };
    const renderedComponent = renderIntoDocument(
      <ProductCard {...props} />
    );

    expect(renderedComponent).to.be.an('object');
  });

  // it('should render all attribute types', () => {
  //   const renderedComponent = renderIntoDocument(
  //     <ProductCard {...productCardWithAllAttributeTypes} />
  //   );
  //   console.log(scryRenderedDOMComponentsWithClass(renderedComponent, 'b-page__content__inner'));

  //   // console.log(findDOMNode(renderedComponent));
  //   // console.log(isCompositeComponent(renderedComponent));
  //   // const content = findRenderedDOMComponentWithClass(renderedComponent, 'b-item-full');

  //   // console.log(content);
  // });
});