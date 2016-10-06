import React, { Component, PropTypes } from 'react';
import OrderPaid from './OrderPaid';
import * as schemas from 'r/schemas';
import provideTranslations from 'rc/HoC/provideTranslations';

class OrderPaidContainer extends Component {
  render() {
    return <OrderPaid {...this.props} />;
  }
}

OrderPaidContainer.propTypes = {
  isCurrentClientPresent: PropTypes.bool.isRequired,
  order: schemas.order.isRequired,
  t: PropTypes.func.isRequired,
  vendorRootPath: PropTypes.string,
};

OrderPaidContainer.defaultProps = {
  isCurrentClientPresent: false,
};

export default provideTranslations(OrderPaidContainer);
