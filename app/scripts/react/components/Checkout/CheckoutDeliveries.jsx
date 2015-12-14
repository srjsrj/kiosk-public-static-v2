import React, { Component, PropTypes } from 'react';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

// {
//   id: 123,
//   title: 'Доставка',
//   description: 'Супер доставка',
//   price: samplePrice,
//   fields: ['name', 'address'],
//   requiredFields: ['name', 'address'],
//   availablePayments: [12, 13],
//   cityTitle: 'Москва',
// }

class CheckoutDeliveries extends Component {
  renderItem(item) {
    const { currentDelivery, itemFieldName, onChange } = this.props;

    return (
      <div className="b-form__row__widget" key={item.id}>
        <span className="b-form__radio">
          <label>
            <input
              checked={currentDelivery && item.id === currentDelivery.id}
              className="form-control radio_buttons"
              name={`vendor_order[${itemFieldName}]`}
              onChange={() => onChange(item)}
              type="radio"
              value={item.id}
            />
            <div className="b-cart__form__delivery-name">
              {item.title}
            </div>
            <div className="b-cart__form__delivery-price">
              <HumanizedMoneyWithCurrency money={item.price} />
            </div>
            <div className="cart__form__delivery-address">
              {item.description}
            </div>
          </label>
        </span>
      </div>
    );
  }
  render() {
    const { items } = this.props;

    return (
      <span>
        {items.map(item => this.renderItem(item))}
      </span>
    );
  }
}

CheckoutDeliveries.propTypes = {
  currentDelivery: PropTypes.object,
  itemFieldName: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
};
CheckoutDeliveries.defaultProps = {
  itemFieldName: 'delivery_type_id',
  items: [],
};

export default CheckoutDeliveries;