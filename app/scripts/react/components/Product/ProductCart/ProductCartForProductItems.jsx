import React, { PropTypes } from 'react';
import { goodOrderTitle } from '../../../helpers/product';
import ProductCartAddButton from './ProductCartAddButton';

export default class ProductCartForProductItems {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  renderSelect(product) {
    let selected = false;

    return (
      <select name="cart_item[good_id]">
        {
          product.goods.map((good) => {
            const option = (
              <option
                disabled={!good.is_ordering}
                key={good.id}
                selected={good.is_ordering && !selected}
                value={good.global_id}
              >
                {goodOrderTitle(product, good)}
              </option>
            );

            if (good.is_ordering && !selected) {
              selected = true;
            }

            return option;
          })
        }
      </select>
    );
  }
  render() {
    const { product } = this.props;

    return (
      <div className="b-item-full__form__row b-item-full__form__row_fixed">
        <div className="b-item-full__form__option">
          {this.renderSelect(product)}
        </div>
        <div className="b-item-full__form__submit">
          <ProductCartAddButton />
        </div>
      </div>
    );
  }
}