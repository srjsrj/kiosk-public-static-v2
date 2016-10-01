/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import ProductArchivedContainer from 'rc/ProductArchived';
import props from 'test/fixtures/productArchived/sample.json';

describe('[Component] ProductArchivedContainer', () => {
  it('should render without errors', () => {
    expect(() => render(<ProductArchivedContainer {...props} />)).not.to.throw();
  });
});
