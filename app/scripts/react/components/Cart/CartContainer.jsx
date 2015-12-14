import React, { Component, PropTypes } from 'react';
import Cart from './Cart';

class CartContainer extends Component {
  constructor(props) {
    super(props);
    const { cart: { totalCount, totalPrice}, deliveryTypes } = props;
    const delivery = deliveryTypes.length ? deliveryTypes[0] : null;

    this.state = {
      totalCount,
      ...this.setDelivery(totalPrice, delivery),
    };

    this.changeDelivery = this.changeDelivery.bind(this);
  }
  setDelivery(totalPrice, delivery) {
    return {
      currentDelivery: delivery,
      totalPrice: {
        ...totalPrice,
        cents: totalPrice.cents + delivery.price.cents,
      },
    };
  }
  changeDelivery(delivery) {
    const { cart: {totalPrice} } = this.props;

    this.setState(this.setDelivery(totalPrice, delivery));
  }
  render() {
    const { deliveryTypes, fields, formAuthenticity, paymentMethods, coupon } = this.props;
    const { currentDelivery, totalCount, totalPrice } = this.state;

    return (
      <Cart
        coupon={coupon}
        currentDelivery={currentDelivery}
        deliveryTypes={deliveryTypes}
        fields={fields}
        formAuthenticity={formAuthenticity}
        onDeliveryChange={this.changeDelivery}
        paymentMethods={paymentMethods}
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
  cents: 170000,
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
      requiredFields: ['name'],
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






// $ ->
//   $checkoutTotal = $ '[checkout-total]'

//   setCheckoutDeliveryPrice = ($e)->
//     deliveryPrice = parseInt $e.data('delivery-price')
//     freeDeliveryThreshold = parseInt $e.data('free-delivery-threshold')
//     productsPrice = parseInt $checkoutTotal.data('products-price')
//     price = if productsPrice > freeDeliveryThreshold then 0 else deliveryPrice

//     $checkoutTotal.data 'delivery-price', price
//     updateCheckoutTotal()

//   updateCheckoutTotal = ->
//     totalPrice = $checkoutTotal.data('delivery-price') + $checkoutTotal.data('products-price')

//     $checkoutTotal.html accounting.formatMoney totalPrice

//   toggleDeliveryOnlyElementsVisibility = (showFieldsQuery) ->
//     $('[hideable]').slideUp()

//     if showFieldsQuery
//       $el = $ showFieldsQuery
//       $el.stop().slideDown()

//   setCity = (city) ->
//     $c = $ '[city-field]'
//     if city? && city.length
//       $c.attr(disabled: true)
//       $c.val city
//     else
//       $c.val '' if $c.is(':disabled')
//       $c.removeAttr('disabled')

//   selectDeliveryType = ($e) ->
//     if $e?
//       setCity $e.data('city')
//       setCheckoutDeliveryPrice $e

//       toggleDeliveryOnlyElementsVisibility $e.data('show-fields-query')
//     else
//       console.error? 'Ни один способ доставки по умолчанию не выбран'

//   $('[delivery-type]').on 'change', ->
//     selectDeliveryType $ @

//   findSelectedDeliveryType= ->
//     $el = $('[delivery-type]').filter(':checked')
//     if $el.length==0
//       return null
//     else
//       return $el

//   window.InitializeCheckout = ->
//     console.log 'Initialize Checkout'
//     selectDeliveryType findSelectedDeliveryType()

