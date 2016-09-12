import React, { Component, PropTypes } from 'react';
import { CartCoupon } from './CartCoupon';
import CartList from './CartList';
import FormAuthenticity from '../common/FormAuthenticity';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class Cart extends Component {
  renderErrors() {
    const {
      cartErrors,
    } = this.props;

    return (
      <span className="help-block">
        {Object.keys(cartErrors).map((key) => (
          cartErrors[key].map((err, idx) => (
            <div key={`cart-error-${key}-${idx}`}>
              {err}
            </div>
          ))
        ))}
      </span>
    );
  }
  render() {
    const {
      cartDefaultUrl,
      cartErrors,
      cartItems,
      couponCode,
      formAuthenticity,
      packageItem,
      packages,
      t,
      totalSum,
    } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <h1 className="b-cart__title" title={t('vendor.cart.title')}>
            {t('vendor.cart.title')}
          </h1>
          {cartItems.length === 0
            ? (
              <div className="b-text b-text_center">
                <p>
                  {t('vendor.cart.empty')}
                </p>
              </div>
            )
            : (
            <form
              acceptCharset="UTF-8"
              action={cartDefaultUrl}
              className="simple_form edit_cart"
              id="edit_cart"
              method="post"
              noValidate
            >
              <FormAuthenticity {...formAuthenticity} />
              {Object.keys(cartErrors).length > 0 && this.renderErrors()}
              <CartList
                items={cartItems}
                packageItem={packageItem}
                packages={packages}
                t={t}
              />
              <div className="b-cart__total-sum">
                {t('vendor.cart.overall')}
                {' '}
                <span>
                  <HumanizedMoneyWithCurrency money={totalSum} />
                </span>
              </div>
              <div className="b-cart__action">
                <div className="b-cart__action__container">
                  <div className="b-cart__action__col-clear">
                    <a
                      className="b-cart__action__clear b-btn b-btn_trans"
                      data-confirm={t('vendor.alerts.confirm')}
                      data-method="delete"
                      href={cartDefaultUrl}
                    >
                      {t('vendor.cart.clear')}
                    </a>
                  </div>
                  <div className="b-cart__action__col-right">
                    <CartCoupon code={couponCode} t={t} />
                    <div className="b-cart__action__col-submit">
                      <input
                        className="b-cart__action__submit b-btn"
                        data-cart-submit
                        name="commit"
                        type="submit"
                        value={t('vendor.order.submit')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            )
          }
        </div>
      </section>
    );
  }
}

Cart.propTypes = {
  cartDefaultUrl: PropTypes.string.isRequired,
  cartErrors: PropTypes.object.isRequired,
  cartIsFetching: PropTypes.bool.isRequired,
  cartItems: PropTypes.object.isRequired,
  couponCode: PropTypes.string,
  formAuthenticity: PropTypes.object,
  packages: PropTypes.array.isRequired,
  packageItem: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  totalSum: PropTypes.number.isRequired,
};

export default Cart;
