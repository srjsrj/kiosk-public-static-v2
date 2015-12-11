import React, { Component, PropTypes } from 'react';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class CartCheckoutRadioList extends Component {
  render() {
    const { items, onChange } = this.props;

    return (
      <span>
        {items.map(
          (item) => 
            <div className="b-form__row__widget">
              <span className="b-form__radio">
                <label>
                  <input
                    className="form-control radio_buttons"
                    name={`vendor_order[${item.field_name}]`}
                    type="radio"
                    value={item.value}
                  />
                  <div className="b-cart__form__delivery-name">
                    {item.title}
                  </div>
                  <div className="b-cart__form__delivery-price">
                    <HumanizedMoneyWithCurrency money={item.price} />
                  </div>
                  <div class="cart__form__delivery-address">
                    {item.delivery_address}
                  </div>
                </label>
              </span>
            </div>
          )
        }
      </span>
    );
  }
}

CartCheckoutRadioList.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CartCheckoutRadioList;




// <div class="">
// <div class="b-form__row__widget">
// <span class="b-form__radio">
// <label for="vendor_order_delivery_type_id_110" name="vendor_order[delivery_type_id]">
// <input checked="" class="radio_buttons required form-control" data-city="Москва" data-delivery-price="230" data-free-delivery-threshold="10000" data-show-fields-query="[data-paymentId=&quot;69&quot;], [data-paymentId=&quot;105&quot;], [address], [city]" delivery-type="" id="vendor_order_delivery_type_id_110" name="vendor_order[delivery_type_id]" type="radio" value="110">
// <div class="b-cart__form__delivery-name">Москва – доставка курьером (2-3 дня)</div>
// <div class="b-cart__form__delivery-price">230 руб.</div>
// <div class="cart__form__delivery-address">
// Бесплатно при заказе свыше <nobr>10 000 руб.</nobr>
// </div>
// </label>
// </span>
// </div>
// <div class="b-form__row__widget">
// <span class="b-form__radio">
// <label for="vendor_order_delivery_type_id_177" name="vendor_order[delivery_type_id]">
// <input class="radio_buttons required form-control" data-city="Санкт-Петербург" data-delivery-price="280" data-free-delivery-threshold="10000" data-show-fields-query="[data-paymentId=&quot;105&quot;], [address], [city]" delivery-type="" id="vendor_order_delivery_type_id_177" name="vendor_order[delivery_type_id]" type="radio" value="177">
// <div class="b-cart__form__delivery-name">Санкт-Петербург - доставка курьером (3-4 дня)</div>
// <div class="b-cart__form__delivery-price">280 руб.</div>
// <div class="cart__form__delivery-address">
// Бесплатно при заказе свыше <nobr>10 000 руб.</nobr>
// </div>
// </label>
// </span>
// </div>
// <div class="b-form__row__widget">
// <span class="b-form__radio">
// <label for="vendor_order_delivery_type_id_111" name="vendor_order[delivery_type_id]">
// <input class="radio_buttons required form-control" data-city="" data-delivery-price="500" data-free-delivery-threshold="10000" data-show-fields-query="[data-paymentId=&quot;105&quot;], [address], [city]" delivery-type="" id="vendor_order_delivery_type_id_111" name="vendor_order[delivery_type_id]" type="radio" value="111">
// <div class="b-cart__form__delivery-name">Регионы – доставка курьером (от 3-8 рабочих дней в зависимости от региона )</div>
// <div class="b-cart__form__delivery-price">500 руб.</div>
// <div class="cart__form__delivery-address">
// Бесплатно при заказе свыше <nobr>10 000 руб.</nobr>
// </div>
// </label>
// </span>
// </div>
// <div class="b-form__row__widget">
// <span class="b-form__radio">
// <label for="vendor_order_delivery_type_id_910" name="vendor_order[delivery_type_id]">
// <input class="radio_buttons required form-control" data-city="Москва" data-delivery-price="460" data-free-delivery-threshold="0" data-show-fields-query="[data-paymentId=&quot;69&quot;], [data-paymentId=&quot;105&quot;], [address], [city]" delivery-type="" id="vendor_order_delivery_type_id_910" name="vendor_order[delivery_type_id]" type="radio" value="910">
// <div class="b-cart__form__delivery-name">Срочная доставка</div>
// <div class="b-cart__form__delivery-price">460 руб.</div>
// <div class="cart__form__delivery-address">
// <p>Срочная доставка. Доставка в течение трех часов с момента подтверждения заказа оператором магазина, доставка осуществляется в пределах МКАД. Только в будние дни. Предоплата или наличные курьеру при получении.</p>
// </div>
// </label>
// </span>
// </div>
// <div class="b-form__row__widget">
// <span class="b-form__radio">
// <label for="vendor_order_delivery_type_id_69" name="vendor_order[delivery_type_id]">
// <input class="radio_buttons required form-control" data-city="" data-delivery-price="0" data-free-delivery-threshold="0" data-show-fields-query="[data-paymentId=&quot;69&quot;], [data-paymentId=&quot;105&quot;]" delivery-type="" id="vendor_order_delivery_type_id_69" name="vendor_order[delivery_type_id]" type="radio" value="69">
// <div class="b-cart__form__delivery-name">Самовывоз</div>
// <div class="b-cart__form__delivery-price">-</div>
// <div class="cart__form__delivery-address">
// <p>г. Москва, Б. Никитская, 35, код #423
// <br>Время работы: пн-пт 11:00-20:00, сб 11:00-17:00</p>

// <p>Срок бронирования украшения - 3 дня.</p>
// </div>
// </label>
// </span>
// </div>
// </div>