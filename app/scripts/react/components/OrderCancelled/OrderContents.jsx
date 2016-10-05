import React, { Component, PropTypes } from 'react';
import OrderItem from './OrderItem';
import HumanizedMoneyWithCurrency from 'rc/common/Money/HumanizedMoneyWithCurrency';
import FaIcon from 'rc/common/FaIcon';
import * as schemas from 'r/schemas';

const DISCOUNT_TYPE_FIXED = 'fixed';

class OrderContents extends Component {
  renderPackageGood(packageGood, packagePrice) {
    const {
      default_url: packageDefaultUrl,
      image_url: packageImageUrl,
      title: packageTitle,
      quantity_unit: packageQuantityUnit,
    } = packageGood;

    return (
      <li className="b-cart__item">
        <div className="b-cart__item__col-img">
          <Image
            className="b-cart__item__img"
            hasFixedSize
            image={{ url: packageImageUrl }}
            maxWidth={143}
          />
        </div>
        <div className="b-cart__item__col-content">
          <h2 className="b-cart__item__title">
            <a href={packageDefaultUrl} target="_blank">
              {packageTitle}
            </a>
          </h2>
        </div>
        <div className="b-cart__item__col-quantity">
          <span>
            {`1 ${packageQuantityUnit}`}
          </span>
        </div>
        <div className="b-cart__item__col-price">
          <div className="b-cart__item__price">
            <HumanizedMoneyWithCurrency money={packagePrice} />
          </div>
        </div>
      </li>
    );
  }
  renderCouponDiscount(coupon) {
    const {
      t,
    } = this.props;
    const {
      discount,
      discount_type: discountType,
      fixed_discount: fixedDiscount,
      free_delivery: freeDelivery,
    } = coupon;

    return (
      <div className="text-warning">
        {discount > 0 && (
          <span>
            <FaIcon name="level-down" />
            {'&mdash;'}
            {discountType === DISCOUNT_TYPE_FIXED
              ? <HumanizedMoneyWithCurrency money={fixedDiscount} />
              : `${discount} %`
            }
          </span>
        )}
        {freeDelivery && (
          <span data-tooltip={t('vendor.coupon.free_delivery')}>
            <FaIcon name="truck" />
          </span>
        )}
      </div>
    );
  }
  render() {
    const {
      order: {
        items,
        coupon,
        package_good: packageGood,
        package_price: packagePrice,
        total_with_delivery_price: totalWithDeliveryPrice,
        delivery_price: deliveryPrice,
      },
      t,
    } = this.props;

    return (
      <div className="b-cart__content">
        <h4>
          {t('vendor.order.contents')}
        </h4>
        <ul className="b-cart__list">
          {items.map((item) => <OrderItem item={item} key={`order-item-${item.id}`} />)}
          {packageGood && this.renderPackageGood(packageGood, packagePrice)}
          {coupon && (
            <li className="b-cart__item">
              <div className="b-cart__item__col-img" />
              <div className="b-cart__item__col-content">
                <h2 className="b-cart__item__title">
                  {t('vendor.shared.coupon')}
                </h2>
              </div>
              <div className="b-cart__item__col-quantity" />
              <div className="b-cart__item__col-price">
                <div className="b-cart__item__price">
                  {this.renderCouponDiscount(coupon)}
                </div>
              </div>
            </li>
          )}
          <li className="b-cart__item">
            <div className="b-cart__item__col-img" />
            <div className="b-cart__item__col-content">
              <h2 className="b-cart__item__title">
                {t('vendor.order.delivery_price')}
              </h2>
            </div>
            <div className="b-cart__item__col-quantity" />
            <div className="b-cart__item__col-price">
              <div className="b-cart__item__price">
                <HumanizedMoneyWithCurrency money={deliveryPrice} />
              </div>
            </div>
          </li>
        </ul>
        <div className="b-cart__total-sum">
          {t('vendor.cart.overall')}
          <span>
            <HumanizedMoneyWithCurrency money={totalWithDeliveryPrice} />
          </span>
        </div>
        <div className="b-cart__action" />
      </div>
    );
  }
}

OrderContents.propTypes = {
  order: schemas.order.isRequired,
  t: PropTypes.func.isRequired,
};

OrderContents.defaultProps = {
  order: {},
};

export default OrderContents;
