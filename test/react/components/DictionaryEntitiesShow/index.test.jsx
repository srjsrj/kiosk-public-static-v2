/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import DictionaryEntitiesShow from 'rc/DictionaryEntitiesShow';
import sampleProps from 'test/fixtures/dictionaryEntitiesShow/sample.json';

describe('[Component] DictionaryEntitiesShow', () => {
  it('should render without errors', () => {
    expect(() => render(<DictionaryEntitiesShow {...sampleProps} />)).not.to.throw();
  });
});
