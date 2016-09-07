import React, { Component, PropTypes } from 'react';
import { CartCoupon } from './CartCoupon';
import CartList from './CartList';
import FormAuthenticity from '../common/FormAuthenticity';

class Cart extends Component {
  renderErrors(errors) {
    return errors.map((error, idx) => ( 
      <span className="help-block" key={`form-error-${idx}`}>
        {error}
      </span>
    ));
  }
  render() {
    const {
      availablePackageItems,
      cart,
      errorMessages,
      formAuthenticity,
      t,
      vendorCartPath,
    } = this.props;

    return (
      <section className="b-cart">
      <div className="b-cart__content">
        <h1 className="b-cart__title" title={t('vendor.cart.title')}>
          {t('vendor.cart.title')}
        </h1>
        {cart.items.length === 0 
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
              action={vendorCartPath}
              className="simple_form edit_cart"
              id="edit_cart"
              method="POST"
              noValidate
            >
              <FormAuthenticity {...formAuthenticity} />
              {errorMessages.length > 0 && this.renderErrors(errorMessages)}
              <CartList 
                availablePackageItems={availablePackageItems}
                items={cart.items}
                packageItem={cart.package_item} 
              />
              <div className="b-cart__total-sum">
                {t('vendor.cart.overall')}
                <span>
                  {cart.total_price}
                </span>
              </div>
              <div className="b-cart__action">
                <div className="b-cart__action__container">
                  <div className="b-cart__action__col-clear">
                    <a
                      className="b-cart__action__clear b-btn b-btn_trans"
                      data-confirm={t('vendor.alerts.confirm')}
                      data-method="delete"
                      href={vendorCartPath}
                    >
                      {t('vendor.cart.clear')}
                    </a>
                  </div>
                  <div className="b-cart__action__col-right">
                    <CartCoupon code={cart.coupon_code} t={t} />
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
  availablePackageItems: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  errorMessages: PropTypes.array.isRequired,
  formAuthenticity: PropTypes.object,
  t: PropTypes.func.isRequired,
  vendorCartPath: PropTypes.string.isRequired,
};

export default Cart;

