import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ProductArticle {
  static propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired,
  }
  render() {
    const { className, product } = this.props;

    return (
      <span
        className={classNames('b-item-full__articul', className)}
        product-article={true}
      >
        {product.article}
      </span>
    );
  }
}