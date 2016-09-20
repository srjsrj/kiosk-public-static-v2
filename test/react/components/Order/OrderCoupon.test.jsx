/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';

import OrderCoupon from 'rc/Checkout/CheckoutCoupon';

describe('[Component] OrderCoupon', () => {
  it('should render basic component without errors', () => {
    const props = { t };

    expect(() => render(<OrderCoupon {...props} />)).to.not.throw();
  });
});