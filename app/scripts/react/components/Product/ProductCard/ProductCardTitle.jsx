import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { h1 } from '../../../helpers/seo';

export default class ProductCardTitle {
  static propTypes = {
    className: PropTypes.string,
    product: PropTypes.object,
  }
  render() {
    const { className, product } = this.props;

    return (
      <h1 className={classNames('b-item-full__title', className)}>
        {h1(product)}
        {product.article &&
          <span className="b-item-full__articul">
            {' '}
            {product.article}
          </span>
        }
      </h1>
    );
  }
}