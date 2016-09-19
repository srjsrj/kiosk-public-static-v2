import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';
import connectToRedux from '../HoC/connectToRedux';
import provideTranslations from '../HoC/provideTranslations';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import Order from './Order';
import {
  changeFieldValue,
  initCheckout,
  selectDelivery,
  selectPayment,
} from '../../actions/CartActions';
import {
  initCheckoutCartStore,
} from '../../reducers/cart';
import {
  canUseDOM,
} from '../../helpers/dom';

const emptyList = List();
const emptyCoupon = Map();
const emptyFields = List();
const emptyValues = Map();
const emptyDeliveryType = Map();
const emptyPaymentType = Map();
const emptyPrice = Map();

let storeInitialized = false;

class OrderContainer extends Component {
  constructor(props) {
    super(props);

    this.selectDelivery = this.selectDelivery.bind(this);
    this.selectPayment = this.selectPayment.bind(this);
    this.changeFieldValue = this.changeFieldValue.bind(this);
  }
  componentWillMount() {
    const {
      initCheckout,
      initialProps,
    } = this.props;

    if (!storeInitialized && canUseDOM()) {
      initCheckout(initialProps);
      storeInitialized = true;
    }
  }
  selectDelivery(delivery) {
    this.props.selectDelivery(delivery.get('id'));
  }
  selectPayment(payment) {
    this.props.selectPayment(payment.get('id'));
  }
  changeFieldValue(name, value) {
    this.props.changeFieldValue(name, value);
  }
  render() {
    const {
      coupon,
      fields,
      fieldValues,
      deliveryTypes,
      selectedDeliveryType,
      paymentTypes,
      selectedPaymentType,
      initialProps: {
        backUrl,
        errorMessage,
        formAuthenticity,
        publicOffer,
        submitOrderUrl,
        t,
      },
      totalCount,
      totalPrice,
    } = this.props;

    return (
      <Order
        backUrl={backUrl}
        coupon={coupon}
        deliveryType={selectedDeliveryType}
        deliveryTypes={deliveryTypes}
        errorMessage={errorMessage}
        fieldValues={fieldValues}
        fields={fields}
        formAuthenticity={formAuthenticity}
        onDeliveryChange={this.selectDelivery}
        onFieldChange={this.changeFieldValue}
        onPaymentChange={this.selectPayment}
        paymentType={selectedPaymentType}
        paymentTypes={paymentTypes}
        publicOffer={publicOffer}
        submitOrderUrl={submitOrderUrl}
        t={t}
        totalCount={totalCount}
        totalPrice={totalPrice}
      />
    );
  }
}

OrderContainer.propTypes = {
  coupon: PropTypes.object.isRequired,
  deliveryTypes: PropTypes.object.isRequired,
  selectedDeliveryType: PropTypes.object.isRequired,
  fieldValues: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  paymentTypes: PropTypes.object.isRequired,
  initCheckout: PropTypes.func.isRequired,
  selectedPaymentType: PropTypes.object.isRequired,
  selectDelivery: PropTypes.func.isRequired,
  selectPayment: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  initialProps: PropTypes.shape({
    backUrl: PropTypes.string,
    deliveryTypeId: PropTypes.number,
    deliveryTypes: PropTypes.arrayOf(schemas.deliveryType),
    errorMessage: PropTypes.string,
    fields: PropTypes.arrayOf(schemas.checkoutField),
    formAuthenticity: schemas.formAuthenticity,
    paymentTypeId: PropTypes.number,
    paymentTypes: PropTypes.arrayOf(schemas.paymentType),
    publicOffer: schemas.checkoutPublicOffer,
    submitOrderUrl: PropTypes.string,
    t: PropTypes.func.isRequired,
  }),
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.object.isRequired,
};

OrderContainer.defaultProps = {
  deliveryTypes: [],
  paymentTypes: [],
  fields: [], 
};

