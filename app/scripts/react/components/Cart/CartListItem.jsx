import React, { Component, PropTypes } from 'react';
import { Image } from '../common/Image';

class CartListItem extends Component {
  render() {
    const {
      item,
    } = this.props;

    return (
      <li className="b-cart__item">
        <div className="b-cant__item__col-img">
          <Image
            image={{ url: item.image }}
            maxHeight={143}
            maxWidth={143}
          />
        </div>
      </li>
    );
  }
}

CartListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartListItem;


/*

%li.b-cart__item{'cart-item' => item.id, 'data-item-weight-of-price' => item.cart_item.model.weight_of_price, 'data-item-price' => item.price, 'data-item-total-price' => item.source.total_price }
  .b-cart__item__col-img
    = image_tag item.image.adjusted_url( width: 143, height: 143), class: 'b-cart__item__img'
  .b-cart__item__col-content
    %h2.b-cart__item__title
      = link_to item.title, vendor_product_path(item.product), :target => '_blank'
    = good_details item.good

    - unless item.valid?
      .b-alert.b-alert_danger
        - item.errors.each do |key, value|
          %p= item.errors.messages[key].join(',') if value.present?

  - if item.cart_item.model.weight.present?
    .b-cart__item__col-weight
      - if item.good.has_ordering_goods
        %span.b-cart__item__weight__text
          = vt('cart.weight')
        .b-cart__item__quantity__input
          = number_field_tag "cart[items][#{item.id}][weight]", item.cart_item.model.weight, {'step'=>'0.01', 'cart-item-weight' => 'basic'}
      - else
        %button.b-btn{disabled: true}
          = vt('cart.not_available')
  - else
    .b-cart__item__col-quantity
      - if item.good.has_ordering_goods
        %span.b-cart__item__quantity__text
          = vt('cart.amount')
        .b-cart__item__quantity__select
          = select_tag "cart[items][#{item.id}][count]",
            amount_collection(item),
            {'cart-item-selector' => 'basic'}
      - else
        %button.b-btn{disabled: true}
          = vt('cart.not_available')

  .b-cart__item__col-price
    .b-cart__item__price{'cart-item-total-price' => true, title: item.item_price}
      = item.total_price

  .b-cart__item__col-remove
    = link_to vendor_cart_item_path(item), :class => 'b-cart__item__remove', :method => :delete do
      %img{src: asset_url('images/cross_white.svg'), alt: ''}

*/