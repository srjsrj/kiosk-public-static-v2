/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';

import { Clientbar } from 'rc/Clientbar';

describe('[Component] Clientbar', () => {
  it('should render basic component without errors', () => {

    expect(() => render(<Clientbar t={t} />)).to.not.throw();
  });
});