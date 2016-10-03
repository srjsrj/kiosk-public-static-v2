/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import blogPostListProps from 'test/fixtures/blogPostList/sample';

import BlogPostList from 'rc/BlogPostList';

describe('[Component] BlogPostList', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<BlogPostList {...blogPostListProps} />)).to.not.throw();
  });
});