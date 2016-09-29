/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import CategoriesShowChildrenContainer from 'rc/CategoriesShowChildren';

describe('[Component] CategoriesShowChildren', () => {
  it('should render without errors', () => {
    expect(() => render(<CategoriesShowChildrenContainer />)).not.to.throw();
  });
});
