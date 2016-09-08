import React, { Component, PropTypes } from 'react';
import { Image } from '../common/Image';
import { humanizedMoneyWithCurrency } from '../../helpers/money';

class CartListPackages extends Component {
  renderRadioButton({ value, title }) {
    const id = `cart_package_good_global_id_${value}`;

    return (
      <div className="b-form__radio">
        <div className="form-group radio_buttons required">
          <span className="radio">
            <label htmlFor={id}>
              <input
                className="radio_buttons required"
                data-package="true"
                data-price="150"
                id={id}
                name="cart[package_good_global_id]"
                type="radio"
                value={value}
              />
              {title}
            </label>
          </span>
        </div>
      </div>
    );
  }
  renderTitle(item) {
    return (
      <span>
        {item.title}
        {' - '}
        {humanizedMoneyWithCurrency(item.price)}
      </span>
    );
  }
  render() {
    const {
      packages,
      t,
    } = this.props;

    if (!packages || packages.length === 0) {
      return <noscript />;
    }

    return (
      <li className="b-cart__item_spec">
        <div className="b-cart__item">
          <div className="b-cart__item__col-img">
            <Image
              className="b-cart__item__img"
              image={packages[0].image}
              maxHeight={184}
              maxWidth={184}
            />
          </div>
          <div className="b-cart__item__col-content">
            <h2 className="b-cart__item__title">
              {t('vendor.packaging.add_gift_package')}
            </h2>
            <div className="b-form__radio">
              {this.renderRadioButton({ value: '', title: t('vendor.packaging.no_package') })}
              {packages.map((item) => (
                this.renderRadioButton({
                  title: this.renderTitle(item),
                  value: item.global_id,
                })
              ))}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

CartListPackages.propTypes = {
  packages: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

export default CartListPackages;
