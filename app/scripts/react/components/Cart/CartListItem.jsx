/*global gon */
import React, { Component, PropTypes } from 'react';
import { Image } from '../common/Image';
import AssetImage from '../common/AssetImage';
import Select from '../common/Select';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CartListItem extends Component {
  renderGoodDetails() {
    const {
      custom_attributes,
    } = this.props.item.good;

    return Object.keys(custom_attributes).map((key, idx) => (
      <div className="b-cart__item__option" key={`custom-attr-${idx}`}>
        {`${key}: ${custom_attributes[key]}`}
      </div>
    ));
  }
  renderErrors() {
    const {
      errors,
    } = this.props.item;

    return (
      <div className="b-alert b-alert_danger">
        {Object.keys(errors).map((key) => (
          <p key={`cart-list-item-error-${key}`}>
            {errors[key].join(', ')}
          </p>
        ))}
      </div>
    );
  }
  renderWeight() {
    const {
      item,
      t,
    } = this.props;

    return (
      <div className="b-cart__item__col-weight">
        {item.good.has_ordering_goods
          ? (
            <span>
              <span className="b-cart__item__weight__text">
                {t('vendor.cart.weight')}
              </span>
              <div className="b-cart__item__quantity__input">
                <input
                  defaultValue={item.weight}
                  name={`cart[items][${item.id}][weight]`}
                  step="0.01"
                  type="number"
                />
              </div>
            </span>
          )
          : (
          <button className="b-btn" disabled>
            {t('vendor.cart.not_available')}
          </button>
          )
        }
      </div>
    );
  }
  renderQuantity() {
    const {
      item,
      t,
    } = this.props;
    const maxAvail = Math.min(gon.max_items_count, item.good.max_orderable_quantity);
    const options = [...Array(Math.max(item.count, maxAvail)).keys()] // fancy way to generate the range
      .map((i) => ({
        value: i + 1,
        title: i + 1,
        disabled: i + 1 > maxAvail,
      }));

    return (
      <div className="b-cart__item__col-quantity">
        {item.good.has_ordering_goods
          ? (
            <span>
              <span className="b-cart__item__quantity__text">
                {t('vendor.cart.amount')}
              </span>
              <div className="b-cart__item__quantity__select">
                <Select
                  defaultValue={item.count}
                  name={`cart[items][${item.good.id}][count]`}
                  options={options}
                />
              </div>
            </span>
          )
          : (
          <button className="b-btn" disabled>
            {t('vendor.cart.not_available')}
          </button>
          )
        }
      </div>
    );
  }
  render() {
    const {
      item,
    } = this.props;
    const totalCost = Object.assign({}, item.good.actual_price, {
      cents: item.good.actual_price.cents * item.count,
    });

    return (
      <li className="b-cart__item">
        <div className="b-cart__item__col-img">
          <Image
            className="b-cart__item__img"
            image={item.good.image}
            maxHeight={143}
            maxWidth={143}
          />
        </div>
        <div className="b-cart__item__col-content">
          <h2 className="b-cart__item__title">
            <a
              href={item.good.default_url}
              target="_blank"
            >
              {item.good.title}
            </a>
          </h2>
          {this.renderGoodDetails()}
          {(Object.keys(item.errors).length > 0) && this.renderErrors()}
        </div>
        {item.selling_by_weight
          ? this.renderWeight()
          : this.renderQuantity()
        }
        <div className="b-cart__item__col-price">
          <div className="b-cart__item__price">
            <HumanizedMoneyWithCurrency money={totalCost} />
          </div>
        </div>
        <div className="b-cart__item__col-remove">
          <a
            className="b-cart__item__remove"
            data-method="delete"
            href={item.good.destroy_path}
          >
            <AssetImage src="images/cross_white.svg" />
          </a>
        </div>
      </li>
    );
  }
}

CartListItem.propTypes = {
  item: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default CartListItem;
