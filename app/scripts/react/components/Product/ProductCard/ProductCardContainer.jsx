import React, { Component, PropTypes } from 'react';
import { load } from '../../../actions/productCardActions';
import { ERROR_STATE, LOADING_STATE, READY_STATE } from './ProductCardContainer.constants';
import ProductCard from './ProductCard';

class ProductCardContainer extends Component {
  state = {
    currentState: READY_STATE,
    productCard: {
  "product": {
    "id": 4273,
    "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0LzQyNzM",
    "title": "Миникольцо Полоски без камней черненое",
    "article": "MR005-02",
    "has_ordering_goods": true,
    "is_sale": false,
    "is_label_new": false,
    "is_run_out": false,
    "is_sold": false,
    "description": "<p></p>",
    "sale_percent": null,
    "main_category": {
      "id": 628,
      "name": "Миникольцо",
      "is_root": false,
      "public_url": "http://wannabe.3001.vkontraste.ru/categories/628-koltsa-minikoltso",
      "parent": {
        "id": 636,
        "name": "Кольца",
        "is_root": false,
        "public_url": "http://wannabe.3001.vkontraste.ru/categories/636-koltsa",
        "parent": {
          "id": 612,
          "name": "Корневая категория",
          "is_root": true,
          "public_url": "http://wannabe.3001.vkontraste.ru/categories/612-kornevaya-kategoriya",
          "parent": null
        }
      }
    },
    "categories": [
      {
        "id": 628,
        "name": "Миникольцо",
        "is_root": false,
        "public_url": "http://wannabe.3001.vkontraste.ru/categories/628-koltsa-minikoltso",
        "parent": {
          "id": 636,
          "name": "Кольца",
          "is_root": false,
          "public_url": "http://wannabe.3001.vkontraste.ru/categories/636-koltsa",
          "parent": {
            "id": 612,
            "name": "Корневая категория",
            "is_root": true,
            "public_url": "http://wannabe.3001.vkontraste.ru/categories/612-kornevaya-kategoriya",
            "parent": null
          }
        }
      },
      {
        "id": 1524,
        "name": "Главная страница",
        "is_root": false,
        "public_url": "http://wannabe.3001.vkontraste.ru/categories/1524-glavnaya-stranitsa",
        "parent": {
          "id": 612,
          "name": "Корневая категория",
          "is_root": true,
          "public_url": "http://wannabe.3001.vkontraste.ru/categories/612-kornevaya-kategoriya",
          "parent": null
        }
      }
    ],
    "goods": [
      {
        "title": "Размер: 13",
        "article": "",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTkw",
        "is_ordering": true,
        "is_run_out": false,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Миникольцо Полоски без камней черненое",
          "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
          "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
        },
        "attributes": {
          "94": "13"
        },
        "quantity": 6,
        "price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "title": "Размер: 14",
        "article": "",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTkx",
        "is_ordering": true,
        "is_run_out": false,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Миникольцо Полоски без камней черненое",
          "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
          "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
        },
        "attributes": {
          "94": "14"
        },
        "quantity": 3,
        "price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "title": "Размер: 15",
        "article": "",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTky",
        "is_ordering": true,
        "is_run_out": false,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Миникольцо Полоски без камней черненое",
          "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
          "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
        },
        "attributes": {
          "94": "15"
        },
        "quantity": 3,
        "price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "title": "Размер: 16",
        "article": "",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTkz",
        "is_ordering": false,
        "is_run_out": true,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Миникольцо Полоски без камней черненое",
          "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
          "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
        },
        "attributes": {
          "94": "16"
        },
        "quantity": 0,
        "price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "title": "Размер: 17",
        "article": "",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTk0",
        "is_ordering": true,
        "is_run_out": false,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Миникольцо Полоски без камней черненое",
          "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
          "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
        },
        "attributes": {
          "94": "17"
        },
        "quantity": 7,
        "price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "title": "Размер: 18",
        "article": "",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTk1",
        "is_ordering": true,
        "is_run_out": false,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Миникольцо Полоски без камней черненое",
          "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
          "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
        },
        "attributes": {
          "94": "18"
        },
        "quantity": 4,
        "price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        }
      },
      {
        "title": "Размер: 19",
        "article": "",
        "global_id": "Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS85NTk2",
        "is_ordering": false,
        "is_run_out": true,
        "is_sale": false,
        "is_preorder": false,
        "image": {
          "title": "Миникольцо Полоски без камней черненое",
          "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
          "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
        },
        "attributes": {
          "94": "19"
        },
        "quantity": 0,
        "price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 200000,
          "currency_iso_code": "RUB"
        }
      }
    ],
    "images": [
      {
        "title": "Миникольцо Полоски без камней черненое",
        "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/5300/image.png",
        "uid": "7e22b5b1f521d86bc80d2c01a61b3adec1501d9e97d1a266592c6f9c49e5a806"
      },
      {
        "title": "Миникольцо Полоски без камней черненое",
        "url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/26264/450123b4-7c9e-4ae9-a04e-05fda504d0a2.jpg",
        "uid": "3d74d4dcde4cb820bc288b4f2956c81f2464d2b22c27fb8abdcd9a5589b4d769"
      }
    ],
    "properties": [],
    "attributes": [
      {
        "property_id": 89,
        "type": "AttributeDictionary",
        "title": "Цвет покрытия",
        "value": "чернение",
        "products_path": "/entities/46-chernenie"
      },
      {
        "property_id": 93,
        "type": "AttributeDictionary",
        "title": "Металл, проба",
        "value": "Серебро 925",
        "products_path": "/entities/37-serebro-925"
      }
    ],
    "custom_product_html": "",
    "text_blocks": [],
    "video_embed_html": null
  },
  "similarProducts": [
    {
      "id": 36046,
      "title": "Миникольцо Wire-V без камней серебряное",
      "is_sale": false,
      "has_ordering_goods": true,
      "is_label_new": false,
      "is_run_out": false,
      "is_sold": false,
      "index_image_url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/38072/4610625e-bad0-43b3-b8d1-4b191c3a4517.jpg",
      "second_image_url": null,
      "public_url": "http://wannabe.3001.vkontraste.ru/products/36046-minikoltso-wire-v-bez-kamney-serebryanoe",
      "short_details": null,
      "goods": [
        {
          "id": 32556,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32557,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32558,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32559,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32560,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32561,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32562,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32563,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 130000,
            "currency_iso_code": "RUB"
          }
        }
      ]
    },
    {
      "id": 35760,
      "title": "Кольцо Шибари 3 узла черненое",
      "is_sale": false,
      "has_ordering_goods": true,
      "is_label_new": false,
      "is_run_out": false,
      "is_sold": false,
      "index_image_url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/32899/bd9ea1a0-c624-472f-8a6a-3ac41d6b0c61.jpg",
      "second_image_url": null,
      "public_url": "http://wannabe.3001.vkontraste.ru/products/35760-koltso-shibari-3-uzla-chernenoe",
      "short_details": null,
      "goods": [
        {
          "id": 32272,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32273,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32274,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32275,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32276,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32277,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 32278,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 249900,
            "currency_iso_code": "RUB"
          }
        }
      ]
    },
    {
      "id": 21424,
      "title": "Миникольцо Полоски тонкие без камней серебряное р",
      "is_sale": false,
      "has_ordering_goods": true,
      "is_label_new": false,
      "is_run_out": false,
      "is_sold": false,
      "index_image_url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/8115/4fc965d0-3bb2-4e3a-812b-d79eab589cf7.jpg",
      "second_image_url": null,
      "public_url": "http://wannabe.3001.vkontraste.ru/products/21424-minikoltso-poloski-tonkie-bez-kamney-serebryanoe-r",
      "short_details": null,
      "goods": [
        {
          "id": 15731,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15559,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15732,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15733,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15560,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15561,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        }
      ]
    },
    {
      "id": 21423,
      "title": "Миникольцо Полоски тонкие без камней золоченое р",
      "is_sale": false,
      "has_ordering_goods": true,
      "is_label_new": false,
      "is_run_out": false,
      "is_sold": false,
      "index_image_url": "http://3001.vkontraste.ru/uploads/shop/5/uploads/product_image/image/8116/295ac392-ea0d-4cc8-9ff1-f762f1ccc8c1.jpg",
      "second_image_url": null,
      "public_url": "http://wannabe.3001.vkontraste.ru/products/21423-minikoltso-poloski-tonkie-bez-kamney-zolochenoe-r",
      "short_details": null,
      "goods": [
        {
          "id": 15735,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15556,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15736,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15737,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15557,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        },
        {
          "id": 15558,
          "type": "ProductItem",
          "is_sale": false,
          "price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          },
          "actual_price": {
            "cents": 200000,
            "currency_iso_code": "RUB"
          }
        }
      ]
    }
  ],
  "i18n": {
    "locale": "ru",
    "translations": {
      "vendor": {
        "not_published": "Магазин временно не работает",
        "made_in_kiiiosk": "Сделано на «Киоске»",
        "badges": {
          "new": "Новинка",
          "sale_percent": "SALE - %{percent}%",
          "not_available": "Не продается",
          "sale": "SALE",
          "sold": "Продано"
        },
        "search": {
          "results_title": "Результаты поиска (%{count})",
          "nothing_found": "К сожалению, ничего не найдено."
        },
        "seconds_count": "%{count} секунду",
        "seconds_count_plural_2": "%{count} секунды",
        "seconds_count_plural_5": "%{count} секунд",
        "errors": {
          "cart": {
            "empty": "В корзине нет товаров"
          },
          "coupon": {
            "not_found": "Несуществующий промокод %{code}",
            "expired": "Промокод просрочен %{code}"
          }
        },
        "placeholders": {
          "coupon": "Промо-код (если есть)",
          "search": "Поиск"
        },
        "alerts": {
          "confirm": "Точно очистить?"
        },
        "flashes": {
          "good_added_to_basket": "Товар \"%{title}\" добавлен в корзину"
        },
        "mails": {
          "signature": "С уважением, интернет-магазин \"%{name}\""
        },
        "auto_menu_items": {
          "blog": "Блог"
        },
        "top_banner": {
          "default_content": "Мы открылись!"
        },
        "order": {
          "fields": {
            "phone": "Телефон",
            "name": "Полное имя",
            "email": "Email",
            "city_title": "Город доставки",
            "address": "Адрес доставки",
            "comment": "Комментарий",
            "coupon_code": "Промокод"
          },
          "submit": "Оформить заказ",
          "pickup_address": "Адрес самовывоза:",
          "title": "Заказ №%{number}",
          "payment_type": "Способ оплаты: %{title}",
          "delivery_type": "Способ доставки: %{title}",
          "free_delivery_text_html": "Бесплатная доставка при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          "checkout_free_delivery_text_html": "Бесплатно при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          "go_back": "Вернуться назад",
          "next": "Продолжить",
          "delivery_tracking_id": "Трекинг-номер доставки: %{number}",
          "check_state": "Проверить статус доставки",
          "public_offer_accepted_html": "Согласен с условиями <u><a href=\"%{url}\" target=\"_blank\">публичной оферты</a></u>",
          "created": {
            "title": "Спасибо за заказ",
            "desc_html": "В ближайшее время менеджер свяжется с вами для подтверждения заказа. <br> Ваш телефон %{phone} <br> Ваш заказ %{link} на сумму %{price}\n"
          },
          "new": {
            "delivery_title": "Выберите тип доставки.",
            "payment_title": "Способы оплаты",
            "contacts_title": "Введите данные",
            "sum": "на сумму"
          },
          "redirect": "В течение 5-и секунд вы будете переправлены на страницу оплаты.",
          "redirecting": "Переправляю на сайт оплаты",
          "go_to_payment": "Перейти к оплате",
          "continue_shopping": "Продолжить покупки",
          "contents": "Состав заказа:",
          "delivery_price": "Стоимость доставки",
          "pay": "Оплатить"
        },
        "coupon": {
          "discount": "Скидка - %{discount}",
          "invalid": "Купон \"%{value}\" НЕ действующий",
          "checking": "Проверяю купон..",
          "error": "Ошибка при проверке купона. Попробуйте еще раз"
        },
        "cart": {
          "basket_button": "Корзина",
          "amount": "Количество",
          "overall": "Итого:",
          "title": "Корзина",
          "clear": "Очистить корзину",
          "not_available": "Больше не продается",
          "empty": "Пока тут ничего нет"
        },
        "wishlist": {
          "add_item": "Добавить в список желаний",
          "wishlist_button": "Список желаний",
          "private_title": "Ваш список желаний",
          "foreign_title": "Чей-то список желаний",
          "empty": "Пока тут ничего нет"
        },
        "packaging": {
          "add": "Добавить",
          "add_gift_package": "Добавить к заказу",
          "no_package": "Не добавлять"
        },
        "payment": {
          "w1": {
            "failure": {
              "title": "Оплата не прошла",
              "desc": "Оплата заказа не была произведена"
            },
            "success": {
              "title": "Спасибо за заказ",
              "desc": "Оплата заказа была произведена"
            }
          }
        },
        "category": {
          "continue_shopping": "Продолжить покупки",
          "empty": "Ой, а здесь ничего нет. Пока."
        },
        "dictionary_entity": {
          "continue_shopping": "Продолжить покупки",
          "empty": "Ой, а здесь ничего нет. Пока."
        },
        "similar_product": {
          "title": "С этим товаром покупают также"
        },
        "product": {
          "title": "Товар",
          "blank_price": "Цена неизвестна",
          "run_out": "Нет в наличии",
          "not_available": "Не продается",
          "available": "Можно купить",
          "sold_out_message_html": "&laquo;%{title}&raquo; сейчас не продается",
          "nothing_found_by_criteria": "Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.",
          "category_title": "Категория",
          "show_other_products": "Посмотреть другие товары",
          "show_all": "Показать все"
        },
        "properties": {
          "empty": "Нет характеристик для вывода"
        },
        "property": {
          "unknown_type": "Неизвестный тип характеристики",
          "defaults": {
            "size": "Размер",
            "color": "Цвет"
          }
        },
        "pages": {
          "titles": {
            "cart": "Корзина",
            "order": "Оформление заказа",
            "payment": "Оплата",
            "payment_success": "Успешная оплата",
            "payment_error": "Ошибка оплаты"
          }
        },
        "filter": {
          "availability": "Доступность",
          "price_range": "Ценовой диапазон",
          "selected_options": {
            "availability": "Доступность",
            "price_range": "Цена от %{from} до %{to} %{currency}"
          },
          "selected_availability": {
            "all": "Все",
            "available": "В наличии",
            "run_out": "Под заказ",
            "sale": "Распродажа",
            "unknown": "unknown"
          }
        },
        "button": {
          "to_cart": "В корзину",
          "select_good": "Выберите характеристику",
          "go_wishlist": "Перейти в \"Список желаний\"",
          "to_wishlist": "Добавить в \"Список желаний\"",
          "already": "Уже в корзине",
          "disable_with": {
            "sending": "Отправляем...",
            "saving": "Сохраняем...",
            "waiting": "Подождите...",
            "adding": "Добавляем..."
          }
        },
        "products": {
          "nothing_found_by_criteria": "По данным критериям ничего не найдено"
        },
        "client": {
          "auth": "Личный кабинет",
          "no_account": "Нет аккаунта?",
          "logged_in_with": "Вы уже авторизованы под именем<br /> <b>%{name}</b>.",
          "continue_logged": "Продолжить под этим именем..",
          "create_account": "Создать",
          "logout": "Выйти",
          "cabinet": {
            "title": "Личный кабинет",
            "button": "Кабинет",
            "create": "Создаем личный кабинет",
            "send_pin_code": "Выслать пин-код",
            "disable_with": "Высылаем..."
          }
        }
      }
    }
  },
  "formAuthenticity": {},
  "isWishlisted": false,
  "hasWishlist": false,
  "wishlistUrl": "/wishlist",
  "addWishlistUrl": "/wishlist/items"
}
  }
  // state = {
  //   currentState: this.isNeededLoading(this.props) ? LOADING_STATE : ERROR_STATE,
  //   productCard: null,
  // }
  componentDidMount() {
    const { productCardID, vendorID } = this.props;

    // if (this.isNeededLoading(this.props)) {
    //   load(vendorID, productCardID)
    //     .then((productCard) => {
    //       this.setState({
    //         productCard,
    //         currentState: READY_STATE,
    //       });
    //     })
    //     .fail(() => {
    //       this.setState({
    //         currentState: ERROR_STATE
    //       });
    //     });
    // }
  }
  isNeededLoading(props) {
    return !!(props.productCardID && props.vendorID);
  }
  render() {
    const { currentState, productCard } = this.state;

    switch(currentState) {
      case READY_STATE:
        return <ProductCard {...productCard} />;
      case LOADING_STATE:
        return <span>Loading...</span>;
      case ERROR_STATE:
        return <span>Loading error</span>;
      default:
        return null;
    }
  }
}

ProductCardContainer.propTypes = {
  productCardID: PropTypes.number,
  vendorID: PropTypes.number,
};

export default ProductCardContainer;