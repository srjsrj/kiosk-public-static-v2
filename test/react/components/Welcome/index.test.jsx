/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render, mount, shallow } from 'enzyme';
import WelcomeContainer from 'rc/Welcome';
import props from 'test/fixtures/welcome/sample.json';

describe('[Component] WelcomeContainer', () => {
  it('should should render without errors', () => {
    expect(() => render(<WelcomeContainer {...props} />)).not.to.throw();
  });
});
