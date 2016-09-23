/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import navBarPropsSample from 'test/fixtures/navBar/sample';
import NavBar from 'rc/NavBar';

describe('[Component] NavBar', () => {
  it('should render without errors', () => {
    const props = { ...navBarPropsSample };

    expect(() => render(<NavBar {...props} />)).not.to.throw();
  });
});
