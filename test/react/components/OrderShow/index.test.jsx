/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import OrderShowContainer from 'rc/OrderShow';
import props from 'test/fixtures/orderShow/sample.json';

describe('[Component] OrderShowContainer', () => {
  it('should render without errors', () => {
    expect(() => render(<OrderShowContainer {...props} />)).not.to.throw();
  });
});
