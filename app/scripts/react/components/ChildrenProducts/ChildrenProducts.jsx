import React, { Component, PropTypes } from 'react';
import ProductGroup from 'rc/ProductGroup';
import * as schemas from 'r/schemas';

class ChildrenProducts extends Component {
  render() {
    const {
      childrenProducts,
      showCartButton,
      showQuantity,
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
            showCartButton={showCartButton}
            showQuantity={showQuantity}
            title={title}
            vendorCategoryPath={vendorCategoryPath}
          />
        ))}
      </div>
    );
  }
}

ChildrenProducts.propTypes = {
  childrenProducts: schemas.childrenProducts.isRequired,
  showCartButton: PropTypes.bool,
  showQuantity: PropTypes.bool,
  title: PropTypes.string,
};

ChildrenProducts.defaultProps = {
  childrenProducts: [],
  showCartButton: false,
  showQuantity: false,
};

export default ChildrenProducts;
