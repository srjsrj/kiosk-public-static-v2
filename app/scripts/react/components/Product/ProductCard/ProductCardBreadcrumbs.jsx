import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { productCategoryPath } from '../../../helpers/vendors';

export default class ProductCardBreadcrumbs {
  static propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
  }
  render() {
    const { className, product } = this.props;
    const breadClasses = classNames('ProductCard-breadcrumbs', className);
    // const breadcrumbsClasses = classNames(className, {
    //   [process.env.KIOSK_CSS_PREFIX + 'b-breadcrumbs']: true,
    // });

    if (product.categories && product.categories.length) {
      return (
        <div className={breadClasses}>
          {productCategoryPath(product)}
        </div>
      );
    } else {
      return null;
    }
  }
}