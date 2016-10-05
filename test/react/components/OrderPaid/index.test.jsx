/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import OrderPaidContainer from 'rc/OrderPaid';
import props from 'test/fixtures/orderPaid/sample.json';

describe('[Component] OrderPaidContainer', () => {
  it('should render without errors', () => {
    expect(() => render(<OrderPaidContainer {...props} />)).not.to.throw();
  });
});
