import React, { PropTypes } from 'react';
import HiddenInput from '../../common/HiddenInput';
import ProductAddToCartButton from '../ProductAddToCartButton';

// TODO: i18n
const ADD_TO_CART_BUTTON = 'В корзину';

export default class ProductCartForProduct {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  render() {
    const { good } = this.props;

    return (
      <span>
        <HiddenInput name="cart_item[good_id]" value={good.global_id} />
        <div className="b-item-full__form__row b-item-full__form__row_fixed">
          <div className="b-item-full__form__submit">
            <ProductAddToCartButton text={ADD_TO_CART_BUTTON} />
          </div>
        </div>
      </span>
    );
  }
}