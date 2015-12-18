import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import * as schemas from '../../schemas';
import CheckoutPublicOffer from './CheckoutPublicOffer';

class CheckoutActions extends Component {
  render() {
    const { backUrl, publicOffer } = this.props;

    return (
      <div className="b-cart__action">
        {publicOffer && publicOffer.show
          ? <CheckoutPublicOffer url={publicOffer.url} />
          : null
        }
        <div className="b-cart__action__container">
          <div className="b-cart__action__col-back">
            <a
              className="b-btn b-btn_trans b-cart__action__clear"
              href={backUrl}
            >
              {t('vendor.order.go_back')}
            </a>
          </div>
          <div className="b-cart__action__col-submit">
            <input
              className="b-btn b-cart__action__next"
              type="submit"
              value={t('vendor.order.next')}
            />
          </div>
        </div>
      </div>
    );
  }
}

CheckoutActions.propTypes = {
  backUrl: PropTypes.string.isRequired,
  publicOffer: schemas.checkoutPublicOffer,
};

export default CheckoutActions;