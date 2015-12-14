import React, { Component, PropTypes } from 'react';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CartTitle extends Component {
  render() {
    const { totalCount, totalPrice } = this.props;

    if (totalCount || totalPrice) {
      return (
        <h1 className="b-cart__title">
          {'Оформление заказа. '}
          <strong>{totalCount} товаров</strong>
          {' на сумму '}
          <strong>
            <HumanizedMoneyWithCurrency money={totalPrice} />
          </strong>
        </h1>
      );
    }

    return null;
  }
}

CartTitle.propTypes = {
  totalCount: PropTypes.number,
  totalPrice: PropTypes.object,
};

export default CartTitle;