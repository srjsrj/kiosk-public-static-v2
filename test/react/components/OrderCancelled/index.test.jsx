/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import OrderCancelledContainer from 'rc/OrderCancelled';
import props from 'test/fixtures/orderCancelled/sample.json';

describe('[Component] OrderCancelledContainer', () => {
  it('should should render without errors', () => {
    expect(() => render(<OrderCancelledContainer {...props} />)).not.to.throw();
  });
});
