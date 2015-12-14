import React, { Component, PropTypes } from 'react';

const STRING_TYPE = 'string';
const TEXTAREA_TYPE = 'textarea';

// {
//   fieldName: 'name',
//   type: 'string',
//   value: '',
//   title: 'Имя',
//   placeholder: 'Иван',
// }

class CheckoutFields extends Component {
  renderItem(item) {
    const { currentDelivery } = this.props;
    const itemID = `vendor_order_${item.fieldName}`;
    const itemName = `vendor_order[${item.fieldName}]`;
    const itemRequired = currentDelivery
      ? currentDelivery.requiredFields.indexOf(item.fieldName) > -1
      : false;
    let itemContent;

    switch(item.type) {
      case STRING_TYPE:
        itemContent = (
          <div className="form-group string">
            <label
              className="string control-label"
              htmlFor={itemID}
            >
              {item.title} {itemRequired && '*'}
            </label>
            <input
              className="string form-control"
              id={itemID}
              name={itemName}
              placeholder={item.placeholder}
              type="text"
            />
          </div>
        );
        break;
      case TEXTAREA_TYPE:
        itemContent = (
          <div className="form-group text">
            <label
              className="text control-label"
              htmlFor={itemID}
            >
              {item.title} {itemRequired && '*'}
            </label>
            <textarea
              className="text form-control"
              id={itemID}
              name={itemName}
              placeholder={item.placeholder}
            />
          </div>
        );
        break;
      default:
        itemContent = null;
    }

    return (
      <div className="b-form__row__widget" key={item.id}>
        {itemContent}
      </div>
    );
  }
  render() {
    const { currentDelivery, items } = this.props;

    return (
      <span>
        {items
          .filter(item => {
            if (currentDelivery) {
              return currentDelivery.fields.indexOf(item.fieldName) > -1;
            }
            return true;
          })
          .map(item => this.renderItem(item))
        }
      </span>
    );
  }
}

CheckoutFields.propTypes = {
  currentDelivery: PropTypes.object,
  items: PropTypes.array,
};
CheckoutFields.defaultProps = {
  items: [],
};

export default CheckoutFields;





