import React from 'react';
import { camelizeKeys } from 'humps';
import Dictionary from './Dictionary';

function DictionaryContainers(props) {
  return <Dictionary {...camelizeKeys(props)} />;
}

export default DictionaryContainers;
