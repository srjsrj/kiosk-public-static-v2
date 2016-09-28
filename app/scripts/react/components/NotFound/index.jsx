import React from 'react';
import { camelizeKeys } from 'humps';
import NotFound from './NotFound';

function NotFoundContainter(props) {
  return <NotFound {...camelizeKeys(props)} />;
}

export default NotFoundContainter;