// <div class="b-form__row__widget">
// <div class="b-form__row__widget">
// <div class="form-group string optional vendor_order_phone"><label class="string optional control-label" for="vendor_order_phone">Телефон</label><input class="string optional form-control" id="vendor_order_phone" name="vendor_order[phone]" placeholder="Например, +7 913 123 32 10" type="text"></div>
// </div>
// <div class="b-form__row__widget">
// <div class="form-group string optional vendor_order_name"><label class="string optional control-label" for="vendor_order_name">Полное имя</label><input class="string optional form-control" id="vendor_order_name" name="vendor_order[name]" placeholder="Ф.И.О." type="text"></div>
// </div>
// <div class="b-form__row__widget">
// <div class="form-group email optional vendor_order_email"><label class="email optional control-label" for="vendor_order_email">Email</label><input class="string email optional form-control" id="vendor_order_email" name="vendor_order[email]" placeholder="Email" type="email"></div>
// </div>
// <div class="b-form__row__widget">
// <div city="true" class="form-group string optional vendor_order_city_title" hideable="true" style="height: 73px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;"><label class="string optional control-label" for="vendor_order_city_title">Город доставки</label><input city-field="true" class="string optional form-control" id="vendor_order_city_title" name="vendor_order[city_title]" placeholder="Москва" type="text" value="Москва" disabled="disabled"></div>
// </div>
// <div class="b-form__row__widget">
// <div address="true" class="form-group text optional vendor_order_address" hideable="true" style="height: 98px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px;"><label class="text optional control-label" for="vendor_order_address">Адрес доставки</label><textarea class="text optional form-control" id="vendor_order_address" name="vendor_order[address]" placeholder="Например, Академика Вавилова 12-10"></textarea></div>
// </div>
// <div class="b-form__row__widget">
// <div class="form-group text optional vendor_order_comment"><label class="text optional control-label" for="vendor_order_comment">Желаемое время доставки (для Москвы) и ваши комментарии</label><textarea class="text optional form-control" id="vendor_order_comment" name="vendor_order[comment]" placeholder="О чем нам нужно знать"></textarea></div>
// </div>
// <div class="b-form__row__widget">
// <div data-react-class="OrderCoupon" data-react-props="{&quot;code&quot;:&quot;&quot;,&quot;i18n&quot;:{&quot;locale&quot;:&quot;ru&quot;,&quot;translations&quot;:{&quot;vendor&quot;:{&quot;not_published&quot;:&quot;Магазин временно не работает&quot;,&quot;made_in_kiiiosk&quot;:&quot;Сделано вручную&quot;,&quot;badges&quot;:{&quot;new&quot;:&quot;Новинка&quot;,&quot;sale_percent&quot;:&quot;SALE - %{percent}%&quot;,&quot;not_available&quot;:&quot;Не продается&quot;,&quot;sale&quot;:&quot;SALE&quot;,&quot;sold&quot;:&quot;Продано&quot;},&quot;search&quot;:{&quot;results_title&quot;:&quot;Результаты поиска (%{count})&quot;,&quot;nothing_found&quot;:&quot;К сожалению, ничего не найдено.&quot;},&quot;seconds_count&quot;:&quot;%{count} секунду&quot;,&quot;seconds_count_plural_2&quot;:&quot;%{count} секунды&quot;,&quot;seconds_count_plural_5&quot;:&quot;%{count} секунд&quot;,&quot;errors&quot;:{&quot;cart&quot;:{&quot;empty&quot;:&quot;В корзине нет товаров&quot;},&quot;coupon&quot;:{&quot;not_found&quot;:&quot;Несуществующий промокод %{code}&quot;,&quot;expired&quot;:&quot;Промокод просрочен %{code}&quot;}},&quot;placeholders&quot;:{&quot;coupon&quot;:&quot;Промо-код (если есть)&quot;,&quot;search&quot;:&quot;Поиск&quot;},&quot;alerts&quot;:{&quot;confirm&quot;:&quot;Точно очистить?&quot;},&quot;flashes&quot;:{&quot;good_added_to_basket&quot;:&quot;Товар \&quot;%{title}\&quot; добавлен в корзину&quot;},&quot;mails&quot;:{&quot;signature&quot;:&quot;С уважением, интернет-магазин \&quot;%{name}\&quot;&quot;},&quot;auto_menu_items&quot;:{&quot;blog&quot;:&quot;Блог&quot;},&quot;top_banner&quot;:{&quot;default_content&quot;:&quot;Мы открылись!&quot;},&quot;order&quot;:{&quot;fields&quot;:{&quot;phone&quot;:&quot;Телефон&quot;,&quot;name&quot;:&quot;Полное имя&quot;,&quot;email&quot;:&quot;Email&quot;,&quot;city_title&quot;:&quot;Город доставки&quot;,&quot;address&quot;:&quot;Адрес доставки&quot;,&quot;comment&quot;:&quot;Желаемое время доставки (для Москвы) и ваши комментарии&quot;,&quot;coupon_code&quot;:&quot;Промокод&quot;},&quot;submit&quot;:&quot;Оформить заказ&quot;,&quot;pickup_address&quot;:&quot;Адрес самовывоза:&quot;,&quot;title&quot;:&quot;Заказ №%{number}&quot;,&quot;payment_type&quot;:&quot;Способ оплаты: %{title}&quot;,&quot;delivery_type&quot;:&quot;Способ доставки: %{title}&quot;,&quot;free_delivery_text_html&quot;:&quot;Бесплатная доставка при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e&quot;,&quot;checkout_free_delivery_text_html&quot;:&quot;Бесплатно при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e&quot;,&quot;go_back&quot;:&quot;Вернуться назад&quot;,&quot;next&quot;:&quot;Продолжить&quot;,&quot;delivery_tracking_id&quot;:&quot;Трекинг-номер доставки: %{number}&quot;,&quot;check_state&quot;:&quot;Проверить статус доставки&quot;,&quot;public_offer_accepted_html&quot;:&quot;Согласен с условиями \u003cu\u003e\u003ca href=\&quot;%{url}\&quot; target=\&quot;_blank\&quot;\u003eпубличной оферты\u003c/a\u003e\u003c/u\u003e&quot;,&quot;created&quot;:{&quot;title&quot;:&quot;Спасибо за заказ&quot;,&quot;desc_html&quot;:&quot;В ближайшее время менеджер свяжется с вами для подтверждения заказа. \u003cbr\u003e Ваш телефон %{phone} \u003cbr\u003e Ваш заказ %{link} на сумму %{price}\n&quot;},&quot;new&quot;:{&quot;delivery_title&quot;:&quot;Выберите тип доставки.&quot;,&quot;payment_title&quot;:&quot;Способы оплаты&quot;,&quot;contacts_title&quot;:&quot;Введите данные&quot;,&quot;sum&quot;:&quot;на сумму&quot;},&quot;redirect&quot;:&quot;В течение 5-и секунд вы будете переправлены на страницу оплаты.&quot;,&quot;redirecting&quot;:&quot;Переправляю на сайт оплаты&quot;,&quot;go_to_payment&quot;:&quot;Перейти к оплате&quot;,&quot;continue_shopping&quot;:&quot;Продолжить покупки&quot;,&quot;contents&quot;:&quot;Состав заказа:&quot;,&quot;delivery_price&quot;:&quot;Стоимость доставки&quot;,&quot;pay&quot;:&quot;Оплатить&quot;},&quot;blog&quot;:{&quot;read_more&quot;:&quot;Читать далее..&quot;},&quot;coupon&quot;:{&quot;discount&quot;:&quot;Скидка - %{discount}&quot;,&quot;invalid&quot;:&quot;Купон \&quot;%{value}\&quot; НЕ действующий&quot;,&quot;checking&quot;:&quot;Проверяю купон..&quot;,&quot;error&quot;:&quot;Ошибка при проверке купона. Попробуйте еще раз&quot;},&quot;cart&quot;:{&quot;basket_button&quot;:&quot;Корзина&quot;,&quot;amount&quot;:&quot;Количество&quot;,&quot;overall&quot;:&quot;Итого:&quot;,&quot;title&quot;:&quot;Корзина&quot;,&quot;clear&quot;:&quot;Очистить корзину&quot;,&quot;not_available&quot;:&quot;Больше не продается&quot;,&quot;empty&quot;:&quot;Пока тут ничего нет&quot;},&quot;wishlist&quot;:{&quot;add_item&quot;:&quot;Добавить в список желаний&quot;,&quot;wishlist_button&quot;:&quot;Список желаний&quot;,&quot;private_title&quot;:&quot;Ваш список желаний&quot;,&quot;foreign_title&quot;:&quot;Чей-то список желаний&quot;,&quot;empty&quot;:&quot;Пока тут ничего нет&quot;},&quot;packaging&quot;:{&quot;add&quot;:&quot;Добавить&quot;,&quot;add_gift_package&quot;:&quot;Добавить к заказу&quot;,&quot;no_package&quot;:&quot;Не добавлять&quot;},&quot;payment&quot;:{&quot;w1&quot;:{&quot;failure&quot;:{&quot;title&quot;:&quot;Оплата не прошла&quot;,&quot;desc&quot;:&quot;Оплата заказа не была произведена&quot;},&quot;success&quot;:{&quot;title&quot;:&quot;Спасибо за заказ&quot;,&quot;desc&quot;:&quot;Оплата заказа была произведена&quot;}}},&quot;category&quot;:{&quot;continue_shopping&quot;:&quot;Продолжить покупки&quot;,&quot;empty&quot;:&quot;Ой, а здесь ничего нет. Пока.&quot;},&quot;dictionary_entity&quot;:{&quot;continue_shopping&quot;:&quot;Продолжить покупки&quot;,&quot;empty&quot;:&quot;Ой, а здесь ничего нет. Пока.&quot;},&quot;similar_product&quot;:{&quot;title&quot;:&quot;С этим украшением покупают также&quot;},&quot;product&quot;:{&quot;title&quot;:&quot;Товар&quot;,&quot;blank_price&quot;:&quot;Цена неизвестна&quot;,&quot;run_out&quot;:&quot;Нет в наличии&quot;,&quot;not_available&quot;:&quot;Не продается&quot;,&quot;available&quot;:&quot;Можно купить&quot;,&quot;sold_out_message_html&quot;:&quot;\u0026laquo;%{title}\u0026raquo; сейчас не продается&quot;,&quot;nothing_found_by_criteria&quot;:&quot;Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.&quot;,&quot;category_title&quot;:&quot;Категория&quot;,&quot;show_other_products&quot;:&quot;Посмотреть другие товары&quot;,&quot;show_all&quot;:&quot;Показать все&quot;},&quot;properties&quot;:{&quot;empty&quot;:&quot;Нет характеристик для вывода&quot;},&quot;property&quot;:{&quot;unknown_type&quot;:&quot;Неизвестный тип характеристики&quot;,&quot;defaults&quot;:{&quot;size&quot;:&quot;Размер&quot;,&quot;color&quot;:&quot;Цвет&quot;}},&quot;pages&quot;:{&quot;titles&quot;:{&quot;cart&quot;:&quot;Корзина&quot;,&quot;order&quot;:&quot;Оформление заказа&quot;,&quot;payment&quot;:&quot;Оплата&quot;,&quot;payment_success&quot;:&quot;Успешная оплата&quot;,&quot;payment_error&quot;:&quot;Ошибка оплаты&quot;}},&quot;filter&quot;:{&quot;availability&quot;:&quot;Доступность&quot;,&quot;price_range&quot;:&quot;Ценовой диапазон&quot;,&quot;selected_options&quot;:{&quot;availability&quot;:&quot;Доступность&quot;,&quot;price_range&quot;:&quot;Цена от %{from} до %{to} %{currency}&quot;},&quot;selected_availability&quot;:{&quot;all&quot;:&quot;Все&quot;,&quot;available&quot;:&quot;В наличии&quot;,&quot;run_out&quot;:&quot;Под заказ&quot;,&quot;sale&quot;:&quot;Распродажа&quot;,&quot;unknown&quot;:&quot;unknown&quot;}},&quot;button&quot;:{&quot;to_cart&quot;:&quot;В корзину&quot;,&quot;select_good&quot;:&quot;Выберите характеристику&quot;,&quot;go_wishlist&quot;:&quot;Перейти в \&quot;Список желаний\&quot;&quot;,&quot;to_wishlist&quot;:&quot;Добавить в \&quot;Список желаний\&quot;&quot;,&quot;already&quot;:&quot;Уже в корзине&quot;,&quot;disable_with&quot;:{&quot;sending&quot;:&quot;Отправляем...&quot;,&quot;saving&quot;:&quot;Сохраняем...&quot;,&quot;waiting&quot;:&quot;Подождите...&quot;,&quot;adding&quot;:&quot;Добавляем...&quot;}},&quot;products&quot;:{&quot;nothing_found_by_criteria&quot;:&quot;По данным критериям ничего не найдено&quot;},&quot;client&quot;:{&quot;auth&quot;:&quot;Личный кабинет&quot;,&quot;no_account&quot;:&quot;Нет аккаунта?&quot;,&quot;logged_in_with&quot;:&quot;Вы уже авторизованы под именем\u003cbr /\u003e \u003cb\u003e%{name}\u003c/b\u003e.&quot;,&quot;continue_logged&quot;:&quot;Продолжить под этим именем..&quot;,&quot;create_account&quot;:&quot;Создать&quot;,&quot;logout&quot;:&quot;Выйти&quot;,&quot;cabinet&quot;:{&quot;title&quot;:&quot;Личный кабинет&quot;,&quot;button&quot;:&quot;Кабинет&quot;,&quot;create&quot;:&quot;Создаем личный кабинет&quot;,&quot;send_pin_code&quot;:&quot;Выслать пин-код&quot;,&quot;disable_with&quot;:&quot;Высылаем...&quot;}},&quot;money&quot;:{&quot;unknown_iso_code&quot;:&quot;Неизвестный тип валюты %{isoCode}&quot;},&quot;js&quot;:{&quot;coupon&quot;:{&quot;discount&quot;:&quot;Скидка - %{discount} %&quot;}}}}}}"><div class="b-form__row__widget" data-reactid=".2fgmlzuchz4" data-react-checksum="324210624"><div class="form-group string optional" data-reactid=".2fgmlzuchz4.0"><label class="string optional control-label" for="vendor_order_coupon_code" data-reactid=".2fgmlzuchz4.0.0">Промокод</label><input class="string optional form-control" id="vendor_order_coupon_code" name="vendor_order[coupon_code]" placeholder="Промо-код (если есть)" value="" type="text" data-reactid=".2fgmlzuchz4.0.1"></div><span data-reactid=".2fgmlzuchz4.1"></span></div></div>
// </div>
// </div>