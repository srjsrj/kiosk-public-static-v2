/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';

import { InstagramContainer } from 'rc/Instagram';

describe('[Component] InstagramContainer', () => {
  it('should render basic component without errors', () => {
    const props = { t };

    expect(() => render(<InstagramContainer {...props} />)).to.not.throw();
  });
});