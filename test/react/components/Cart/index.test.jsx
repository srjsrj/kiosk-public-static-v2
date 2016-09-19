/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from '../../../mocks/t';
import emptyCart from '../../../fixtures/cart/empty';
import CartContainer from '../../../../app/scripts/react/components/Cart';
import { createStore, combineReducers } from 'redux';
import * as reducers from '../../../../app/scripts/react/reducers';

global.redux = createStore(combineReducers(reducers));

describe('[Component] CartContainer', () => {
  it('should render empty message when the cart is empty', () => {
    const props = { ...emptyCart, t };

    expect(render(<CartContainer {...props} />)
      .find('.b-cart__content .b-text p')
      .text()
    ).to.equal('vendor.cart.empty');
  });
});