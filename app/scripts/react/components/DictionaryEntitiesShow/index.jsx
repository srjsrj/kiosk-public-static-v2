import React, { Component, PropTypes } from 'react';
import ProductList from 'rc/ProductList';
import DictionaryEntitiesShow from './DictionaryEntitiesShow';
import provideTranslations from 'rc/HoC/provideTranslations';

class DictionaryEntitiesShowContainer extends Component {
  render() {
    return <DictionaryEntitiesShow {...this.props} />;
  }
}

DictionaryEntitiesShowContainer.propTypes = {
  entity: ProductList.wrapped.propTypes.container,
  products: ProductList.wrapped.propTypes.products,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
  vendorRootPath: PropTypes.string,
};

DictionaryEntitiesShowContainer.defaultProps = {
  entity: {},
  products: {
    items: [],
    pagination: {},
  },
  vendorRootPath: '',
};

export default provideTranslations(DictionaryEntitiesShowContainer);