export default provideTranslations(connectToRedux(connect(
  (state, ownProps) => {
    const { cart } = storeInitialized
      ? state
      : ({ // TODO: move to store initialization when/if root component created
        cart: initCheckoutCartStore(state.cart, initCheckout(ownProps)),
      });
    const coupon = cart.get('coupon', emptyCoupon);
    const deliveryTypes = cart.get('deliveryTypes', emptyList);
    const selectedDeliveryType = deliveryTypes
      .find(
        (t) => t.get('id') === cart.get('selectedDeliveryType'),
        null,
        deliveryTypes.first() || emptyDeliveryType
      );
    const availablePayments = selectedDeliveryType.get('availablePayments', emptyList);
    const availableFields = selectedDeliveryType.get('fields', emptyList);
    const paymentTypes = cart.get('paymentTypes', emptyList)
      .filter((p) => availablePayments.includes(p.get('id')));
    const selectedPaymentType = paymentTypes
      .find(
        (p) => p.get('id') === cart.get('selectedPaymentType'),
        null,
        paymentTypes.first() || emptyPaymentType
      );
    const totalCount = cart.getIn(['cart', 'totalCount'], 0);
    const totalPrice = cart.getIn(['cart', 'totalPrice'], emptyPrice)
      .update((price) => {

        if (price.isEmpty()) {
          return price;
        }

        const cents = price.get('cents', 0);
        const threshold = selectedDeliveryType.getIn(['freeDeliveryThreshold', 'cents'], null);
        const deliveryPrice = selectedDeliveryType.getIn(['price', 'cents'], 0);

        return price.set('cents', cents + ((threshold == null || threshold > cents) ? deliveryPrice : 0));
      });
    const fields = cart.get('checkoutFields', emptyFields)
      .filter((f) => availableFields.includes(f.get('name')));
    const fieldValues = cart.get('checkoutFieldValues', emptyValues);


    return {
      coupon,
      fields,
      fieldValues,
      deliveryTypes,
      selectedDeliveryType,
      paymentTypes,
      selectedPaymentType,
      totalCount,
      totalPrice,
    };
  },
  {
    changeFieldValue,
    initCheckout,
    selectDelivery,
    selectPayment,
  },
  (stateProps, dispatchProps, ownProps) => Object.assign({}, {
    initialProps: ownProps,
  }, stateProps, dispatchProps)
)(OrderContainer)));


