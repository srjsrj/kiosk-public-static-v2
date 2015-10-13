import React, { PropTypes } from 'react';

export default class ProductCartAddButton {
  render() {
    return (
      <button
        className="b-btn element--active-opacity"
        data-disable-with="Добавляем..."
        name="to_cart"
        type="submit"
      >
        В корзину
      </button>
    );
  }
}