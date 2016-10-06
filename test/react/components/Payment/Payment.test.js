/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Payment from 'rc/Payment';

describe('[Component] Payment', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<Payment state={'success'} vendorUrl={'/vendors/1'}/>)).to.not.throw();
    expect(() => render(<Payment state={'failure'} vendorUrl={'/vendors/1'}/>)).to.not.throw();
  });
});