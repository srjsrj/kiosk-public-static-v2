import React, { Component, PropTypes } from 'react';

class CartList extends Component {
  render() {
    return (
      <ul className="b-cart__list">
      </ul>
    );
  }
}

CartList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartList;

/*
%ul.b-cart__list
  = render partial: 'item', collection: CartItemDecorator.decorate_collection(cart_form.items), locals: { f: f}

  - if cart.package_item.present?
    = render 'packaging_item', item: CartItemDecorator.decorate(cart.package_item)

  - elsif available_packages.any?
    = render partial: 'packaging', locals: {f: f, packages: available_packages }
*/