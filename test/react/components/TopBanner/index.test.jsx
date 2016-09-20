/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import t from 'test/mocks/t';
import topBannerProps from 'test/fixtures/topBanner/sample';

import TopBanner from 'rc/TopBanner';

describe('[Component] TopBanner', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<TopBanner {...topBannerProps} />)).to.not.throw();
  });
});