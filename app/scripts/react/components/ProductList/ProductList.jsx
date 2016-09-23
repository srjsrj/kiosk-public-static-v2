import React, { Component, PropTypes } from 'react';
import ProductBlock from 'rc/ProductBlock';
import Pagination from 'rc/Pagination';

class ProductList extends Component {
  render() {
    const {
      products: {
        items,
        pagination,
      },
      showCartButton,
      showPagination,
      showQuantity,
      t,
    } = this.props;

    return (
      <div className="b-item-list__content">
        {items.length > 0
          ? items.map((item) => (
            <ProductBlock
              product={item}
              showCartButton={showCartButton}
              showQuantity={showQuantity}
            />
          ))
          : (
          <div className="b-text b-text_center">
            {t('vendor.products.nothing_found_by_criteria')}
          </div>
        )}
        {(showPagination && pagination.total_pages > 1) && (
          <Pagination {...pagination} />
        )}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    items: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
  }).isRequired,
  showCartButton: PropTypes.bool,
  showPagination: PropTypes.bool,
  showQuantity: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default ProductList;
