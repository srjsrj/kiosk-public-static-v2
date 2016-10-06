/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import OrderCreatedContainer from 'rc/OrderCreated';
import props from 'test/fixtures/orderCreated/sample.json';

describe('[Component] OrderCreatedContainer', () => {
  it('should render without errors', () => {
    expect(() => render(<OrderCreatedContainer {...props} />)).not.to.throw();
  });
});
