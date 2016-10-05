import React, { Component, PropTypes } from 'react';
import OrderCancelled from './OrderCancelled';
import provideTranslations from 'rc/HoC/provideTranslations';
import * as schemas from 'r/schemas';

class OrderCancelledContainer extends Component {
  render() {
    return <OrderCancelled {...this.props} />;
  }
}

OrderCancelledContainer.propTypes = {
  isCurrentClientPresent: PropTypes.bool.isRequired,
  order: schemas.order.isRequired,
  t: PropTypes.func.isRequired,
  vendorRootPath: PropTypes.string,
};

OrderCancelledContainer.defaultProps = {
  isCurrentClientPresent: false,
  order: {
    items: [],
    workflow_state: {
      bg_style: {},
    },
  },
  admin_comments: [],
};

export default provideTranslations(OrderCancelledContainer);
