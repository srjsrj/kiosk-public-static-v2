import React, { Component, PropTypes } from 'react';
import {
  ORDER_DELIVERY_TYPE_SELFDELIVERY,
} from 'r/constants/OrderConstants';

class OrderSelfDeliveryMessage extends Component {
  render() {
    const {
      deliveryType: {
        type,
        pickup_address: pickupAdress,
      },
      t,
    } = this.props;

    return type === ORDER_DELIVERY_TYPE_SELFDELIVERY && pickupAdress != null
      ? (
        <span>
          {t('vendor.order.pickup_address')}
          {pickupAdress}
        </span>
      )
      : null;
  }
}

OrderSelfDeliveryMessage.propTypes = {
  deliveryType: PropTypes.shape({
    type: PropTypes.string.isRequired,
    pickup_address: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

OrderSelfDeliveryMessage.defaultProps = {
  deliveryType: {},
};

export default OrderSelfDeliveryMessage;
