import React, { Component, PropTypes } from 'react';
import Cart from './Cart';

class CartContainer extends Component {
  state = {
    totalCount: this.props.cart.totalCount,
    totalPrice: this.props.cart.totalPrice,
  }
  render() {
    const { deliveryTypes, fields, formAuthenticity, paymentMethods, coupon } = this.props;
    const { totalCount, totalPrice } = this.state;

    return (
      <Cart
        deliveryTypes={deliveryTypes}
        fields={fields}
        formAuthenticity={formAuthenticity}
        paymentMethods={paymentMethods}
        coupon={coupon}
        totalCount={totalCount}
        totalPrice={totalPrice}
      />
    );
  }
}

CartContainer.propTypes = {
  deliveryTypes: PropTypes.array.isRequired,
  formAuthenticity: PropTypes.object,
  itemsInfo: PropTypes.object,
  paymentMethods: PropTypes.array,
};

const samplePrice = {
  cents: 140000,
  currency_iso_code: 'RUB',
};
const samplePrice2 = {
  cents: 140000,
  currency_iso_code: 'RUB',
};

CartContainer.defaultProps = {
  formAuthenticity: {
    token: 'U9pqrQGs/+7Ht9qSAjOLpsN18IL6EJyPNSfJu45oLT4=',
    field: 'authenticity_token',
  },
  cart: {
    totalCount: 2,
    totalPrice: samplePrice,
  },
  deliveryTypes: [
    {
      id: 123,
      title: 'Доставка',
      description: 'Супер доставка',
      price: samplePrice,
      fields: ['name', 'address'],
      requiredFields: ['name', 'address'],
      availablePayments: [12, 13],
      cityTitle: 'Москва',
    },
    {
      id: 456,
      title: 'Доставка 2',
      description: 'Супер доставка 2',
      price: samplePrice2,
      fields: ['name', 'address'],
      requiredFields: ['name', 'address'],
      availablePayments: [12],
      cityTitle: 'Санкт-Петербург', 
    },
  ],
  fields: [
    {
      id: 20,
      fieldName: 'name',
      type: 'string',
      value: '',
      title: 'Имя',
      placeholder: 'Иван',
    },
    {
      id: 30,
      fieldName: 'address',
      type: 'textarea',
      value: '',
      title: 'Адрес доставки',
      placeholder: 'Например, Академика Вавилова 12-10',
    },
  ],
  paymentMethods: [
    {
      id: 12,
      title: 'Оплата банковской картой, через терминал или салон связи',
      description: 'Безопасная оплата любым удобным способом',
    },
    {
      id: 13,
      title: 'Наличные при получении',
      description: '',
    },
  ],
  coupon: {
    show: true,
    value: 'IRA10',
  },
};

export default CartContainer;