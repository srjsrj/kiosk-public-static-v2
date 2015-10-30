import React from 'react';
import PropTypes from 'propTypes';
import classNames from 'classnames';
import { productCategoryPath } from '../../../helpers/vendors';

export default class ProductCardBreadcrumbs {
  static propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
  }
  render() {
    const { className, product } = this.props;

    if (product.categories && product.categories.length) {
      return (
        <div className={classNames('b-breadcrumbs', className)}>
          {productCategoryPath(product)}
        </div>
      );
    } else {
      return null;
    }
  }
}