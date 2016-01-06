import React from 'react';
import { scryRenderedComponentsWithType, renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import then from '../../../utils/then';
import Alert from '../../../../app/scripts/react/components/common/Alert';
import { CartCoupon } from '../../../../app/scripts/react/components/Cart/CartCoupon';

describe('[Component] CartCoupon', () => {
  it('should render without errors when there aren\'t any props', () => {
    const component = renderIntoDocument(
      <CartCoupon />
    );

    expect(component).to.be.an('object');
  });

  it ('shouldn\'t display alert when code is empty', () => {
    const component = renderIntoDocument(
      <CartCoupon />
    );
    const alerts = scryRenderedComponentsWithType(component, Alert);

    expect(alerts.length).to.equals(0);
  });

  it ('should display alert when code isn\'t empty', (done) => {
    const code = 'code';
    const message = 'message';
    const component = renderIntoDocument(
      <CartCoupon />
    );

    component.setState({ code, message });

    then(() => {
      const alerts = scryRenderedComponentsWithType(component, Alert);

      expect(alerts.length).to.equals(1);
      done();
    });
  });

  it ('should display alert text in accordance to the state.message', (done) => {
    const code = 'code';
    const message = 'message';
    const component = renderIntoDocument(
      <CartCoupon />
    );

    component.setState({ code, message });

    then(() => {
      const alerts = scryRenderedComponentsWithType(component, Alert);

      expect(alerts[0].props.text).to.equals(message);
      done();
    });
  });
});