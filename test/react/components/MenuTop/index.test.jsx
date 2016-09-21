/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';
import MenuTop from 'rc/MenuTop';
import menuTopPropsSample from 'test/fixtures/menuTop/sample1';

describe('[Component] MenuTop', () => {
  it('should render without errors with proper props', () => {
    const props = { ...menuTopPropsSample, t };

    expect(() => render(<MenuTop {...props} />)).not.to.throw();
  })
});