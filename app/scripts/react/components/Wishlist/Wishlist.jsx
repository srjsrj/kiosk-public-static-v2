import React, { Component, PropTypes } from 'react';

class Wishlist extends Component {
  render() {
    /*
    %section.b-cart
      .b-cart__content
        - if is_private
          %h1.b-cart__title= vt('wishlist.private_title')
        - else
          %h1.b-cart__title= vt('wishlist.foreign_title')

        - if wishlist_items.any?
          %ul.b-cart__list
            = render partial: 'item', collection: wishlist_items, locals: { is_private: is_private }

        - else
          .b-text.b-text_center
            %p
              = vt('wishlist.empty')
  */
  }
}

export default Wishlist;
