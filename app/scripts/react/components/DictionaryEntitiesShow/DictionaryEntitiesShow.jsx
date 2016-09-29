import React, { Component, PropTypes } from 'react';
import ProductList from 'rc/ProductList/ProductList';

class DictionaryEntitiesShow extends Component {
  render() {
    const {
      entity,
      products,
      t,
      title,
      vendorRootPath,
    } = this.props;

    return products.items.length
      ? (
        <ProductList
          container={entity}
          products={products}
          showPagination
          title={title}
        />
      )
      : (
        <div className="b-text b-text_center">
          <p>
            {t('vendor.dictionary_entity.empty')}
          </p>
          <a className="b-btn" href={vendorRootPath}>
            {t('vendor.dictionary_entity.continue_shopping')}
          </a>
        </div>
      );
  }
}

DictionaryEntitiesShow.propTypes = {
  entity: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
  vendorRootPath: PropTypes.string,
};

export default DictionaryEntitiesShow;
