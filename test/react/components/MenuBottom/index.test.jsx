/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';
import menuBottomPropsSample from 'test/fixtures/menuBottom/sample';
import MenuBottom from 'rc/MenuBottom';

describe('[Component] MenuBottom', () => {
  it('should render correctly with appropriate props', () => {
    const props = { ...menuBottomPropsSample, t };

    expect(() => render(<MenuBottom {...props} />)).not.to.throw();
  });
});
