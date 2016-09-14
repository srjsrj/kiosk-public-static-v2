import React, { Component, PropTypes } from 'react';
import { decamelizeKeys } from 'humps';

import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class OrderTitle extends Component {
  componentWillUpdate(nextProps) {
    if (this.props.totalPrice.get('cents') !== nextProps.totalPrice.get('cents')) {
      this.animatePriceChanges();
    }
  }
  animatePriceChanges() {
    const priceNode = this.refs.price;

    if (!priceNode) {
      return;
    }

    priceNode.classList.add('animated');
    priceNode.classList.add('bounce');
    setTimeout(() => {
      priceNode.classList.remove('animated');
      priceNode.classList.remove('bounce');
    }, 1000);
  }
  render() {
    const {
      t,
      totalCount,
      totalPrice,
    } = this.props;

    if (totalCount || !totalPrice.isEmpty()) {
      return (
        <h1 className="b-cart__title">
          {`${t('vendor.pages.titles.order')} `}
          <strong>
            {t('vendor.entities.product', {count: totalCount})}
          </strong>
          {` ${t('vendor.order.new.sum')} `}
          <strong className="b-cart__title-price" ref="price">
            <HumanizedMoneyWithCurrency money={decamelizeKeys(totalPrice.toJS())} />
          </strong>
        </h1>
      );
    }

    return null;
  }
}

OrderTitle.propTypes = {
  t: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.object.isRequired,
};

export default OrderTitle;
