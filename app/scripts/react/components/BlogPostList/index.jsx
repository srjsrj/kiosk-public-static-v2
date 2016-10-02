import React from 'react';
import { camelizeKeys } from 'humps';
import BlogPostList from './BlogPostList';

function BlogPostListContainer(props) {
  return <BlogPostList {...camelizeKeys(props)} />;
}

export default BlogPostListContainer;
