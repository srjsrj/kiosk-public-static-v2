import React, { addons, findDOMNode, render } from 'react';
import { expect } from 'chai';
import {
  productCard,
  productCardWithAllAttributeTypes
} from './ProductCard.test.props';
import ProductCard from '../../../../app/scripts/react/components/Product/ProductCard';

const { renderIntoDocument, scryRenderedDOMComponentsWithClass } = addons.TestUtils;

describe('[Component] ProductCard', () => {
  it('should render without errors', () => {
    const renderedComponent = renderIntoDocument(
      <ProductCard {...productCard} />
    );

    expect(renderedComponent).to.be.an('object');
  });

  it('should render all attribute types', () => {
    const renderedComponent = renderIntoDocument(
      <ProductCard {...productCardWithAllAttributeTypes} />
    );
    console.log(scryRenderedDOMComponentsWithClass(renderedComponent, 'b-page__content__inner'));

    // console.log(findDOMNode(renderedComponent));
    // console.log(isCompositeComponent(renderedComponent));
    // const content = findRenderedDOMComponentWithClass(renderedComponent, 'b-item-full');

    // console.log(content);
  });
});