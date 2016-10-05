import React from 'react';
import { camelizeKeys } from 'humps';
import Lookbook from './Lookbook';

function LookbookContainer(props) {
  return <Lookbook {...camelizeKeys(props)} />;
}

export default LookbookContainer;
