import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import { vendorCartItems } from '../../../../routes/app';
import CSRFToken from '../../common/CSRFToken';
import HiddenInput from '../../common/HiddenInput';
import ProductCartForProduct from './ProductCartForProduct';
import ProductCartForProductItems from './ProductCartForProductItems';
import ProductCartNotAvailable from './ProductCartNotAvailable';

export default class ProductCart extends Component {
  static propTypes = {
    formAuthenticity: PropTypes.object,
    onGoodChange: PropTypes.func,
    product: PropTypes.object.isRequired,
  }
  static defaultProps = {
    formAuthenticity: {},
  }
  renderContent(product) {
    if (product.has_ordering_goods) {
      if (product.goods.length === 1) {
        return (
          <ProductCartForProduct good={product.goods[0]} />
        );
      } else {
        return (
          <ProductCartForProductItems
            onGoodChange={this.props.onGoodChange}
            product={product}
          />
        );
      }
    } else {
      return (
        <ProductCartNotAvailable title={t('vendor.product.not_available')} />
      );
    }
  }
  render() {
    const { onProductChange, product } = this.props;

    return (
      <form
        acceptCharset="UTF-8"
        action={vendorCartItems()}
        className="simple_form cart_item"
        method="POST"
      >
        <div style={{ display: 'none'}}>
          <HiddenInput name="utf8" value="✓" />
          <CSRFToken {...this.props.formAuthenticity} />
        </div>
        {this.renderContent(product)}
      </form>
    );
  }
}