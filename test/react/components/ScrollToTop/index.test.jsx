/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';

import ScrollToTop from 'rc/ScrollToTop';

describe('[Component] ScrollToTop', () => {
  it('should render basic component without errors', () => {
    const props = { t };

    expect(() => render(<ScrollToTop {...props} />)).to.not.throw();
  });
});