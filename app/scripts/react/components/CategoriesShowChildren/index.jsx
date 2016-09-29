import React, { Component, PropTypes } from 'react';
import ChildrenProducts from 'rc/ChildrenProducts';
import CategoriesShowChildren from './CategoriesShowChildren';
import provideTranslations from 'rc/HoC/provideTranslations';

class CategoriesShowChildrenContainer extends Component {
  render() {
    return <CategoriesShowChildren {...this.props} />;
  }
}

CategoriesShowChildrenContainer.propTypes = {
  childrenProducts: ChildrenProducts.propTypes.childrenProducts,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
  vendorRootPath: PropTypes.string,
};

CategoriesShowChildrenContainer.defaultProps = {
  childrenProducts: [],
  vendorRootPath: '',
};

export default provideTranslations(CategoriesShowChildrenContainer);
