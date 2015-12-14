import React, { Component, PropTypes } from 'react';

class CheckoutActions extends Component {
  render() {
    return (
      <div className="b-cart__action">
        <div className="b-cart__action__container">
          <div className="b-cart__action__col-back">
            <a
              className="b-btn b-btn_trans b-cart__action__clear"
              href="/cart"
            >
              Вернуться назад
            </a>
          </div>
          <div className="b-cart__action__col-submit">
            <input
              className="b-btn b-cart__action__next"
              type="submit"
              value="Продолжить"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutActions;