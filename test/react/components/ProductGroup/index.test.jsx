/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import productGroupPropsSample from 'test/fixtures/productGroup/sample';
import ProductGroup from 'rc/ProductGroup';

describe('[Component] ProductGroup', () => {
  it('should render without errors', () => {
    const props = { ...productGroupPropsSample };

    expect(() => render(<ProductGroup {...props} />)).not.to.throw();
  });
});
