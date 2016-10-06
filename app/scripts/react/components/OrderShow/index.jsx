import React, { Component, PropTypes } from 'react';
import OrderShow from './OrderShow';
import * as schemas from 'r/schemas';
import provideTranslations from 'rc/HoC/provideTranslations';

class OrderShowContainer extends Component {
  render() {
    return <OrderShow {...this.props} />;
  }
}

OrderShowContainer.propTypes = {
  order: schemas.order.isRequired,
  t: PropTypes.func.isRequired,
};

export default provideTranslations(OrderShowContainer);
