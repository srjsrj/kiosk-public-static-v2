import React, { Component, PropTypes } from 'react';

class WishlistItem extends Component {
  render() {
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

export default WishlistItem;
