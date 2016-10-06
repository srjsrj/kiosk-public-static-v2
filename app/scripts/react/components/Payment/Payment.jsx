import React, { Component, PropTypes } from 'react';
import provideTranslations from '../HoC/provideTranslations';

class Payment extends Component {
  render() {
    const {
      state,
      vendorUrl,
      t
    } = this.props;

    const cartTitle = state == 'success' ? t('payment.w1.success.title') : t('payment.w1.failure.title');
    const cartMessage = state == 'success' ? t('payment.w1.success.desc') : t('payment.w1.failure.desc');

    return (
      <div className='b-page__content__inner.b-page__content__inner_content'>
        <section className='b-cart'>
          <div className='b-cart__content'>
            <h1 className='b-cart__title'>
              {cartTitle}
            </h1>
            <div className='b-cart__message'>
              <p> {cartMessage} </p>
              <a href={vendorUrl} className='b-btn'>
                {t('order.continue_shopping')}
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Payment.propTypes = {
  state: React.PropTypes.oneOf(['success', 'failure']),
  vendorUrl: PropTypes.string.isRequired,
};

export default provideTranslations(Payment);
