import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { h1 } from '../../../helpers/seo';

export default class ProductCardTitle {
  static propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
  }
  render() {
    const { className, product } = this.props;
    const titleClasses = classNames('ProductCard-title', className);
    // const titleClasses = classNames(className, {
    //   [process.env.KIOSK_CSS_PREFIX + 'b-item-full__title']: true,
    // });
     // {process.env.KIOSK_CSS_PREFIX + 'b-item-full__articul'}
    return (
      <h1 className={titleClasses}>
        {h1(product)}
        {product.article &&
          <span className="ProductCard-articul">
            {' '}
            {product.article}
          </span>
        }
      </h1>
    );
  }
}