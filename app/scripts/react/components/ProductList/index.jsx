import React, { Component, PropTypes } from 'react';
import ProductList from './ProductList';
import ProductBlock from 'rc/Product/ProductBlock';
import provideTranslations from 'rc/HoC/provideTranslations';
import * as schemas from 'r/schemas';

class ProductListContainer extends Component {
  render() {
    return <ProductList {...this.props} />;
  }
}

ProductListContainer.propTypes = {
  container: {
    image: schemas.image,
    description: PropTypes.string,
    bottom_text: PropTypes.string,
  },
  products: PropTypes.shape({
    items: PropTypes.arrayOf(ProductBlock.wrapped.propTypes).isRequired,
    pagination: schemas.pagination.isRequired,
  }).isRequired,
  showCartButton: PropTypes.bool,
  showPagination: PropTypes.bool,
  showQuantity: PropTypes.bool,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ProductListContainer.defaultProps = {
  container: {},
  products: [],
};

export default provideTranslations(ProductListContainer);
