import React, { Component, PropTypes } from 'react';
import Checkout from '../Checkout';
import CartTitle from './CartTitle';

class Cart extends Component {
  render() {
    const {
      deliveryTypes, fields, formAuthenticity, paymentMethods, coupon, totalCount, totalPrice,
    } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <CartTitle totalCount={totalCount} totalPrice={totalPrice} />
          <Checkout
            deliveryTypes={deliveryTypes}
            fields={fields}
            formAuthenticity={formAuthenticity}
            paymentMethods={paymentMethods}
            coupon={coupon}
          />
        </div>
      </section>
    );
  }
}

Cart.propTypes = {
  deliveryTypes: PropTypes.array,
  fields: PropTypes.array,
  formAuthenticity: PropTypes.object,
  paymentMethods: PropTypes.array,
  coupon: PropTypes.object,
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.object.isRequired,
};
Cart.defaultProps = {
  deliveryTypes: [],
  fields: [],
  paymentMethods: [],
};

export default Cart;

// %section.b-cart
//           .b-cart__content
//             %h1.b-cart__title Оформление заказа.
//               %strong 5 товаров
//               на сумму
//               %strong{checkout-total: true, data-products-price: 16000, data-delivery-price: 0} 16 000 руб.

//             %form{"accept-charset" => "UTF-8", :action => "/order", :method => "post", :novalidate => "novalidate"}
//               %div{:style => "display:none"}
//                 %input{:name => "utf8", :type => "hidden", :value => "✓"}/
//                 %input{:name => "authenticity_token", :type => "hidden", :value => "oBDbmcDA0JU1rJJfqNAVU8YSF425ggRQQu4MuZ8em+c="}

//               .b-cart__form.b-form
//                 .b-alert.b-alert_danger Обнаружены ошибки, пожалуйста, взгляните на них
//                 .b-cart__form__inner
//                   .b-form__row.b-cart__form__data-row
//                     .b-form__row__num 1
//                     .b-form__row__content
//                       .b-form__row__title
//                         Выберите тип доставки. Ваш город
//                         %strong Москва
//                       .b-form__row__widget
//                         %span.b-form__radio
//                           %label{:for => "vendor_order_delivery_type_id_1", :name => "vendor_order[delivery_type_id]"}
//                             %input#vendor_order_delivery_type_id_1.radio_buttons.required.form-control{:name => "vendor_order[delivery_type_id]", :type => "radio", :value => "1", data-delivery-price: 600, delivery-type: true, data-delivery-only-city: 'Москва', data-show-fields: 'courier-moscow'}>
//                             .b-cart__form__delivery-name Курьером по Москве или Области
//                             .b-cart__form__delivery-price 600 рублей
//                       .b-form__row__widget
//                         %span.b-form__radio
//                           %label{:for => "vendor_order_delivery_type_id_2", :name => "vendor_order[delivery_type_id]"}
//                             %input#vendor_order_delivery_type_id_2.radio_buttons.required.form-control{:name => "vendor_order[delivery_type_id]", :type => "radio", :value => "2", data-delivery-price: 0, delivery-type: true, 'checked': 'checked'}>
//                             .b-cart__form__delivery-name Самовывоз
//                             .b-cart__form__delivery-price 0 рублей
//                       .b-form__row__widget
//                         %span.b-form__radio
//                           %label{:for => "vendor_order_delivery_type_id_3", :name => "vendor_order[delivery_type_id]"}
//                             %input#vendor_order_delivery_type_id_3.radio_buttons.required.form-control{:name => "vendor_order[delivery_type_id]", :type => "radio", :value => "3", data-delivery-price: 200, delivery-type: true, data-show-fields: 'courier-region'}>
//                             .b-cart__form__delivery-name Курьером в Регионы
//                             .b-cart__form__delivery-price 200 рублей

//                   .b-form__row.b-cart__form__data-row
//                     .b-form__row__num 2
//                     .b-form__row__content
//                       .b-form__row__title Введите данные
//                       .b-form__row__widget
//                         .b-form__row__widget.string.required.vendor_order_phone.has-error
//                           %label.string.required.control-label{:for => "vendor_order_phone"} Телефон
//                           %input#vendor_order_phone.string.required.form-control{:name => "vendor_order[phone]", :placeholder => "Прим.: +7 913 123 32 10", :type => "text"}
//                           .b-alert.b-alert_danger Неверный формат телефона
//                         .b-form__row__widget.string.required.vendor_order_name
//                           %label.string.required.control-label{:for => "vendor_order_name"} Как к вам обращаться?
//                           %input#vendor_order_name.string.required.form-control{:name => "vendor_order[name]", :placeholder => "Как к вам обращаться", :type => "text"}
//                         %div{data: {react-class: 'OrderCoupon'}}
//                         / .b-form__row__widget
//                         /   .form-group.string.optional.vendor_order_coupon_code
//                         /     %label.string.optional.control-label{for: "vendor_order_coupon_code"}
//                         /       Промокод
//                         /     %input.string.optional.form-control#vendor_order_coupon_code{name: "vendor_order[coupon_code]", type: "text", value: ""}
//                         /   .coupon-info.alert.alert-info
//                         /     Купон "k" НЕ действующий
//                         .b-form__row__widget.select.required.vendor_order_city_id{show-courier-moscow: true, show-courier-region: true, hideable: true}
//                           %label.select.required.control-label{:for => "vendor_order_city_id"} Город доставки
//                           %input#vendor_order_name.string.required.form-control{:name => "vendor_order[city_title]", :placeholder => "Город", :type => "text", 'city-field' => true}

//                   .b-form__row.b-cart__form__data-row
//                     .b-form__row__num 3
//                     .b-form__row__content
//                       / .b-alert.b-alert_danger Обнаружены ошибки, пожалуйста, взгляните на них
//                       .b-form__row__title Способы оплаты
//                       .b-form__row__widget
//                         %span.b-form__radio
//                           %label{:for => "vendor_order_payment_type_id_1", :name => "vendor_order[payment_type_id]"}
//                             %input#vendor_order_payment_type_id_1.radio_buttons.required.form-control{:name => "vendor_order[payment_type_id]", :type => "radio", :value => "1"}>
//                             Банковской картой на сайте
//                       .b-form__row__widget
//                         %span.b-form__radio
//                           %label{:for => "vendor_order_payment_type_id_2", :name => "vendor_order[payment_type_id]"}
//                             %input#vendor_order_payment_type_id_2.radio_buttons.required.form-control{:name => "vendor_order[payment_type_id]", :type => "radio", :value => "2"}>
//                             Через ближайший салон связи
//                       .b-form__row__widget
//                         %span.b-form__radio{show-courier-moscow: true, hideable: true}
//                           %label{:for => "vendor_order_payment_type_id_3", :name => "vendor_order[payment_type_id]"}
//                             %input#vendor_order_payment_type_id_3.radio_buttons.required.form-control{:name => "vendor_order[payment_type_id]", :type => "radio", :value => "3"}>
//                             Наличными или банковской картой курьеру

//                 .b-form__row
//                   .b-cart__action
//                     .b-cart__action__container
//                       .b-cart__action__col-back
//                         %a.b-cart__action__clear.b-btn.b-btn_trans{href: 'welcome.html'}
//                           Вернуться назад

//                       .b-cart__action__col-submit
//                         %button.b-cart__action__submit.b-btn{type: 'submit', :name => "commit", :type => "submit"} Продолжить