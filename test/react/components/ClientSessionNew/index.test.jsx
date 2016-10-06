/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import ClientSessionNewContainer from 'rc/ClientSessionNew';
import props from 'test/fixtures/clientSessionNew/sample.json';

describe('[Component] ClientSessionNewContainer', () => {
  it('should render without errors', () => {
    expect(() => render(<ClientSessionNewContainer {...props} />)).not.to.throw();
  });
});
