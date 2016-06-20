import React, { Component, PropTypes } from 'react';
import Bubble from '../Bubble';

class CartButton extends Component {
  render() {
    const { cartItems, text, url } = this.props;
    const itemsCount = cartItems.length;

    return (
      <Bubble
        className="Bubble--cart element--active-opacity"
        count={itemsCount}
        data={['cart-button']}
        text={text}
        url={url}
      />
    );
  }
}

export default CartButton;
