import React, { Component, PropTypes } from 'react';
import schemas from '../../schemas';
import AssetImage from '../common/AssetImage';

class WishlistItem extends Component {
  render() {
    const {
      item,
      isInCart,
      isPrivate,
    } = this.props;

    return (
      <li className="b-cart__item">
        <div className="b-cart__item__col-img">
          <Image />
        </div>
        <div className="b-cart__item__col-content">
          <h2 className="b-cart__item__title">
            <a
              href=""
              target="_blank"
            >
              {item.product.title}
            </a>
          </h2>
          {this.renderGoodDetails()}
        </div>
        <div className="b-cart__item__col-quantity" />
        <div className="b-cart__item__col-price">
          
        </div>
        {isPrivate && (
          <div className="b-cart__item__col-remove">
            <a
              className="b-cart__item__remove"
              data-method="delete"
              href={item.destroy_url}
            >
              <AssetImage src="images/cross_white.svg" />
            </a>
          </div>
        )}
      </li>
    )
    /*
    %li.b-cart__item
      .b-cart__item__col-img
        = image_tag item.good.mandatory_index_image.adjusted_url(width: 143, height: 143), class: 'b-cart__item__img'
      .b-cart__item__col-content
        %h2.b-cart__item__title
          = link_to item.product.title, vendor_product_path(item.product), :target => '_blank'
        = good_details item.good

      .b-cart__item__col-quantity

      .b-cart__item__col-price
        .b-wishlist__item__price
          = wishlist_item_price item

        = wishlist_item_to_cart_button item

      - if is_private
        .b-cart__item__col-remove
          = link_to vendor_wishlist_item_path(item.id, good_id: item.good.global_id), class: 'b-cart__item__remove', method: :delete do
            %img{src: asset_url('images/cross_white.svg'), alt: ''}

    */
  }
}

WishlistItem.propTypes = {
  isInCart: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  item: schemas.wishlistItem,
};

export default WishlistItem;
