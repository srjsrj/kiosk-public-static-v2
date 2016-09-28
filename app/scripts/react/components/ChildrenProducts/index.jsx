import React, { Component, PropTypes } from 'react';
import ChildrenProducts from './ChildrenProducts';
import ProductBlock from 'rc/Product/ProductBlock';

class ChildrenProductsContainer extends Component {
  render() {
    return <ChildrenProducts {...this.props} />;
  }
}

ChildrenProductsContainer.propTypes = {
  childrenProducts: PropTypes.arrayOf(PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape(...ProductBlock.wrapped.propTypes)
    ).isRequired,
    vendorCategoryPath: PropTypes.string.isRequired,
    title: PropTypes.string,
  })).isRequired,
  title: PropTypes.string,
};

ChildrenProductsContainer.defaultProps = {
  childrenProducts: [],
};

export default ChildrenProductsContainer;
