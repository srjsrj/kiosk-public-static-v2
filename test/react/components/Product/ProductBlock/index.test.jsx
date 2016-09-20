/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';
import productBlockProps from 'test/fixtures/productBlock/sample';

import ProductBlock from 'rc/Product/ProductBlock';

describe('[Component] ProductBlock', () => {
  it('should render basic component without errors', () => {
    const props = { ...productBlockProps, t };

    expect(() => render(<ProductBlock {...props} />)).to.not.throw();
  });
});