/*
// test data
{
  'deliveryTypeId': 110,
  'paymentTypeId': 105,
  'i18n': {
    'locale': 'ru',
    'translations': {
      'vendor': {
        'not_published': 'Магазин временно не работает',
        'made_in_kiiiosk': 'Сделано на «Киоске»',
        'tasty_product_button_text': 'Купить',
        'entities': {
          'product': '%{count} товар',
          'product_2': '%{count} товара',
          'product_5': '%{count} товаров',
        },
        'badges': {
          'new': 'Новинка',
          'sale_percent': 'SALE - %{percent}%',
          'not_available': 'Не продается',
          'sale': 'SALE',
          'sold': 'Продано',
        },
        'gallery': {
          'close': 'Закрыть',
          'next': 'Вперёд',
          'prev': 'Назад',
        },
        'search': {
          'results_title': 'Результаты поиска (%{count})',
          'nothing_found': 'К сожалению, ничего не найдено.',
        },
        'seconds_count': '%{count} секунду',
        'seconds_count_2': '%{count} секунды',
        'seconds_count_5': '%{count} секунд',
        'activemodel': {
          'errors': {
            'models': {
              'vendor_order_form': {
                'invalid_phone': 'Неверный формат телефона. Прим.: +7 913 123 32 10',
                'attributes': {
                  'address': {
                    'blank': 'не может быть пустым',
                  },
                  'email': {
                    'email': 'не является email адресом',
                  },
                  'city_title': {
                    'blank': 'не может быть пустым',
                  },
                  'phone': {
                    'blank': 'не может быть пустым',
                  },
                  'name': {
                    'blank': 'не может быть пустым',
                  },
                  'public_offer_accepted': {
                    'blank': 'Необходимо принять условия публичной оферты',
                  },
                },
              },
            },
          },
        },
        'errors': {
          'cart': {
            'empty': 'В корзине нет товаров',
          },
          'coupon': {
            'not_found': 'Несуществующий промокод %{code}',
            'expired': 'Промокод просрочен %{code}',
          },
          'order': {
            'invalid_form': 'Заказ еще не принят, исправьте ошибки в форме',
            'has_unorderable_goods': 'В заказе лежат недоступные товары',
            'no_items': 'В заказе нет товаров',
            'unavailable_currency': 'Невозможно сделать заказ в выбранной валюте',
          },
        },
        'placeholders': {
          'coupon': 'Промо-код (если есть)',
          'search': 'Поиск',
        },
        'alerts': {
          'confirm': 'Точно очистить?',
        },
        'flashes': {
          'good_added_to_basket': 'Украшение "%{title}" добавлено в корзину',
        },
        'mails': {
          'signature': 'С уважением, интернет-магазин "%{name}"',
        },
        'auto_menu_items': {
          'blog': 'Блог',
        },
        'top_banner': {
          'default_content': 'Мы открылись!',
        },
        'order': {
          'fields': {
            'phone': 'Телефон',
            'name': 'Полное имя',
            'email': 'Email',
            'city_title': 'Город доставки',
            'address': 'Адрес доставки',
            'comment': 'Оставьте свой телефон и имя, наш сотрудник свяжется с вами для уточнения информации о заказе',
            'coupon_code': 'Промокод',
          },
          'placeholders': {
            'city_title': 'Москва',
            'phone': 'Например, +7 913 123 32 10',
            'name': 'Имя',
            'address': 'Например, Академика Вавилова 12-10',
            'comment': 'О чем нам нужно знать',
            'email': 'Email',
          },
          'submit': 'Оформить заказ',
          'pickup_address': 'Адрес самовывоза:',
          'title': 'Заказ №%{number}',
          'payment_type': 'Способ оплаты: %{title}',
          'delivery_type': 'Способ доставки: %{title}',
          'free_delivery_text_html': 'Бесплатная доставка при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e',
          'checkout_free_delivery_text_html': 'Бесплатно при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e',
          'go_back': 'Вернуться назад',
          'next': 'Продолжить',
          'delivery_tracking_id': 'Трекинг-номер доставки: %{number}',
          'check_state': 'Проверить статус доставки',
          'public_offer_accepted_html': 'Согласен с условиями \u003cu\u003e\u003ca href="%{url}" target="_blank"\u003eпубличной оферты\u003c/a\u003e\u003c/u\u003e',
          'created': {
            'title': 'Спасибо за заказ',
            'desc_html': 'В ближайшее время менеджер свяжется с вами для подтверждения заказа. \u003cbr\u003e Ваш телефон %{phone} \u003cbr\u003e Ваш заказ %{link} на сумму %{price}\n',
          },
          'new': {
            'delivery_title': 'Выберите тип доставки.',
            'payment_title': 'Способы оплаты',
            'contacts_title': 'Введите данные',
            'sum': 'на сумму',
          },
          'redirect': 'В течение 5-и секунд вы будете переправлены на страницу оплаты.',
          'redirecting': 'Переправляю на сайт оплаты',
          'go_to_payment': 'Перейти к оплате',
          'continue_shopping': 'Продолжить покупки',
          'contents': 'Состав заказа:',
          'delivery_price': 'Стоимость доставки',
          'pay': 'Оплатить',
        },
        'blog': {
          'read_more': 'Читать далее..',
        },
        'notice': {
          'catalog_filter': {
            'selected_products': 'Выбрано вариантов',
            'show_products': 'Показать',
          },
        },
        'coupon': {
          'discount': 'Скидка - %{discount}',
          'invalid': 'Купон "%{value}" НЕ действующий',
          'checking': 'Проверяю купон..',
          'error': 'Ошибка при проверке купона. Попробуйте еще раз',
        },
        'cart': {
          'basket_button': 'Корзина',
          'amount': 'Количество',
          'weight': 'Вес',
          'overall': 'Итого:',
          'title': 'Корзина',
          'clear': 'Очистить корзину',
          'not_available': 'Больше не продается',
          'empty': 'Пока тут ничего нет',
        },
        'wishlist': {
          'add_item': 'Добавить в список желаний',
          'wishlist_button': 'Список желаний',
          'private_title': 'Ваш список желаний',
          'foreign_title': 'Чей-то список желаний',
          'empty': 'Пока тут ничего нет',
          'no_price': 'Не продается',
        },
        'packaging': {
          'add': 'Добавить',
          'add_gift_package': 'Добавить фактурную подарочную упаковку, перевязанную шелковой лентой',
          'no_package': 'Не добавлять',
        },
        'payment': {
          'w1': {
            'failure': {
              'title': 'Оплата не прошла',
              'desc': 'Оплата заказа не была произведена',
            },
            'success': {
              'title': 'Спасибо за заказ',
              'desc': 'Оплата заказа была произведена',
            },
          },
        },
        'category': {
          'continue_shopping': 'Продолжить покупки',
          'empty': 'Ой, а здесь ничего нет. Пока.',
        },
        'dictionary_entity': {
          'continue_shopping': 'Продолжить покупки',
          'empty': 'Ой, а здесь ничего нет. Пока.',
        },
        'similar_product': {
          'title': 'С этим украшением покупают также',
        },
        'product': {
          'title': 'Товар',
          'blank_price': 'Цена неизвестна',
          'run_out': 'Нет в наличии',
          'not_available': 'Не продается',
          'available': 'Можно купить',
          'sold_out_message_html': '\u0026laquo;%{title}\u0026raquo; сейчас не продается',
          'nothing_found_by_criteria': 'Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.',
          'category_title': 'Категория',
          'show_other_products': 'Посмотреть другие товары',
          'show_all': 'Показать все',
          'weight': 'Вес',
          'kg': 'кг.',
        },
        'properties': {
          'empty': 'Нет характеристик для вывода',
        },
        'property': {
          'unknown_type': 'Неизвестный тип характеристики',
          'defaults': {
            'size': 'Размер',
            'color': 'Цвет',
          },
        },
        'pages': {
          'titles': {
            'cart': 'Корзина',
            'order': 'Оформление заказа',
            'payment': 'Оплата',
            'payment_success': 'Успешная оплата',
            'payment_error': 'Ошибка оплаты',
          },
        },
        'filter': {
          'availability': 'Доступность',
          'price_range': 'Ценовой диапазон',
          'expand_button': {
            'expand': 'Развернуть список',
            'turn': 'Свернуть список',
          },
          'selected_options': {
            'availability': 'Доступность',
            'price_range': 'Цена от %{from} до %{to} %{currency}',
          },
          'selected_availability': {
            'all': 'Все',
            'available': 'В наличии',
            'run_out': 'Под заказ',
            'sale': 'Распродажа',
            'unknown': 'unknown',
          },
        },
        'button': {
          'to_cart': 'Добавить в корзину %{title}',
          'select_good': 'Выберите характеристику',
          'go_wishlist': 'Перейти в "Список желаний"',
          'to_wishlist': 'Добавить в "Список желаний"',
          'already': 'Уже в корзине',
          'disable_with': {
            'sending': 'Отправляем...',
            'saving': 'Сохраняем...',
            'waiting': 'Подождите...',
            'adding': 'Добавляем...',
          },
        },
        'products': {
          'others': 'Остальные',
          'nothing_found_by_criteria': 'По данным критериям ничего не найдено',
        },
        'client': {
          'auth': 'Личный кабинет',
          'no_account': 'Нет аккаунта?',
          'logged_in_with':
          'Вы уже авторизованы под именем\u003cbr /\u003e \u003cb\u003e%{name}\u003c/b\u003e.',
          'continue_logged': 'Продолжить под этим именем..',
          'create_account': 'Создать',
          'logout': 'Выйти',
          'cabinet': {
            'title': 'Личный кабинет',
            'button': 'Кабинет',
            'create': 'Создаем личный кабинет',
            'send_pin_code': 'Выслать пин-код',
            'disable_with': 'Высылаем...',
          },
        },
        'money': {
          'unknown_iso_code': 'Неизвестный тип валюты %{isoCode}',
        },
      },
    },
  },
  'formAuthenticity': {
    'token': 'REFKvsEf/pWfNDoRM3LPVHNgTIY5d32YR4P/xACndXk=',
    'field': 'authenticity_token',
  },
  'cart': {
    'totalCount': 1,
    'totalPrice': {
      'cents': 415000,
      'currency_iso_code': 'RUB',
    },
  },
  'deliveryTypes': [
    {
      'id': 110,
      'title': 'Москва – доставка курьером (2-3 дня)',
      'description': '',
      'price': {
        'cents': 23000,
        'currency_iso_code': 'RUB',
      },
      'fields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'requiredFields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'availablePayments': [
        105,
        69,
      ],
      'freeDeliveryThreshold': {
        'cents': 1000000,
        'currency_iso_code': 'RUB',
      },
      'reservedFieldValues': {
        'city_title': 'Москва',
      },
    },
    {
      'id': 910,
      'title': 'Срочная доставка',
      'description': 'Доставка в течение 3 часов с момента подтверждения заказа оператором магазина. \r\nВ будние дни, в пределах МКАД. \r\nПредоплата или наличные курьеру при получении.\r\nАкция " От 10000 р. доставка бесплатно"  на срочную не распространяется.',
      'price': {
        'cents': 35000,
        'currency_iso_code': 'RUB',
      },
      'fields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'requiredFields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'availablePayments': [
        105,
        69,
      ],
      'freeDeliveryThreshold': null,
      'reservedFieldValues': {
        'city_title': 'Москва',
      },
    },
    {
      'id': 177,
      'title': 'Санкт-Петербург - доставка курьером (2-3 дня)',
      'description': '',
      'price': {
        'cents': 28000,
        'currency_iso_code': 'RUB',
      },
      'fields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'requiredFields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'availablePayments': [
        105,
      ],
      'freeDeliveryThreshold': {
        'cents': 1000000,
        'currency_iso_code': 'RUB',
      },
      'reservedFieldValues': {
        'city_title': 'Санкт-Петербург',
      },
    },
    {
      'id': 111,
      'title': 'Регионы – доставка курьером (3-10 рабочих дней. Возможен больший срок для отдаленных пунктов)',
      'description': '',
      'price': {
        'cents': 50000,
        'currency_iso_code': 'RUB',
      },
      'fields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'requiredFields': [
        'name',
        'phone',
        'email',
        'city_title',
        'address',
        'comment',
      ],
      'availablePayments': [
        105,
      ],
      'freeDeliveryThreshold': {
        'cents': 1000000,
        'currency_iso_code': 'RUB',
      },
      'reservedFieldValues': {},
    },
    {
      'id': 1754,
      'title': 'Самовывоз на Никитской',
      'description': 'Москва, ул. Б. Никитская, 35, кв.1, код подъезда #423.\r\nВремя работы: пн-вс, с 11 до 21.\r\n\r\nСрок бронирования украшения - 3 дня.\r\n\r\nОбратите внимание, что обмен и возврат купленных украшений осуществляется в течение 14 дней с момента покупки.',
      'price': {
        'cents': 0,
        'currency_iso_code': 'RUB',
      },
      'fields': [
        'name',
        'phone',
        'email',
        'comment',
      ],
      'requiredFields': [
        'name',
        'phone',
        'email',
        'comment',
      ],
      'availablePayments': [
        105,
        69,
      ],
      'freeDeliveryThreshold': null,
      'reservedFieldValues': {
        'city_title': 'Москва',
      },
    },
    {
      'id': 1755,
      'title': 'Самовывоз в ARTPLAY',
      'description': 'Москва, Центр дизайна ARTPLAY, ул. Нижняя Сыромятническая, 10, стр.9, подъезд D, 3-й этаж.\r\nВремя работы: пн-вс, с 11 до 21.\r\n\r\nСрок бронирования украшения - 3 дня.\r\n\r\nОбратите внимание, что обмен и возврат купленных украшений осуществляется в течение 14 дней с момента покупки.',
      'price': {
        'cents': 0,
        'currency_iso_code': 'RUB',
      },
      'fields': [
        'name',
        'phone',
        'email',
        'comment',
      ],
      'requiredFields': [
        'name',
        'phone',
        'email',
        'comment',
      ],
      'availablePayments': [
        105,
        69,
      ],
      'freeDeliveryThreshold': null,
      'reservedFieldValues': {
        'city_title': 'Москва',
      },
    },
  ],
  'paymentTypes': [
    {
      'id': 105,
      'title': 'Оплата банковской картой, через терминал или салон связи',
      'description': 'Безопасная оплата любым удобным способом',
      'icon_url': '/images/payment_icons/order_payment_w1.png',
      'show_icon': false,
    },
    {
      'id': 69,
      'title': 'Наличные при получении',
      'description': '',
      'icon_url': '/images/payment_icons/order_payment_w1.png',
      'show_icon': false,
    },
  ],
  'fields': [
    {
      'name': 'name',
      'type': 'string',
      'value': null,
      'title': 'Полное имя',
      'placeholder': 'Имя',
      'errorMessage': '',
    },
    {
      'name': 'phone',
      'type': 'string',
      'value': null,
      'title': 'Телефон',
      'placeholder': 'Например, +7 913 123 32 10',
      'errorMessage': '',
    },
    {
      'name': 'email',
      'type': 'string',
      'value': null,
      'title': 'Email',
      'placeholder': 'Email',
      'errorMessage': '',
    },
    {
      'name': 'city_title',
      'type': 'string',
      'value': 'Москва',
      'title': 'Город доставки',
      'placeholder': 'Москва',
      'errorMessage': '',
    },
    {
      'name': 'address',
      'type': 'string',
      'value': null,
      'title': 'Адрес доставки',
      'placeholder': 'Например, Академика Вавилова 12-10',
      'errorMessage': '',
    },
    {
      'name': 'comment',
      'type': 'textarea',
      'value': null,
      'title': 'Оставьте свой телефон и имя, наш сотрудник свяжется с вами для уточнения информации о заказе',
      'placeholder': 'О чем нам нужно знать',
      'errorMessage': '',
    },
  ],
  'coupon': {
    'show': true,
    'value': '',
  },
  'publicOffer': {
    'show': false,
  },
  'errorMessage': '',
  'submitOrderUrl': '/orders',
}

*/
