import React, { Component, PropTypes } from 'react';
import ProductGroup from 'rc/ProductGroup';

class ChildrenProducts extends Component {
  render() {
    const {
      childrenProducts,
      title,
    } = this.props;

    return (
      <div>
        {title && (
          <h1 className="b-item-list__title">
            {title}
          </h1>
        )}
        {childrenProducts.map(({ products, title, vendorCategoryPath }) => (
          <ProductGroup
            key={`product-group-${vendorCategoryPath}`}
            products={{ items: products }}
            title={title}
            vendorCategoryPath={vendorCategoryPath}
          />
        ))}
      </div>
    );
  }
}

ChildrenProducts.propTypes = {
  childrenProducts: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default ChildrenProducts;
