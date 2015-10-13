import React, { PropTypes } from 'react';
import HiddenInput from '../../common/HiddenInput';
import ProductCartAddButton from './ProductCartAddButton';

export default class ProductCartForProduct {
  static propTypes = {
    good: PropTypes.object.isRequired,
  }
  render() {
    const { good } = this.props;

    return (
      <span>
        <HiddenInput name="good_id" value={good.global_id} />
        <div className="b-item-full__form__row b-item-full__form__row_fixed">
          <div className="b-item-full__form__submit">
            <ProductCartAddButton />
          </div>
        </div>
      </span>
    );
  }
}