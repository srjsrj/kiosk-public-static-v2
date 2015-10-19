import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { productCategoryPath } from '../../../helpers/vendors';

export default class ProductCardBreadcrumbs {
  static propTypes = {
    className: PropTypes.string,
    product: PropTypes.object,
  }
  render() {
    const { className, product } = this.props;

    return (
      <div className={classNames('b-breadcrumbs', className)}>
        {productCategoryPath(product)}
      </div>
    );
  }
}