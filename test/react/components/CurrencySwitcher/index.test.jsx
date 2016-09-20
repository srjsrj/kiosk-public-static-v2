/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';

import CurrencySwitcher from 'rc/CurrencySwitcher';

describe('[Component] CurrencySwitcher', () => {
  it('should render basic component without errors', () => {
    const props = { t };

    expect(() => render(<CurrencySwitcher {...props} />)).to.not.throw();
  });
});