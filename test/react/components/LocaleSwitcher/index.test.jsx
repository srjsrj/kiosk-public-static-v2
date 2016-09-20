/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';

import LocaleSwitcher from 'rc/LocaleSwitcher';

describe('[Component] LocaleSwitcher', () => {
  it('should render basic component without errors', () => {
    const props = { t };

    expect(() => render(<LocaleSwitcher {...props} />)).to.not.throw();
  });
});