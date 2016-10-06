/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import OrderPaymentContainer from 'rc/OrderPayment';
import props from 'test/fixtures/orderPayment/sample.json';

describe('[Component] OrderPaymentContainer', () => {
  it('should render without errors', () => {
    expect(() => render(<OrderPaymentContainer {...props} />)).not.to.throw();
  });
});
