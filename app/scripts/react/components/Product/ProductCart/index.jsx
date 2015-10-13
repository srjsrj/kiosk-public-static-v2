import React, { PropTypes } from 'react';
import { vendorCartItems } from '../../../../routes/app';
import ProductCartForProduct from './ProductCartForProduct';
import ProductCartForProductItems from './ProductCartForProductItems';
import ProductCartNotAvailable from './ProductCartNotAvailable';

export default class ProductCart {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }
  renderContent(product) {
    if (product.has_ordering_goods) {
      if (product.goods.length === 1) {
        return <ProductCartForProduct good={product.goods[0]} />;
      } else {
        return <ProductCartForProductItems product={product} />;
      }
    } else {
      return <ProductCartNotAvailable title="Не доступно" />;
    }
  }
  render() {
    const { product } = this.props;

    return (
      <form
        acceptCharset="UTF-8"
        action={vendorCartItems()}
        className="simple_form cart_item"
        method="POST"
        noValidate="novalidate"
      >
        {this.renderContent(product)}
      </form>
    );
  }
}