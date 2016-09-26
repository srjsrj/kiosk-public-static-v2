import React, { Component, PropTypes } from 'react';
import ProductBlock from 'rc/Product/ProductBlock';
import Pagination from 'rc/Pagination';
import CategoryFilterForm from 'rc/CategoryFilterForm';
import * as schemas from 'r/schemas';

class ProductList extends Component {
  render() {
    const {
      container,
      products: {
        items,
        pagination,
      },
      showCartButton,
      showPagination,
      showQuantity,
      t,
      title,
    } = this.props;

    return (
      <section className="b-item-list b-item-list_catalog">
        <CategoryFilterForm />
        {title && (
          <h1 className="b-item-list__title">
            {title}
          </h1>
        )}
        {(container && container.image) && (
          <div className="b-slider b-slider_promo">
            <div className="b-slider__item">
              <Image
                className="b-container-image"
                image={container.image}
                maxWidth={1000}
              />
            </div>
          </div>
        )}
        {(container && container.description) && (
          <div className="b-item-list__description">
            <div className="b-page__content__inner_content">
              {container.description}
            </div>
          </div>
        )}
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
            <div className="b-item-list__paginator">
              <Pagination {...pagination} />
            </div>
          )}
        </div>
        {(container && container.bottom_text) && (
          <div className="b-item-list__description">
            <div className="b-page__content__inner_content">
              {container.bottom_text}
            </div>
          </div>
        )}
      </section>
    );

    /*
    def container_image(container)
      return unless container.image.present?
      content_tag :div, class: 'b-slider b-slider_promo' do
        content_tag :div, class: 'b-slider__item' do
          image_tag container.image.adjusted_url(width: 1000, filters: ['no_upscale()']), class: 'b-container-image'
        end
      end
    end
    */
  }
}

ProductList.propTypes = {
  container: {
    image: schemas.image,
    description: PropTypes.string,
    bottom_text: PropTypes.string,
  },
  products: PropTypes.shape({
    items: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
  }).isRequired,
  showCartButton: PropTypes.bool,
  showPagination: PropTypes.bool,
  showQuantity: PropTypes.bool,
  t: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ProductList;
