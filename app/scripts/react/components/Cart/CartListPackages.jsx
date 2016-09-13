import React, { Component, PropTypes } from 'react';
import { Image } from '../common/Image';
import { humanizedMoneyWithCurrency } from '../../helpers/money';
import { Map } from 'immutable';
import { decamelizeKeys } from 'humps';

class CartListPackages extends Component {
  renderRadioButton({ value, title, checked, key }) {
    const id = `cart_package_good_global_id_${value}`;

    return (
      <div className="b-form__radio" key={key}>
        <div className="form-group radio_buttons required">
          <span className="radio">
            <label htmlFor={id}>
              <input
                checked={checked}
                className="radio_buttons required"
                data-package="true"
                id={id}
                name="cart[package_good_global_id]"
                onChange={this.props.selectPackage.bind(this, value)}
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
        {item.get('title', '')}
        {' - '}
        <b>
          {humanizedMoneyWithCurrency(decamelizeKeys(item.get('price', Map()).toJS()))}
        </b>
      </span>
    );
  }
  render() {
    const {
      packages,
      selectedPackage,
      t,
    } = this.props;

    if (packages.count() === 0) {
      return <noscript />;
    }

    return (
      <li className="b-cart__item_spec">
        <div className="b-cart__item">
          <div className="b-cart__item__col-img">
            <Image
              className="b-cart__item__img"
              image={packages.first().get('image').toJS()}
              maxHeight={184}
              maxWidth={184}
            />
          </div>
          <div className="b-cart__item__col-content">
            <h2 className="b-cart__item__title">
              {t('vendor.packaging.add_gift_package')}
            </h2>
            {this.renderRadioButton({
              key: 'radio-button-default',
              value: '',
              title: t('vendor.packaging.no_package'),
              checked: !selectedPackage,
            })}
            {packages.map((item, idx) => (
              this.renderRadioButton({
                key: `radio-button-${idx}`,
                title: this.renderTitle(item),
                value: item.get('globalId', ''),
                checked: selectedPackage === item.get('globalId'),
              })
            )).valueSeq()}
          </div>
        </div>
      </li>
    );
  }
}

CartListPackages.propTypes = {
  packages: PropTypes.object.isRequired,
  selectPackage: PropTypes.func.isRequired,
  selectedPackage: PropTypes.string,
  t: PropTypes.func.isRequired,
};

export default CartListPackages;
