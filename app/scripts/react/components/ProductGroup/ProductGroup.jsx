import React, { Component, PropTypes } from 'react';
import ProductBlock from 'rc/Product/ProductBlock';

class ProductGroup extends Component {
  render() {
    const {
      i18n,
      products: {
        items,
      },
      showCartButton,
      showQuantity,
      t,
      title,
      vendorCategoryPath,
    } = this.props;

    return (
      <section className="b-item-list b-item-list_catalog">
        {title && (
          <h2>
            <a href={vendorCategoryPath}>
              {title}
            </a>
          </h2>
        )}
        <div className="b-item-list__content">
          {items.map((item) => (
            <ProductBlock
              i18n={i18n}
              key={`product-block-${item.id}`}
              product={item}
              showCartButton={showCartButton}
              showQuantity={showQuantity}
            />
          ))}
        </div>
        <div className="b-page__content__inner">
          <a href={vendorCategoryPath}>
            {t('vendor.products.others')}
          </a>
        </div>
      </section>
    );
  }
}

ProductGroup.propTypes = {
  i18n: PropTypes.object,
  products: PropTypes.object.isRequired,
  showCartButton: PropTypes.bool.isRequired,
  showQuantity: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
  vendorCategoryPath: PropTypes.string.isRequired,
};

export default ProductGroup;
