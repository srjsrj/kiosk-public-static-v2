import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CartTitle extends Component {
  render() {
    const { totalCount, totalPrice } = this.props;

    if (totalCount || totalPrice) {
      return (
        <h1 className="b-cart__title">
          {`${t('vendor.pages.titles.order')} `}
          <strong>{t('vendor.entities.product', {count: totalCount})}</strong>
          {` ${t('vendor.order.new.sum')} `}
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