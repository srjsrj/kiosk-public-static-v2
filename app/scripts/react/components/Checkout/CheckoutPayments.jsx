import React, { Component, PropTypes } from 'react';

// {
//   id: 12,
//   title: 'Оплата банковской картой, через терминал или салон связи',
//   description: 'Безопасная оплата любым удобным способом',
// }

class CheckoutPayments extends Component {
  renderItem(item) {
    const { currentDelivery, itemFieldName } = this.props;

    return (
      <div className="b-form__row__widget" key={item.id}>
        <span className="b-form__radio">
          <label>
            <input
              className="form-control radio_buttons"
              name={`vendor_order[${itemFieldName}]`}
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
    const { currentDelivery, items } = this.props;

    return (
      <span>
        {items
          .filter(item => {
            if (currentDelivery) {
              return currentDelivery.availablePayments.indexOf(item.id) > -1;
            }
            return true;
          })
          .map(item => this.renderItem(item))
        }
      </span>
    );
  }
}

CheckoutPayments.propTypes = {
  currentDelivery: PropTypes.object,
  itemFieldName: PropTypes.string,
  items: PropTypes.array,
};
CheckoutPayments.defaultProps = {
  itemFieldName: 'payment_type_id',
  items: [],
};

export default CheckoutPayments;