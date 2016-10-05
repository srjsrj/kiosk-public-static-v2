import React, { Component, PropTypes } from 'react';
import OrderCreated from './OrderCreated';
import * as schemas from 'r/schemas';
import provideTranslations from 'rc/HoC/provideTranslations';

class OrderCreatedContainer extends Component {
  render() {
    return <OrderCreated {...this.props} />;
  }
}

OrderCreatedContainer.propTypes = {
  order: schemas.order.isRequired,
  t: PropTypes.func.isRequired,
  vendorCategoryPath: PropTypes.string.isRequired,
};

OrderCreatedContainer.defaultProps = {
  order: {
    admin_comments: [],
  },
};

export default provideTranslations(OrderCreatedContainer);
