/*global describe, it */
import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import NotFound from 'rc/NotFound';

describe('[Component] ProductBlock', () => {
  it('should render basic component without errors', () => {
    expect(() => render(<NotFound subject={"404 - Страница не найдена"} content={"Ресурс, к которому вы обратились, не был найден"} />)).not.to.throw();
  });
});