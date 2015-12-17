import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';

class CheckoutPayments extends Component {
  renderItem(item) {
    const { current, itemFieldName, onChange } = this.props;

    return (
      <div className="b-form__row__widget" key={item.id}>
        <span className="b-form__radio">
          <label>
            <input
              checked={current && item.id === current.id}
              className="form-control radio_buttons"
              name={`vendor_order[${itemFieldName}]`}
              onChange={() => onChange(item)}
              type="radio"
              value={item.id}
            />
            <div className="b-cart__form__payment-name">
              {item.title}
            </div>
            <div className="b-cart__form__payment-description">
              {item.description}
            </div>
          </label>
        </span>
      </div>
    );
  }
  render() {
    const { current, items } = this.props;

    return (
      <span>
        {items.map(item => this.renderItem(item))}
      </span>
    );
  }
}

CheckoutPayments.propTypes = {
  current: schemas.paymentMethod,
  itemFieldName: PropTypes.string,
  items: PropTypes.arrayOf(schemas.paymentMethod),
  onChange: PropTypes.func.isRequired,
};
CheckoutPayments.defaultProps = {
  itemFieldName: 'payment_type_id',
  items: [],
};

export default CheckoutPayments;