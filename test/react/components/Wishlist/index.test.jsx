/*global describe, it */
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';

import then from '../../../utils/then';
import t from '../../../mocks/t';

import Wishlist from '../../../../app/scripts/react/components/Wishlist';

describe('[Component] Wishlist', () => {
  it('should render without errors when there aren\'t any props', () => {
    const props = { t };
    const component = renderIntoDocument(
      <Wishlist {...props} />
    );

    expect(component).to.be.an('object');
  });
});
