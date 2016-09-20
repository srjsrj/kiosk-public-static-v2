/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';

import ImageSlider from 'rc/common/ImageSlider';

describe('[Component] ImageSlider', () => {
  it('should render basic component without errors', () => {
    const props = { t };

    expect(() => render(<ImageSlider {...props} />)).to.not.throw();
  });
});