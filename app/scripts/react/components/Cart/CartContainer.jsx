import React, { Component, PropTypes } from 'react';
import Cart from './Cart';

class CartContainer extends Component {
  state = {
    totalCount: this.props.itemsInfo.total_count,
    totalPrice: this.props.itemsInfo.total_price,
  }
  render() {
    return (
      <Cart {...this.props} {...this.state} />
    );
  }
}

CartContainer.propTypes = {
  formAuthenticity: PropTypes.object,
  itemsInfo: PropTypes.object,
};
CartContainer.defaultProps = {
  formAuthenticity: {
    token: 'U9pqrQGs/+7Ht9qSAjOLpsN18IL6EJyPNSfJu45oLT4=',
    field: 'authenticity_token',
  },
  itemsInfo: {
    total_count: 2,
    total_price: {
      cents: 5120000,
      currency_iso_code: 'RUB',
    },
  },
};

export default CartContainer;




// {
//   "product": {
//     "id": 33302,
//     "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzMzMzAy",
//     "title": "Кулон Меркаба с цирконами серебряный р",
//     "article": "P009-11/RU",
//     "has_ordering_goods": true,
//     "is_sale": false,
//     "is_label_new": false,
//     "is_run_out": false,
//     "is_sold": false,
//     "description": "<p></p>",
//     "sale_percent": null,
//     "main_category": {
//       "id": 623,
//       "name": "Кулон",
//       "is_root": false,
//       "public_url": "http://wanna-be.ru/categories/623-na-sheyu-kulon",
//       "parent": {
//         "id": 639,
//         "name": "На шею",
//         "is_root": false,
//         "public_url": "http://wanna-be.ru/categories/639-na-sheyu",
//         "parent": {
//           "id": 612,
//           "name": "Корневая категория",
//           "is_root": true,
//           "public_url": "http://wanna-be.ru/categories/612-kornevaya-kategoriya",
//           "parent": null
//         }
//       }
//     },
//     "categories": [
//       {
//         "id": 623,
//         "name": "Кулон",
//         "is_root": false,
//         "public_url": "http://wanna-be.ru/categories/623-na-sheyu-kulon",
//         "parent": {
//           "id": 639,
//           "name": "На шею",
//           "is_root": false,
//           "public_url": "http://wanna-be.ru/categories/639-na-sheyu",
//           "parent": {
//             "id": 612,
//             "name": "Корневая категория",
//             "is_root": true,
//             "public_url": "http://wanna-be.ru/categories/612-kornevaya-kategoriya",
//             "parent": null
//           }
//         }
//       },
//       {
//         "id": 1524,
//         "name": "Главная страница",
//         "is_root": false,
//         "public_url": "http://wanna-be.ru/categories/1524-glavnaya-stranitsa",
//         "parent": {
//           "id": 612,
//           "name": "Корневая категория",
//           "is_root": true,
//           "public_url": "http://wanna-be.ru/categories/612-kornevaya-kategoriya",
//           "parent": null
//         }
//       }
//     ],
//     "goods": [
//       {
//         "title": "Кулон Меркаба с цирконами серебряный р",
//         "article": null,
//         "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8yOTU4Mw",
//         "is_ordering": true,
//         "is_run_out": false,
//         "is_sale": false,
//         "is_preorder": false,
//         "image": {
//           "title": "Кулон Меркаба с цирконами серебряный р",
//           "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28959/561876d0-4407-411a-94b6-42711797e61f.jpg",
//           "uid": "e393fe4b7c78c7723942230dc2a2d764af4424d3d23a63a1c95fd70711c616ba"
//         },
//         "attributes": {},
//         "quantity": 2,
//         "price": {
//           "cents": 490000,
//           "currency_iso_code": "RUB"
//         },
//         "actual_price": {
//           "cents": 490000,
//           "currency_iso_code": "RUB"
//         }
//       }
//     ],
//     "images": [
//       {
//         "title": "Кулон Меркаба с цирконами серебряный р",
//         "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28959/561876d0-4407-411a-94b6-42711797e61f.jpg",
//         "uid": "e393fe4b7c78c7723942230dc2a2d764af4424d3d23a63a1c95fd70711c616ba"
//       },
//       {
//         "title": "Кулон Меркаба с цирконами серебряный р",
//         "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/28960/60bdcb79-3c3b-421e-8a78-36257d1cb196.jpg",
//         "uid": "10bbd01b031187f57feb6775d4c30acf5eaea11d2316e1ddd84344a311db13c6"
//       }
//     ],
//     "properties": [],
//     "attributes": [
//       {
//         "property_id": 89,
//         "type": "AttributeDictionary",
//         "title": "Цвет покрытия",
//         "value": "родий",
//         "products_path": "/entities/44-rodiy"
//       },
//       {
//         "property_id": 91,
//         "type": "AttributeDictionary",
//         "title": "Цвет вставок",
//         "value": "белый",
//         "products_path": "/entities/38-belyy"
//       },
//       {
//         "property_id": 93,
//         "type": "AttributeDictionary",
//         "title": "Металл, проба",
//         "value": "Серебро 925",
//         "products_path": "/entities/37-serebro-925"
//       },
//       {
//         "property_id": 99,
//         "type": "AttributeDictionary",
//         "title": "Вставки",
//         "value": "куб. циркон",
//         "products_path": "/entities/65-kub-tsirkon"
//       }
//     ],
//     "custom_product_html": "",
//     "text_blocks": [],
//     "video_embed_html": null
//   },
//   "similarProducts": [
//     {
//       "id": 3991,
//       "title": "Браслет-нить Звезда Давида малая родий черный",
//       "is_sale": false,
//       "has_ordering_goods": true,
//       "is_label_new": false,
//       "is_run_out": false,
//       "is_sold": false,
//       "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/5064/image.png",
//       "second_image_url": null,
//       "public_url": "http://wanna-be.ru/products/3991-braslet-nit-zvezda-davida-malaya-rodiy-chernyy",
//       "short_details": null,
//       "goods": [
//         {
//           "id": 16861,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 150000,
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 150000,
//             "currency_iso_code": "RUB"
//           }
//         }
//       ]
//     },
//     {
//       "id": 4377,
//       "title": "Цепочка регулируемая лонг серебряная",
//       "is_sale": false,
//       "has_ordering_goods": true,
//       "is_label_new": false,
//       "is_run_out": false,
//       "is_sold": false,
//       "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/5004/image.png",
//       "second_image_url": null,
//       "public_url": "http://wanna-be.ru/products/4377-tsepochka-reguliruemaya-long-serebryanaya",
//       "short_details": null,
//       "goods": [
//         {
//           "id": 16725,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 350000,
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 350000,
//             "currency_iso_code": "RUB"
//           }
//         }
//       ]
//     },
//     {
//       "id": 35336,
//       "title": "Браслет-бусинки Звезда давида золоченый р",
//       "is_sale": false,
//       "has_ordering_goods": true,
//       "is_label_new": false,
//       "is_run_out": false,
//       "is_sold": false,
//       "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/32877/2d864ba7-2e21-4d60-b202-47dc85e7ddfb.jpg",
//       "second_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/38621/fee187b1-ccd2-4fc4-a704-4b106f2ce8a9.jpg",
//       "public_url": "http://wanna-be.ru/products/35336-braslet-businki-zvezda-davida-zolochenyy-r",
//       "short_details": null,
//       "goods": [
//         {
//           "id": 31857,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 300000,
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 300000,
//             "currency_iso_code": "RUB"
//           }
//         },
//         {
//           "id": 31858,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 300000,
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 300000,
//             "currency_iso_code": "RUB"
//           }
//         }
//       ]
//     },
//     {
//       "id": 24263,
//       "title": "Кулон Хамса маленькая с цирконами золоченый",
//       "is_sale": false,
//       "has_ordering_goods": true,
//       "is_label_new": false,
//       "is_run_out": false,
//       "is_sold": false,
//       "index_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25297/91844b5b-0b77-470a-80c8-0df1b7be7a8c.jpg",
//       "second_image_url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25298/27aaea4a-5b3d-4722-bf53-973c3d6e3d68.jpg",
//       "public_url": "http://wanna-be.ru/products/24263-kulon-hamsa-malenkaya-s-tsirkonami-zolochenyy",
//       "short_details": null,
//       "goods": [
//         {
//           "id": 27545,
//           "type": "ProductItem",
//           "is_sale": false,
//           "price": {
//             "cents": 430000,
//             "currency_iso_code": "RUB"
//           },
//           "actual_price": {
//             "cents": 430000,
//             "currency_iso_code": "RUB"
//           }
//         }
//       ]
//     }
//   ],
//   "i18n": {
//     "locale": "ru",
//     "translations": {
//       "vendor": {
//         "not_published": "Магазин временно не работает",
//         "made_in_kiiiosk": "Сделано на «Киоске»",
//         "badges": {
//           "new": "Новинка",
//           "sale_percent": "SALE - %{percent}%",
//           "not_available": "Не продается",
//           "sale": "SALE",
//           "sold": "Уточните наличие в наших магазинах"
//         },
//         "search": {
//           "results_title": "Результаты поиска (%{count})",
//           "nothing_found": "К сожалению, ничего не найдено."
//         },
//         "seconds_count": "%{count} секунду",
//         "seconds_count_plural_2": "%{count} секунды",
//         "seconds_count_plural_5": "%{count} секунд",
//         "errors": {
//           "cart": {
//             "empty": "В корзине нет товаров"
//           },
//           "coupon": {
//             "not_found": "Несуществующий промокод %{code}",
//             "expired": "Промокод просрочен %{code}"
//           }
//         },
//         "placeholders": {
//           "coupon": "Промо-код (если есть)",
//           "search": "Поиск"
//         },
//         "alerts": {
//           "confirm": "Точно очистить?"
//         },
//         "flashes": {
//           "good_added_to_basket": "Товар \"%{title}\" добавлен в корзину"
//         },
//         "mails": {
//           "signature": "С уважением, интернет-магазин \"%{name}\""
//         },
//         "auto_menu_items": {
//           "blog": "Блог"
//         },
//         "top_banner": {
//           "default_content": "Мы открылись!"
//         },
//         "order": {
//           "fields": {
//             "phone": "Телефон",
//             "name": "Имя Отчество Фамилия",
//             "email": "Email",
//             "city_title": "Город доставки",
//             "address": "Адрес доставки",
//             "comment": "Комментарий",
//             "coupon_code": "Промокод"
//           },
//           "submit": "Оформить заказ",
//           "pickup_address": "Адрес самовывоза:",
//           "title": "Заказ №%{number}",
//           "payment_type": "Способ оплаты: %{title}",
//           "delivery_type": "Способ доставки: %{title}",
//           "free_delivery_text_html": "Бесплатная доставка при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
//           "checkout_free_delivery_text_html": "Бесплатно при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
//           "go_back": "Вернуться назад",
//           "next": "Продолжить",
//           "delivery_tracking_id": "Трекинг-номер доставки: %{number}",
//           "check_state": "Проверить статус доставки",
//           "public_offer_accepted_html": "Согласен с условиями <u><a href=\"%{url}\" target=\"_blank\">публичной оферты</a></u>",
//           "created": {
//             "title": "Спасибо за заказ",
//             "desc_html": "В ближайшее время менеджер свяжется с вами для подтверждения заказа. <br> Ваш телефон %{phone} <br> Ваш заказ %{link} на сумму %{price}\n"
//           },
//           "new": {
//             "delivery_title": "Выберите тип доставки.",
//             "payment_title": "Способы оплаты",
//             "contacts_title": "Введите данные",
//             "sum": "на сумму"
//           },
//           "redirect": "В течение 5-и секунд вы будете переправлены на страницу оплаты.",
//           "redirecting": "Переправляю на сайт оплаты",
//           "go_to_payment": "Перейти к оплате",
//           "continue_shopping": "Продолжить покупки",
//           "contents": "Состав заказа:",
//           "delivery_price": "Стоимость доставки",
//           "pay": "Оплатить"
//         },
//         "coupon": {
//           "discount": "Скидка - %{discount}",
//           "invalid": "Купон \"%{value}\" НЕ действующий",
//           "checking": "Проверяю купон..",
//           "error": "Ошибка при проверке купона. Попробуйте еще раз"
//         },
//         "cart": {
//           "basket_button": "Корзина",
//           "amount": "Количество",
//           "overall": "Итого:",
//           "title": "Корзина",
//           "clear": "Очистить корзину",
//           "not_available": "Больше не продается",
//           "empty": "Пока тут ничего нет"
//         },
//         "wishlist": {
//           "add_item": "Добавить в список желаний",
//           "wishlist_button": "Список желаний",
//           "private_title": "Ваш список желаний",
//           "foreign_title": "Чей-то список желаний",
//           "empty": "Пока тут ничего нет"
//         },
//         "packaging": {
//           "add": "Добавить",
//           "add_gift_package": "Добавить к заказу",
//           "no_package": "Не добавлять"
//         },
//         "payment": {
//           "w1": {
//             "failure": {
//               "title": "Оплата не прошла",
//               "desc": "Оплата заказа не была произведена"
//             },
//             "success": {
//               "title": "Спасибо за заказ",
//               "desc": "Оплата заказа была произведена"
//             }
//           }
//         },
//         "category": {
//           "continue_shopping": "Продолжить покупки",
//           "empty": "Ой, а здесь ничего нет. Пока."
//         },
//         "dictionary_entity": {
//           "continue_shopping": "Продолжить покупки",
//           "empty": "Ой, а здесь ничего нет. Пока."
//         },
//         "similar_product": {
//           "title": "С этим товаром покупают также"
//         },
//         "product": {
//           "title": "Товар",
//           "blank_price": "Цена неизвестна",
//           "run_out": "Нет в наличии",
//           "not_available": "Уточните в магазине",
//           "available": "Можно купить",
//           "sold_out_message_html": "&laquo;%{title}&raquo; сейчас не продается",
//           "nothing_found_by_criteria": "Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.",
//           "category_title": "Категория",
//           "show_other_products": "Посмотреть другие товары",
//           "show_all": "Показать все"
//         },
//         "properties": {
//           "empty": "Нет характеристик для вывода"
//         },
//         "property": {
//           "unknown_type": "Неизвестный тип характеристики",
//           "defaults": {
//             "size": "Размер",
//             "color": "Цвет"
//           }
//         },
//         "pages": {
//           "titles": {
//             "cart": "Корзина",
//             "order": "Оформление заказа",
//             "payment": "Оплата",
//             "payment_success": "Успешная оплата",
//             "payment_error": "Ошибка оплаты"
//           }
//         },
//         "filter": {
//           "availability": "Доступность",
//           "price_range": "Ценовой диапазон",
//           "selected_options": {
//             "availability": "Доступность",
//             "price_range": "Цена от %{from} до %{to} %{currency}"
//           },
//           "selected_availability": {
//             "all": "Все",
//             "available": "В наличии",
//             "run_out": "Под заказ",
//             "sale": "Распродажа",
//             "unknown": "unknown"
//           }
//         },
//         "button": {
//           "to_cart": "В корзину",
//           "select_good": "Выберите характеристику",
//           "go_wishlist": "Перейти в \"Список желаний\"",
//           "to_wishlist": "Хочу!",
//           "already": "Уже в корзине",
//           "disable_with": {
//             "sending": "Отправляем...",
//             "saving": "Сохраняем...",
//             "waiting": "Подождите...",
//             "adding": "Добавляем..."
//           }
//         },
//         "products": {
//           "nothing_found_by_criteria": "По данным критериям ничего не найдено"
//         },
//         "client": {
//           "auth": "Личный кабинет",
//           "no_account": "Нет аккаунта?",
//           "logged_in_with": "Вы уже авторизованы под именем<br /> <b>%{name}</b>.",
//           "continue_logged": "Продолжить под этим именем..",
//           "create_account": "Создать",
//           "logout": "Выйти",
//           "cabinet": {
//             "title": "Личный кабинет",
//             "button": "Кабинет",
//             "create": "Создаем личный кабинет",
//             "send_pin_code": "Выслать пин-код",
//             "disable_with": "Высылаем..."
//           }
//         },
//         "money": {
//           "unknown_iso_code": "Неизвестный тип валюты %{isoCode}"
//         },
//         "add_gift_package": "Добавить подарочную коробку",
//         "no_package": "Без упаковки"
//       }
//     }
//   },
//   "formAuthenticity": {
//     "token": "U9pqrQGs/+7Ht9qSAjOLpsN18IL6EJyPNSfJu45oLT4=",
//     "field": "authenticity_token"
//   },
//   "isWishlisted": false,
//   "hasWishlist": true,
//   "wishlistUrl": "/wishlist",
//   "addWishlistUrl": "/wishlist/items"
// }